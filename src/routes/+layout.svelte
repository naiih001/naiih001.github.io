<script lang="ts">
	import '../app.css';
	import '@fontsource/instrument-sans/latin-400.css';
	import '@fontsource/instrument-sans/latin-500.css';
	import '@fontsource/instrument-sans/latin-600.css';
	import '@fontsource/geist-mono/latin-500.css';
	import '@fontsource/prata/latin-400.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		const isMobile = () => window.matchMedia('(max-width: 767px)').matches;
		const getHeaderH = () => document.querySelector('header')?.getBoundingClientRect().height ?? 64;

		const centerTarget = (id: string) => {
			if (!id) return;
			if (id === 'hero') {
				const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
				window.scrollTo({ top: 0, behavior: reduced ? ('instant' as ScrollBehavior) : 'smooth' });
				history.pushState(null, '', '#hero');
				return;
			}
			let el: HTMLElement | null = null;
			if (id === 'contact') {
				el =
					(document.getElementById('contact-card') as HTMLElement | null) ??
					(document.getElementById('contact') as HTMLElement | null);
			} else {
				el = document.getElementById(id) as HTMLElement | null;
			}
			if (!el) return;

			// Desktop: keep native scroll-padding behavior, don't override
			if (!isMobile()) return;

			const headerH = getHeaderH();
			const vh = window.visualViewport?.height ?? window.innerHeight;
			const avail = vh - headerH;
			const rect = el.getBoundingClientRect();
			const h = rect.height;
			let top: number;
			if (h >= avail) {
				top = window.scrollY + rect.top - headerH - 12;
			} else {
				top = window.scrollY + rect.top - headerH - (avail - h) / 2;
			}
			const maxTop = document.documentElement.scrollHeight - window.innerHeight;
			const clamped = Math.max(0, Math.min(top, maxTop));
			const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			window.scrollTo({ top: clamped, behavior: reduced ? ('instant' as ScrollBehavior) : 'smooth' });
			history.pushState(null, '', `#${id}`);
		};

		const onClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
			if (!anchor) return;
			const href = anchor.getAttribute('href') ?? '';
			if (!href.startsWith('#') || href.length < 2) return;
			const id = href.slice(1);
			if (!document.getElementById(id) && !(id === 'contact' && (document.getElementById('contact-card') || document.getElementById('contact')))) return;
			if (!isMobile()) return;
			e.preventDefault();
			// Wait for mobile sheet to close/unmount before measuring
			requestAnimationFrame(() => setTimeout(() => centerTarget(id), 70));
		};
		document.addEventListener('click', onClick);

		// If landing directly on a hash, center after layout (mobile only)
		if (location.hash && location.hash.length > 1) {
			const hashId = location.hash.slice(1);
			requestAnimationFrame(() => setTimeout(() => centerTarget(hashId), 80));
		}

		return () => document.removeEventListener('click', onClick);
	});
</script>

<svelte:head>
	<link rel="preload" as="image" href="/hero-bg.webp" fetchpriority="high" type="image/webp" />
	<meta name="theme-color" content="#071934" />
	<link rel="icon" type="image/jpeg" href="/profile.jpeg" />
	<link rel="apple-touch-icon" href="/profile.jpeg" />
	<link rel="alternate" type="application/pdf" href="/cv.pdf" title="Isaac Hayab CV — PDF" />
	<link rel="alternate" type="application/vnd.openxmlformats-officedocument.wordprocessingml.document" href="/cv.docx" title="Isaac Hayab CV — DOCX" />
	<title>Isaac Hayab — Backend Engineer</title>
	<meta name="description" content="Backend engineer portfolio for Isaac Hayab, focused on Rust, TypeScript, reliable systems, and product-minded delivery." />
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Isaac Hayab',
		jobTitle: 'Backend Engineer',
		url: 'https://isaachayab.com',
		email: 'mailto:nommohhayab@outlook.com',
		sameAs: ['https://github.com/naiih001', 'https://linkedin.com/isaac_hayab', 'https://x.com/naet001'],
		description: 'Backend engineer focused on Rust, TypeScript, reliable systems, and product-minded delivery.',
		hasCredential: undefined
	})}<\/script>`}
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'CreativeWork',
		name: 'Isaac Hayab — CV',
		description: 'Curriculum Vitae for Isaac Hayab, Backend Engineer',
		encoding: [
			{ '@type': 'MediaObject', contentUrl: '/cv.pdf', encodingFormat: 'application/pdf', name: 'CV — PDF' },
			{ '@type': 'MediaObject', contentUrl: '/cv.docx', encodingFormat: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', name: 'CV — DOCX' },
			{ '@type': 'MediaObject', contentUrl: '/CV.pdf', encodingFormat: 'application/pdf', name: 'CV — PDF (alternate)' },
			{ '@type': 'MediaObject', contentUrl: '/CV.docx', encodingFormat: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', name: 'CV — DOCX (alternate)' }
		]
	})}<\/script>`}
</svelte:head>

<Header />
<main id="main-content">{@render children()}</main>
<Footer />
