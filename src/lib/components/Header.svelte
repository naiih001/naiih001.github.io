<script lang="ts">
	import { onMount } from 'svelte';
	import { navItems, site } from '$lib/data';

	let open = $state(false);
	let scrolled = $state(false);

	onMount(() => {
		const onScroll = () => {
			// Hero is 100svh/dvh; switch when hero bottom passes header
			scrolled = window.scrollY > window.innerHeight + 16;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out {scrolled
		? 'border-b border-zinc-200 bg-zinc-50/90 backdrop-blur supports-[backdrop-filter]:bg-zinc-50/75'
		: 'border-b border-transparent bg-transparent'}"
>
	<div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
		<a
			href="#hero"
			class="text-sm font-semibold tracking-tight transition-colors {scrolled
				? 'text-zinc-900'
				: 'text-white'}">{site.name}</a
		>

		<nav class="hidden items-center gap-6 md:flex" aria-label="Primary">
			{#each navItems as item (item.href)}
				<a
					href={item.href}
					class="text-sm transition-colors {scrolled
						? 'text-zinc-600 hover:text-zinc-900'
						: 'text-white/90 hover:text-white'}">{item.label}</a
				>
			{/each}
			<a
				href="#contact"
				class="rounded-full px-4 py-2 text-sm font-medium transition-colors {scrolled
					? 'bg-zinc-900 text-white hover:bg-zinc-800'
					: 'bg-white text-zinc-900 hover:bg-zinc-100'}"
				>Contact</a
			>
		</nav>

		<button
			class="rounded-md border px-3 py-2 text-sm transition-colors md:hidden {scrolled
				? 'border-zinc-200 text-zinc-700'
				: 'border-white/30 text-white hover:bg-white/10'}"
			onclick={() => (open = !open)}
			aria-expanded={open}
			aria-controls="mobile-nav"
			aria-label="Toggle menu"
		>
			{open ? 'Close' : 'Menu'}
		</button>
	</div>

	{#if open}
		<nav
			id="mobile-nav"
			class="border-t px-6 py-4 backdrop-blur md:hidden {scrolled
				? 'border-zinc-200 bg-zinc-50'
				: 'border-white/15 bg-zinc-900/85'}"
			aria-label="Mobile"
		>
			<div class="flex flex-col gap-3">
				{#each navItems as item (item.href)}
					<a
						href={item.href}
						onclick={() => (open = false)}
						class="py-1 text-sm transition-colors {scrolled
							? 'text-zinc-700 hover:text-zinc-900'
							: 'text-white/90 hover:text-white'}">{item.label}</a
					>
				{/each}
				<a
					href="#contact"
					onclick={() => (open = false)}
					class="mt-2 rounded-full px-4 py-2 text-center text-sm font-medium transition-colors {scrolled
						? 'bg-zinc-900 text-white'
						: 'bg-white text-zinc-900'}"
					>Contact</a
				>
			</div>
		</nav>
	{/if}
</header>
