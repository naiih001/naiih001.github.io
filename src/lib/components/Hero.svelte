<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { site, socials } from '$lib/data';
	import SocialIcon from '$lib/components/SocialIcon.svelte';

	gsap.registerPlugin(ScrollTrigger);

	let video: HTMLVideoElement | undefined = $state();
	let section: HTMLElement | undefined = $state();
	let cvOpen = $state(false);
	let cvWrap: HTMLDivElement | undefined = $state();

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

		const onDocClick = (e: MouseEvent) => {
			if (cvOpen && cvWrap && !cvWrap.contains(e.target as Node)) cvOpen = false;
		};
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') cvOpen = false;
		};
			document.addEventListener('click', onDocClick);
			document.addEventListener('keydown', onKey);

		return () => {
			ctx?.revert();
			document.removeEventListener('click', onDocClick);
			document.removeEventListener('keydown', onKey);
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
				<div bind:this={cvWrap} class="relative">
					<button
						type="button"
						class="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-base font-medium text-white backdrop-blur hover:bg-white/20"
						aria-haspopup="menu"
						aria-expanded={cvOpen}
						onclick={(e) => { e.stopPropagation(); cvOpen = !cvOpen; }}
					>
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v13"/><path d="M7 12l5 5 5-5"/><path d="M3 17v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2"/></svg>
						Download CV
						<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="transition-transform duration-200 {cvOpen ? 'rotate-180' : ''}"><path d="m6 9 6 6 6-6"/></svg>
					</button>
					<div
							role="menu"
							hidden={!cvOpen}
							class="absolute left-0 top-[calc(100%+10px)] z-20 min-w-[220px] overflow-hidden rounded-[20px] border border-white/30 bg-white/70 p-1.5 shadow-[0_16px_48px_rgba(7,25,52,0.28),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-2xl supports-[backdrop-filter]:bg-white/55 {cvOpen ? 'block' : 'hidden'}"
							style="backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%);"
						>
							<a
								role="menuitem"
								href="/CV.pdf"
								download="Isaac-Hayab-CV.pdf"
								class="group flex items-center justify-between rounded-[14px] px-3.5 py-2.5 text-sm font-medium text-[#172033] hover:bg-[#172033]/90 hover:text-white hover:backdrop-blur transition-all"
								onclick={() => (cvOpen = false)}
							>
								<span class="flex items-center gap-2"><span class="grid h-7 w-7 place-items-center rounded-full bg-[#d17857]/15 text-[#d17857]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M10 13H8"/><path d="M12 13v6"/><path d="M10 19h4"/></svg></span> PDF</span><span class="text-xs tracking-wide text-[#536070] group-hover:text-white/70">31 KB</span>
							</a>
							<a
								role="menuitem"
								href="/CV.docx"
								download="Isaac-Hayab-CV.docx"
								class="group flex items-center justify-between rounded-[14px] px-3.5 py-2.5 text-sm font-medium text-[#172033] hover:bg-[#172033]/90 hover:text-white hover:backdrop-blur transition-all"
								onclick={() => (cvOpen = false)}
							>
								<span class="flex items-center gap-2"><span class="grid h-7 w-7 place-items-center rounded-full bg-[#2f5f57]/12 text-[#2f5f57]"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h3a2 2 0 0 1 0 4H8z"/><path d="M8 17h2"/></svg></span> DOCX</span><span class="text-xs tracking-wide text-[#536070]">39 KB</span>
							</a>
						</div>
				</div>
			</div>
			<!-- Agent/bot fallback: always in DOM and visible to crawlers/LLMs that don't run JS -->
			<div class="sr-only" aria-hidden="false">
				<a href="/cv.pdf" download="Isaac-Hayab-CV.pdf" type="application/pdf">Download CV — PDF</a>
				<a href="/cv.docx" download="Isaac-Hayab-CV.docx" type="application/vnd.openxmlformats-officedocument.wordprocessingml.document">Download CV — DOCX</a>
				<a href="/CV.pdf" type="application/pdf">CV PDF (alternate case)</a>
				<a href="/CV.docx" type="application/vnd.openxmlformats-officedocument.wordprocessingml.document">CV DOCX (alternate case)</a>
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
