<script lang="ts">
	import { site, socials } from '$lib/data';
</script>

<section
	id="hero"
	class="relative flex min-h-[100svh] min-h-[100dvh] items-center overflow-hidden bg-[var(--color-bg)]"
>
	<div
		aria-hidden="true"
		class="absolute inset-0 bg-cover bg-center"
		style="background-image: url('/hero-bg.jpg')"
	></div>
	<div aria-hidden="true" class="absolute inset-0 bg-[var(--color-bg)]/65"></div>
	<div
		aria-hidden="true"
		class="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/55 via-transparent to-transparent"
	></div>

	<div
		class="relative mx-auto flex w-full max-w-6xl px-6 pt-16 pb-20 md:pt-28 md:pb-28 lg:pt-32 lg:pb-32"
	>
		<div class="max-w-2xl mr-auto text-left">
			<p class="mb-3 text-base font-medium tracking-wide text-[var(--color-muted)]">
				{site.location} · Available for new projects
			</p>
			<h1 class="text-left text-4xl tracking-tight text-[var(--color-text)] md:text-5xl">
				<span class="font-display font-normal">{site.name}</span>
				<span class="block text-left text-2xl font-normal text-[var(--color-text)]/85 md:text-3xl">{site.role}</span>
			</h1>
			<p class="mt-4 max-w-xl text-left text-base md:text-lg leading-7 text-[var(--color-muted)]">
				{site.tagline}
			</p>
			<div class="mt-6 flex flex-wrap justify-start gap-3">
				<a
					href="#projects"
					class="rounded-full bg-[var(--color-text)] px-5 py-2.5 text-base font-medium text-[var(--color-bg)] hover:opacity-90"
					>View projects</a
				>
				<a
					href="#contact"
					class="rounded-full border border-[var(--color-text)]/20 bg-[var(--color-surface)] px-5 py-2.5 text-base font-medium text-[var(--color-text)] backdrop-blur hover:bg-[var(--color-surface)]/80"
					>Get in touch</a
				>
			</div>
			<div class="mt-8 flex flex-wrap justify-start gap-3">
				{#each socials as s (s.label)}
					<a
						href={s.href}
						class="rounded-full border border-[var(--color-text)]/15 bg-[var(--color-surface)] px-3 py-1.5 text-sm font-medium text-[var(--color-text)] backdrop-blur hover:bg-[var(--color-surface)]/80"
						target={s.href.startsWith('http') ? '_blank' : undefined}
						rel={s.href.startsWith('http') ? 'noreferrer' : undefined}>{s.label}</a
					>
				{/each}
			</div>
		</div>
	</div>
</section>
