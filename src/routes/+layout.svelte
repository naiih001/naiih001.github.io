<script lang="ts">
	import '../app.css';
	import '@fontsource/climate-crisis';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Portfolio — Dummy Starter</title>
	<meta name="description" content="Dummy portfolio starter — Hero, Experience, Stack, Projects, Contact. Replace data in $lib/data.ts." />
</svelte:head>

<Header />
<main>{@render children()}</main>
<Footer />
