<script lang="ts">
	import { site, socials } from '$lib/data';
	import SocialIcon from '$lib/components/SocialIcon.svelte';
</script>

<footer
	class="relative isolate flex min-h-[45vh] flex-col overflow-hidden border-t border-[var(--color-text)]/10 bg-[var(--color-bg)] md:min-h-[50vh]"
>
	<div
		class="absolute inset-0 -z-10 bg-cover bg-center"
		style="background-image: url('/footer-bg.jpg')"
		aria-hidden="true"
	></div>
	<div class="absolute inset-0 -z-10 bg-[var(--color-bg)]/70" aria-hidden="true"></div>

	<div class="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col px-6">
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
						aria-label={s.label}
						class="inline-flex size-9 items-center justify-center rounded-full border border-white/20 text-zinc-100 hover:bg-white/10 hover:text-white"
						target={s.href.startsWith('http') ? '_blank' : undefined}
						rel={s.href.startsWith('http') ? 'noreferrer' : undefined}><SocialIcon label={s.label} /></a
					>
				{/each}
				<a
					href="#contact"
					class="rounded-full bg-white px-5 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100"
					>Get in touch →</a
				>
			</div>
		</div>

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
