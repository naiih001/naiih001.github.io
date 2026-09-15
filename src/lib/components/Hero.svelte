<script lang="ts">
	import { site, socials } from '$lib/data';
</script>

<section
	id="hero"
	class="relative flex min-h-[100svh] min-h-[100dvh] items-center overflow-hidden bg-zinc-900"
>
	<!-- Background image + overlays (from ~/Downloads/7wSVM.jpg → static/hero-bg.jpg) -->
	<div
		aria-hidden="true"
		class="absolute inset-0 bg-cover bg-center"
		style="background-image: url('/hero-bg.jpg')"
	></div>
	<div aria-hidden="true" class="absolute inset-0 bg-zinc-950/60"></div>
	<div
		aria-hidden="true"
		class="absolute inset-0 bg-gradient-to-t from-zinc-950/50 via-transparent to-transparent"
	></div>

	<div
		class="relative mx-auto flex w-full max-w-6xl px-6 pt-16 pb-20 md:pt-28 md:pb-28 lg:pt-32 lg:pb-32"
	>
		<div class="max-w-2xl mr-auto text-left">
			<p class="mb-3 text-base font-medium tracking-wide text-zinc-300">
				{site.location} · Available for new projects
			</p>
			<h1 class="text-left text-4xl tracking-tight text-white md:text-5xl">
				<span class="font-display font-normal">{site.name}</span>
				<span class="block text-left text-2xl font-normal text-zinc-200 md:text-3xl">{site.role}</span>
			</h1>
			<p class="mt-4 max-w-xl text-left text-base md:text-lg leading-7 text-zinc-200">
				{site.tagline}
			</p>
			<div class="mt-6 flex flex-wrap justify-start gap-3">
				<a
					href="#projects"
					class="rounded-full bg-white px-5 py-2.5 text-base font-medium text-zinc-900 hover:bg-zinc-100"
					>View projects</a
				>
				<a
					href="#contact"
					class="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-base font-medium text-white backdrop-blur hover:bg-white/15"
					>Get in touch</a
				>
			</div>
			<div class="mt-8 flex flex-wrap justify-start gap-3">
				{#each socials as s (s.label)}
					<a
						href={s.href}
						class="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-zinc-100 backdrop-blur hover:bg-white/15"
						target={s.href.startsWith('http') ? '_blank' : undefined}
						rel={s.href.startsWith('http') ? 'noreferrer' : undefined}>{s.label}</a
					>
				{/each}
			</div>
		</div>
	</div>
</section>
