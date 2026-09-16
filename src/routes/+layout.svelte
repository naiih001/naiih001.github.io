<script lang="ts">
	import '../app.css';
	import '@fontsource/instrument-sans/400.css';
	import '@fontsource/instrument-sans/500.css';
	import '@fontsource/instrument-sans/600.css';
	import '@fontsource/instrument-sans/700.css';
	import '@fontsource/geist-mono/400.css';
	import '@fontsource/geist-mono/500.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/jpeg" href="/profile.jpeg" />
	<link rel="apple-touch-icon" href="/profile.jpeg" />
	<title>Isaac Hayab — Backend Engineer</title>
	<meta name="description" content="Backend engineer portfolio for Isaac Hayab, focused on Rust, TypeScript, reliable systems, and product-minded delivery." />
</svelte:head>

<Header />
<main id="main-content">{@render children()}</main>
<Footer />
