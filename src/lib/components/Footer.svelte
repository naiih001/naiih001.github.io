<script lang="ts">
	import { site, socials } from '$lib/data';
</script>

<footer
	class="relative isolate flex min-h-[45vh] flex-col overflow-hidden border-t border-white/10 bg-zinc-900 md:min-h-[50vh]"
>
	<!-- Latest ~/Downloads image copied to static/footer-bg.jpg → served as /footer-bg.jpg -->
	<div
		class="absolute inset-0 -z-10 bg-cover bg-center"
		style="background-image: url('/footer-bg.jpg')"
		aria-hidden="true"
	></div>
	<div class="absolute inset-0 -z-10 bg-black/60" aria-hidden="true"></div>

	<div class="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-6">
		<!-- Statement / CTA zone — intentionally fills the half-page -->
		<div class="flex flex-1 flex-col justify-center gap-6 py-12 md:py-16">
			<p class="text-sm font-medium uppercase tracking-[0.2em] text-white/60">
				Available for new projects — Let's work together
			</p>
			<h2
				class="max-w-4xl text-balance text-5xl font-semibold leading-[0.85] tracking-tight text-white md:text-7xl lg:text-8xl"
			>
				<a href="mailto:{site.email}" class="transition-colors hover:text-white/90"
					>Let's talk.</a
				>
			</h2>
			<a
				href="mailto:{site.email}"
				class="inline-block text-xl font-medium text-white/90 underline decoration-white/30 underline-offset-8 hover:text-white hover:decoration-white md:text-2xl"
				>{site.email}</a
			>
			<div class="mt-2 flex flex-wrap gap-2">
				{#each socials as s (s.label)}
					<a
						href={s.href}
						class="rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium text-zinc-100 hover:bg-white/10 hover:text-white"
						target={s.href.startsWith('http') ? '_blank' : undefined}
						rel={s.href.startsWith('http') ? 'noreferrer' : undefined}>{s.label}</a
					>
				{/each}
				<a
					href="#contact"
					class="rounded-full bg-white px-5 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
					>Get in touch →</a
				>
			</div>
		</div>

		<!-- Bottom bar — fine print stays pinned to bottom -->
		<div
			class="flex flex-col gap-4 border-t border-white/10 py-6 md:flex-row md:items-center md:justify-between"
		>
			<p class="text-sm text-white/60">
				© {new Date().getFullYear()}
				{site.name} · {site.location} · Built with SvelteKit & Tailwind · Dummy starter.
			</p>
			<a href="#hero" class="shrink-0 text-sm text-white/60 hover:text-white">Back to top ↑</a>
		</div>
	</div>
</footer>
