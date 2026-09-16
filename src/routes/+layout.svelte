<script lang="ts">
	import '../app.css';
	import '@fontsource/instrument-sans/400.css';
	import '@fontsource/instrument-sans/500.css';
	import '@fontsource/instrument-sans/600.css';
	import '@fontsource/instrument-sans/700.css';
	import '@fontsource/geist-mono/400.css';
	import '@fontsource/geist-mono/500.css';
	import '@fontsource/prata/400.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		const centerContact = () => {
			const card =
				(document.getElementById('contact-card') as HTMLElement | null) ??
				(document.getElementById('contact') as HTMLElement | null);
			if (!card) return;
			const rect = card.getBoundingClientRect();
			const top = window.scrollY + rect.top - (window.innerHeight - rect.height) / 2;
			const maxTop = document.documentElement.scrollHeight - window.innerHeight;
			const clamped = Math.max(0, Math.min(top, maxTop));
			const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			window.scrollTo({ top: clamped, behavior: reduced ? 'instant' as ScrollBehavior : 'smooth' });
			history.pushState(null, '', '#contact');
		};

		const onClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const anchor = target.closest('a[href="#contact"]') as HTMLAnchorElement | null;
			if (!anchor) return;
			e.preventDefault();
			centerContact();
		};
		document.addEventListener('click', onClick);

		// If landing directly on #contact, center after layout
		if (location.hash === '#contact') {
			requestAnimationFrame(() => setTimeout(centerContact, 80));
		}

		return () => document.removeEventListener('click', onClick);
	});
</script>

<svelte:head>
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
