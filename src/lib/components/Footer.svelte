<script lang="ts">
	import { site, socials } from '$lib/data';
</script>

<footer class="relative isolate overflow-hidden border-t border-white/10 bg-zinc-900">
	<!-- Latest ~/Downloads image copied to static/footer-bg.jpg → served as /footer-bg.jpg -->
	<div
		class="absolute inset-0 -z-10 bg-cover bg-center"
		style="background-image: url('/footer-bg.jpg')"
		aria-hidden="true"
	></div>
	<div class="absolute inset-0 -z-10 bg-black/50" aria-hidden="true"></div>

	<div class="relative z-10 mx-auto max-w-6xl px-6 py-8">
		<div class="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
			<p class="text-sm text-white/70">
				© {new Date().getFullYear()} {site.name}. Built with SvelteKit & Tailwind · Dummy starter.
			</p>
			<div class="flex flex-wrap gap-2">
				{#each socials as s (s.label)}
					<a
						href={s.href}
						class="rounded-full border border-white/20 px-3 py-1 text-sm text-zinc-200 hover:bg-white/10 hover:text-white"
						target={s.href.startsWith('http') ? '_blank' : undefined}
						rel={s.href.startsWith('http') ? 'noreferrer' : undefined}>{s.label}</a
					>
				{/each}
			</div>
		</div>
		<a href="#hero" class="mt-6 inline-block text-sm text-white/60 hover:text-white">Back to top ↑</a>
	</div>
</footer>
