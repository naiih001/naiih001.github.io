<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { site, socials } from '$lib/data';
	import SocialIcon from '$lib/components/SocialIcon.svelte';

	gsap.registerPlugin(ScrollTrigger);

	let video: HTMLVideoElement | undefined = $state();
	let section: HTMLElement | undefined = $state();

	onMount(() => {
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced) {
			video?.pause();
			video?.removeAttribute('autoplay');
		}

		let ctx: gsap.Context | undefined;
		if (!reduced && section && video) {
			const videoEl: HTMLVideoElement = video;
			const sectionEl: HTMLElement = section;
			ctx = gsap.context(() => {
				// Cinematic stagger + bg zoom on load
				const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
				tl.from(videoEl, { scale: 1.15, duration: 2, ease: 'power2.out' }, 0);
				tl.from(
					'[data-hero-item]',
					{ y: 36, opacity: 0, duration: 0.9, stagger: 0.12 },
					0.15
				);
				// Gentle scroll parallax on the bg video
				gsap.to(videoEl, {
					yPercent: 12,
					ease: 'none',
					scrollTrigger: { trigger: sectionEl, start: 'top top', end: 'bottom top', scrub: true }
				});
			}, sectionEl);
		}

		return () => {
			ctx?.revert();
		};
	});
</script>

<section
	bind:this={section}
	id="hero"
	class="relative flex min-h-[100svh] min-h-[100dvh] items-center overflow-hidden bg-[var(--color-bg)]"
>
	<video
		bind:this={video}
		aria-hidden="true"
		class="absolute inset-0 h-full w-full object-cover"
		style="object-position: center"
		autoplay
		muted
		loop
		playsinline
		preload="metadata"
		poster="/hero-bg.jpg"
	>
		<source src="/hero-vid.mp4" type="video/mp4" />
	</video>
	<div aria-hidden="true" class="absolute inset-0 bg-[var(--color-bg)]/45"></div>
	<div
		aria-hidden="true"
		class="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/70 via-[var(--color-bg)]/30 to-transparent"
	></div>
	<div
		class="relative mx-auto flex w-full max-w-6xl px-6 pt-16 pb-20 md:pt-28 md:pb-28 lg:pt-32 lg:pb-32"
	>
		<div class="max-w-2xl mr-auto text-left [text-shadow:0_1px_12px_rgba(7,25,52,0.9)]">
			<p data-hero-item class="mb-3 text-base font-medium tracking-wide text-white/70">
				{site.location} · Available for new projects
			</p>
			<h1 data-hero-item class="text-left text-4xl tracking-tight text-white md:text-5xl">
				<span class="font-semibold tracking-[-0.03em]">{site.name}</span>
				<span class="block text-left text-2xl font-normal tracking-[-0.01em] text-white/85 md:text-3xl">{site.role}</span>
			</h1>
			<p data-hero-item class="mt-4 max-w-xl text-left text-base md:text-lg leading-7 text-white/80">
				{site.tagline}
			</p>
			<div data-hero-item class="mt-6 flex flex-wrap justify-start gap-3">
				<a
					href="#projects"
					class="rounded-full bg-white px-5 py-2.5 text-base font-medium text-[var(--color-bg)] hover:opacity-90"
					>View projects</a
				>
				<a
					href="#contact"
					class="rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-base font-medium text-white backdrop-blur hover:bg-white/20"
					>Get in touch</a
				>
			</div>
			<div data-hero-item class="mt-8 flex flex-wrap justify-start gap-2">
				{#each socials as s (s.label)}
					<a
						href={s.href}
						aria-label={s.label}
						class="inline-flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/90 backdrop-blur hover:bg-white/20 hover:text-white"
						target={s.href.startsWith('http') ? '_blank' : undefined}
						rel={s.href.startsWith('http') ? 'noreferrer' : undefined}><SocialIcon label={s.label} /></a
					>
				{/each}
			</div>
		</div>
	</div>
</section>
