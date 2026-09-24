<script lang="ts">
	import { onMount } from 'svelte';
	import { site, socials } from '$lib/data';
	import SocialIcon from '$lib/components/SocialIcon.svelte';

	let video: HTMLVideoElement | undefined = $state();
	let section: HTMLElement | undefined = $state();

	onMount(() => {
		const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (reduced) {
			// Don't download the video at all: poster alone is the reduced-motion experience
			video?.pause();
			video?.removeAttribute('autoplay');
			video?.querySelectorAll('source').forEach((s) => s.remove());
			video?.load();
		}

		let ctx: any | undefined;
		let cancelled = false;

		if (!reduced && section && video) {
			const run = async () => {
				if (cancelled) return;
				const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
					import('gsap'),
					import('gsap/ScrollTrigger')
				]);
				gsap.registerPlugin(ScrollTrigger);
				if (cancelled || !section || !video) return;
				const videoEl: HTMLVideoElement = video!;
				const sectionEl: HTMLElement = section!;
				ctx = gsap.context(() => {
					const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
					tl.from(videoEl, { scale: 1.15, duration: 2, ease: 'power2.out' }, 0);
					tl.from('[data-hero-item]', { y: 36, opacity: 0, duration: 0.9, stagger: 0.12 }, 0.15);
					gsap.to(videoEl, {
						yPercent: 12,
						ease: 'none',
						scrollTrigger: { trigger: sectionEl, start: 'top top', end: 'bottom top', scrub: true }
					});
				}, sectionEl);
			};
			if ('requestIdleCallback' in window) (window as any).requestIdleCallback(() => { run(); }, { timeout: 2000 });
			else setTimeout(run, 150);
		}

		return () => {
			cancelled = true;
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
		preload="none"
		poster="/hero-bg.webp"
	>
		<source src="/hero-vid.mp4" type="video/mp4" media="(min-width: 641px)" />
	</video>
	<div aria-hidden="true" class="absolute inset-0 bg-[var(--color-bg)]/40"></div>
	<div
		aria-hidden="true"
		class="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/55 via-[var(--color-bg)]/25 to-[var(--color-bg)]/35"
	></div>
	<div
		class="relative mx-auto flex w-full max-w-6xl px-6 pt-16 pb-20 md:pt-28 md:pb-28 lg:pt-32 lg:pb-32"
	>
		<div class="max-w-2xl mr-auto text-left [text-shadow:0_1px_12px_rgba(7,25,52,0.9)]">
			<p data-hero-item class="mb-3 text-xs font-medium tracking-wide text-white/70">
				{site.location} · Available for new projects
			</p>
			<h1 data-hero-item class="text-left text-4xl tracking-tight text-white md:text-5xl">
				<span class="font-semibold tracking-[-0.03em]">{site.name}</span>
				<span class="block text-left text-2xl font-normal tracking-[-0.01em] text-white/85 md:text-3xl">{site.role}</span>
			</h1>
			<div data-hero-item class="mt-6 flex flex-wrap justify-start gap-3">
				<a
					href="#contact"
					class="rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-base font-medium text-white backdrop-blur hover:bg-white/20"
					>Get in touch</a
				>
				<a
					href="/CV.pdf"
					download="Isaac-Hayab-CV.pdf"
					class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-base font-medium text-white backdrop-blur hover:bg-white/20"
				>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v13"/><path d="M7 12l5 5 5-5"/><path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/></svg>
					Download CV
				</a>
			</div>
			<!-- Agent/bot fallback: always in DOM and visible to crawlers/LLMs that don't run JS -->
			<div class="sr-only" aria-hidden="false">
				<a href="/CV.pdf" download="Isaac-Hayab-CV.pdf" type="application/pdf">Download CV — PDF</a>
				<a href="/cv.pdf" download="Isaac-Hayab-CV.pdf" type="application/pdf">CV PDF (alternate case)</a>
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
			<p data-hero-item class="mt-4 text-left text-sm text-white/60 md:hidden">
				Built with <a href="https://github.com/naiih001/lean" target="_blank" rel="noreferrer" class="italic text-white/90 underline decoration-white/25 underline-offset-4 hover:text-white hover:decoration-white/50">lean</a>
			</p>
		</div>
	</div>
	<p data-hero-item class="hidden md:block absolute bottom-6 right-6 text-sm text-white/60 md:bottom-8 md:right-8 lg:bottom-8 lg:right-8">
		Built with <a href="https://github.com/naiih001/lean" target="_blank" rel="noreferrer" class="italic text-white/90 underline decoration-white/25 underline-offset-4 hover:text-white hover:decoration-white/50">lean</a>
	</p>
</section>
