<script lang="ts">
	import TechIcon from '$lib/components/TechIcon.svelte';
	import { projects } from '$lib/data';

	let parchIndex = $state(0);
	let failed = $state<Record<string, boolean>>({});
	let activeTag = $state('All');
	let showAll = $state(false);
	let showAllTags = $state(false);

	const INITIAL_PROJECTS = 4;
	const INITIAL_TAGS = 6;
	const TAGS_PER_CARD = 3;

	let allTags = $derived([...new Set(projects.flatMap((p) => p.tags))].sort((a, b) => a.localeCompare(b)));
	let tagCounts = $derived(
		Object.fromEntries(allTags.map((t) => [t, projects.filter((p) => p.tags.includes(t)).length]))
	);
	let filtered = $derived(activeTag === 'All' ? projects : projects.filter((p) => p.tags.includes(activeTag)));
	let sortedTags = $derived([...allTags].sort((a, b) => (tagCounts[b] - tagCounts[a]) || a.localeCompare(b)));
	let visibleFilterTags = $derived(showAllTags ? sortedTags : sortedTags.slice(0, INITIAL_TAGS));
	let visibleProjects = $derived(showAll ? filtered : filtered.slice(0, INITIAL_PROJECTS));
	let remaining = $derived(Math.max(0, filtered.length - INITIAL_PROJECTS));

	$effect(() => {
		void filtered.length;
		showAll = false;
	});

	function webpOf(png: string) {
		return png.replace(/\.png$/i, '.webp');
	}
	function onImgError(src: string) {
		failed[src] = true;
	}
</script>

<section id="projects" class="bg-[#f4efe7] text-[#172033]">
	<div class="mx-auto max-w-6xl px-6 py-20 md:py-28">
		<div class="mb-12 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
			<h2 class="max-w-2xl text-4xl font-semibold leading-none tracking-tight text-[#172033] md:text-6xl">
				Selected builds, framed by engineering judgment.
			</h2>
			<p class="max-w-xl text-lg leading-8 text-[#536070] md:justify-self-end">
				Each project is presented by the decision it tests: data workflows, commerce state, documentation structure, or backend delivery.
			</p>
		</div>

		<div class="mb-6 flex flex-wrap gap-1.5" role="group" aria-label="Filter projects by tag">
			<button
				type="button"
				aria-pressed={activeTag === 'All'}
				onclick={() => { activeTag = 'All'; showAll = false; }}
				class="rounded-full px-3 py-1 text-xs font-medium ring-1 transition {activeTag === 'All'
					? 'bg-[#172033] text-white ring-[#172033]'
					: 'bg-[#fbf8f2] text-[#536070] ring-[#172033]/[0.06] hover:bg-white hover:ring-[#172033]/10'}"
			>
				All <span class="opacity-60 font-normal">({projects.length})</span>
			</button>
			{#each visibleFilterTags as t (t)}
				<button
					type="button"
					aria-pressed={activeTag === t}
					onclick={() => { activeTag = t; showAll = false; }}
					class="rounded-full px-3 py-1 text-xs font-medium ring-1 transition {activeTag === t
						? 'bg-[#172033] text-white ring-[#172033]'
						: 'bg-[#fbf8f2] text-[#536070] ring-[#172033]/[0.06] hover:bg-white hover:ring-[#172033]/10'}"
				>
					{t} <span class="opacity-60 font-normal">({tagCounts[t]})</span>
				</button>
			{/each}
			{#if allTags.length > INITIAL_TAGS}
				<button
					type="button"
					onclick={() => (showAllTags = !showAllTags)}
					class="rounded-full px-3 py-1 text-xs font-medium ring-1 transition bg-white text-[#172033] ring-[#172033]/10 hover:bg-[#fbf8f2]"
				>
					{showAllTags ? 'Show fewer' : `+${allTags.length - INITIAL_TAGS} more`}
				</button>
			{/if}
		</div>

		{#if filtered.length === 0}
			<div class="rounded-2xl bg-white p-10 text-center ring-1 ring-[#172033]/10">
				<p class="text-base font-medium text-[#172033]">No projects match "{activeTag}".</p>
				<button
					type="button"
					onclick={() => { activeTag = 'All'; showAll = false; }}
					class="mt-4 rounded-full bg-[#172033] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#1e2b47]"
				>
					Clear filter
				</button>
			</div>
		{:else}
			<div class="grid gap-5 md:grid-cols-2">
				{#each visibleProjects as p, index (p.title)}
				{@const imgs = p.images ?? (p.image ? [p.image] : [])}
				{@const hasImage = imgs.length > 0}
				{@const isCarousel = (p.images?.length ?? 0) > 1}
				{@const currentSrc = isCarousel ? imgs[parchIndex % imgs.length] : imgs[0]}
				{@const isFailed = currentSrc ? !!failed[currentSrc] : false}
				<article class="group flex min-h-[36rem] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_18px_55px_rgba(23,32,51,0.08)] ring-1 ring-[#172033]/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(23,32,51,0.12)]">
					{#if hasImage && currentSrc && !isFailed}
						<!-- Image header: <picture> WebP+PNG with scrim and text overlay; carousel for PARCH -->
						<div class="image-band relative h-[320px] overflow-hidden bg-[#172033] md:h-[420px]">
							<picture>
								<source srcset={webpOf(currentSrc)} type="image/webp" />
								<img
									src={currentSrc}
									alt={isCarousel ? `${p.title} screenshot ${parchIndex + 1} of ${imgs.length}` : `${p.title} screenshot`}
									class="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.02]"
									loading="lazy"
									decoding="async"
									onerror={() => onImgError(currentSrc)}
								/>
							</picture>
							<!-- scrim for legibility -->
							<div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172033]/85 via-[#172033]/30 to-[#172033]/10" aria-hidden="true"></div>
							<!-- text overlay (same content as generative header) -->
							<div class="pointer-events-none absolute inset-0 flex flex-col justify-between p-5 text-white">
								<div class="flex items-start justify-between gap-4">
									<p class="max-w-[12rem] text-sm font-medium uppercase tracking-[0.18em] text-white/80 drop-shadow-sm">{p.focus}</p>
									{#if p.featured}
										<span class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#172033] shadow-sm">Featured</span>
									{/if}
								</div>
								<p class="font-mono text-5xl font-medium leading-none tracking-tighter text-white/95 md:text-6xl drop-shadow-sm">{String(index + 1).padStart(2, '0')}</p>
							</div>
							{#if isCarousel}
								<!-- carousel controls -->
								<button
									type="button"
									aria-label="Previous screenshot"
									class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#172033] shadow-md ring-1 ring-black/5 backdrop-blur transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d17857]"
									onclick={() => { parchIndex = (parchIndex - 1 + imgs.length) % imgs.length; }}
								>
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M10 12L6 8L10 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
								</button>
								<button
									type="button"
									aria-label="Next screenshot"
									class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#172033] shadow-md ring-1 ring-black/5 backdrop-blur transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d17857]"
									onclick={() => { parchIndex = (parchIndex + 1) % imgs.length; }}
								>
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
								</button>
								<div class="absolute bottom-2.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[#172033]/45 px-2.5 py-1.5 backdrop-blur" role="tablist" aria-label="PARCH screenshots">
									{#each imgs as _, i (i)}
										<button
											type="button"
											role="tab"
											aria-selected={parchIndex === i}
											aria-label={`Show slide ${i + 1} of ${imgs.length}`}
											class="h-1.5 rounded-full transition-all {parchIndex === i ? 'w-5 bg-white' : 'w-1.5 bg-white/60 hover:bg-white/90'}"
											onclick={() => { parchIndex = i; }}
										></button>
									{/each}
								</div>
							{/if}
						</div>
					{:else}
						<!-- Generative fallback header (no image or load failed) -->
						<div class="relative min-h-[320px] overflow-hidden bg-[#172033] p-5 text-white md:min-h-[420px]">
							<div class="absolute inset-0 opacity-80" aria-hidden="true">
								<div class="absolute left-6 top-6 h-24 w-24 rounded-full bg-[#d17857]/35 blur-2xl"></div>
								<div class="absolute bottom-0 right-0 h-36 w-36 rounded-full bg-[#edf3f1]/20 blur-3xl"></div>
							</div>
							<div class="relative flex h-full flex-col justify-between gap-10">
								<div class="flex items-start justify-between gap-4">
									<p class="max-w-[12rem] text-sm font-medium uppercase tracking-[0.18em] text-white/62">{p.focus}</p>
									{#if p.featured}
										<span class="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#172033]">Featured</span>
									{/if}
								</div>
								<p class="font-mono text-5xl font-medium leading-none tracking-tighter text-white/92 md:text-6xl">{String(index + 1).padStart(2, '0')}</p>
							</div>
						</div>
					{/if}

					<div class="flex flex-1 flex-col p-5 md:p-6">
						<h3 class="text-2xl font-semibold leading-tight text-[#172033]">{p.title}</h3>
						<p class="mt-3 text-base leading-7 text-[#536070]">{p.description}</p>
						<div class="mt-5 rounded-2xl bg-[#fbf8f2] p-4 ring-1 ring-[#172033]/8">
							<p class="text-sm font-semibold uppercase tracking-[0.14em] text-[#d17857]">Outcome</p>
							<p class="mt-2 text-base leading-7 text-[#2c3648]">{p.outcome}</p>
						</div>
						<div class="mt-4 flex flex-wrap items-center gap-1.5">
							{#each p.tags.slice(0, TAGS_PER_CARD) as tag (tag)}
								<TechIcon label={tag} />
							{/each}
							{#if p.tags.length > TAGS_PER_CARD}
								<span
									title={p.tags.slice(TAGS_PER_CARD).join(', ')}
									class="rounded-full bg-[#f6f1ea] px-2.5 py-1 text-xs font-medium leading-none text-[#536070] ring-1 ring-[#172033]/[0.06]"
									>+{p.tags.length - TAGS_PER_CARD}</span
								>
							{/if}
						</div>
						<div class="mt-auto flex gap-4 pt-6">
							{#if p.links.github}
								<a
									href={p.links.github}
									target="_blank"
									rel="noreferrer"
									class="text-sm font-semibold text-[#172033] underline decoration-[#d17857]/50 underline-offset-4 transition hover:decoration-[#d17857]"
									>GitHub</a
								>
							{/if}
							{#if p.links.demo}
								<a
									href={p.links.demo}
									target="_blank"
									rel="noreferrer"
									class="text-sm font-semibold text-[#172033] underline decoration-[#d17857]/50 underline-offset-4 transition hover:decoration-[#d17857]"
									>Live demo</a
								>
							{/if}
						</div>
					</div>
				</article>
			{/each}
			</div>
			{#if filtered.length > INITIAL_PROJECTS}
				<div class="mt-8 flex justify-center">
					<button
						type="button"
						onclick={() => (showAll = !showAll)}
						class="rounded-full bg-[#172033] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1e2b47] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d17857] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4efe7]"
					>
						{showAll ? 'Show fewer projects' : `Show all projects (${remaining} more)`}
					</button>
				</div>
			{/if}
		{/if}
	</div>
</section>
