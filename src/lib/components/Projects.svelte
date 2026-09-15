<script lang="ts">
	import { projects } from '$lib/data';
</script>

<section id="projects" class="mx-auto max-w-6xl px-6 py-16 md:py-24">
	<div class="mb-8">
		<h2 class="text-2xl font-semibold tracking-tight text-zinc-900">Projects</h2>
		<p class="mt-1 text-sm text-zinc-500">Dummy projects — swap thumbnails and links for your real work.</p>
	</div>

	<div class="grid gap-6 md:grid-cols-2">
		{#each projects as p (p.title)}
			<article
				class="flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 transition hover:border-zinc-300"
			>
				<div class="aspect-[16/9] bg-zinc-100 p-6">
					<div
						class="flex h-full items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-zinc-50 text-xs text-zinc-500"
					>
						Thumbnail placeholder
					</div>
				</div>
				<div class="flex flex-1 flex-col p-5">
					<div class="flex items-start justify-between gap-3">
						<h3 class="text-sm font-semibold text-zinc-900">{p.title}</h3>
						{#if p.featured}
							<span class="rounded-full bg-zinc-900 px-2 py-1 text-[10px] font-medium text-white"
								>Featured</span
							>
						{/if}
					</div>
					<p class="mt-2 line-clamp-3 text-sm leading-6 text-zinc-600">{p.description}</p>
					<div class="mt-3 flex flex-wrap gap-2">
						{#each p.tags as tag (tag)}
							<span class="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700"
								>{tag}</span
							>
						{/each}
					</div>
					<div class="mt-4 flex gap-3">
						{#if p.links.github}
							<a
								href={p.links.github}
								target="_blank"
								rel="noreferrer"
								class="text-xs font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
								>GitHub</a
							>
						{/if}
						{#if p.links.demo}
							<a
								href={p.links.demo}
								target="_blank"
								rel="noreferrer"
								class="text-xs font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
								>Live demo</a
							>
						{/if}
					</div>
				</div>
			</article>
		{/each}
	</div>
</section>
