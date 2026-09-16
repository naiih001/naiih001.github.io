<script lang="ts">
	import { projects } from '$lib/data';
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

		<div class="grid gap-5 md:grid-cols-2">
			{#each projects as p, index (p.title)}
				<article class="group flex min-h-[28rem] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_18px_55px_rgba(23,32,51,0.08)] ring-1 ring-[#172033]/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(23,32,51,0.12)]">
					<div class="relative min-h-44 overflow-hidden bg-[#172033] p-5 text-white">
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

					<div class="flex flex-1 flex-col p-5 md:p-6">
						<h3 class="text-2xl font-semibold leading-tight text-[#172033]">{p.title}</h3>
						<p class="mt-3 text-base leading-7 text-[#536070]">{p.description}</p>
						<div class="mt-5 rounded-2xl bg-[#fbf8f2] p-4 ring-1 ring-[#172033]/8">
							<p class="text-sm font-semibold uppercase tracking-[0.14em] text-[#d17857]">Outcome</p>
							<p class="mt-2 text-base leading-7 text-[#2c3648]">{p.outcome}</p>
						</div>
						<div class="mt-5 flex flex-wrap gap-2">
							{#each p.tags as tag (tag)}
								<span class="rounded-full bg-[#edf3f1] px-3 py-1.5 text-sm font-medium text-[#2f5f57] ring-1 ring-[#2f5f57]/10">{tag}</span>
							{/each}
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
	</div>
</section>
