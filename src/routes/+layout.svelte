<script lang="ts">
	import '../app.css';
	import '@fontsource/instrument-sans/400.css';
	import '@fontsource/instrument-sans/500.css';
	import '@fontsource/instrument-sans/600.css';
	import '@fontsource/instrument-sans/700.css';
	import '@fontsource/geist-mono/400.css';
	import '@fontsource/geist-mono/500.css';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Isaac Hayab — Backend Engineer</title>
	<meta name="description" content="Backend engineer portfolio for Isaac Hayab, focused on Rust, TypeScript, reliable systems, and product-minded delivery." />
</svelte:head>

<Header />
<main>{@render children()}</main>
<Footer />
