<script lang="ts">
	import { site, socials } from '$lib/data';
</script>

<footer class="border-t border-zinc-200 bg-zinc-50">
	<div class="mx-auto max-w-6xl px-6 py-8">
		<div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
			<p class="text-xs text-zinc-500">
				© {new Date().getFullYear()} {site.name}. Built with SvelteKit & Tailwind · Dummy starter.
			</p>
			<div class="flex flex-wrap gap-2">
				{#each socials as s (s.label)}
					<a
						href={s.href}
						class="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 hover:bg-zinc-100"
						target={s.href.startsWith('http') ? '_blank' : undefined}
						rel={s.href.startsWith('http') ? 'noreferrer' : undefined}>{s.label}</a
					>
				{/each}
			</div>
		</div>
		<a href="#hero" class="mt-6 inline-block text-xs text-zinc-500 hover:text-zinc-900">Back to top ↑</a>
	</div>
</footer>
