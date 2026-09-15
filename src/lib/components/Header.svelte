<script lang="ts">
	import { onMount } from 'svelte';
	import { navItems } from '$lib/data';

	let open = $state(false);
	let scrolled = $state(false);

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 80;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<header
	class="fixed inset-x-0 z-50 flex justify-center pointer-events-none transition-all duration-500 ease-out {scrolled
		? 'top-4'
		: 'top-0'}"
>
	<div
		class="pointer-events-auto relative flex items-center justify-center transition-all duration-500 ease-out {scrolled
			? 'h-14 w-[calc(100%-2rem)] max-w-3xl rounded-full border border-white/40 bg-white/70 px-5 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/65 md:h-14 md:px-6'
			: 'h-16 w-full max-w-6xl border border-transparent bg-transparent px-6'}"
		style={scrolled
			? 'backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%); box-shadow: inset 0 1px 0 rgba(255,255,255,0.6), 0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08);'
			: undefined}
	>
		<nav class="hidden items-center gap-6 md:flex" aria-label="Primary">
			{#each navItems as item (item.href)}
				<a
					href={item.href}
					class="text-base transition-colors {scrolled
						? 'text-[#92969C] hover:text-zinc-900'
						: 'text-white/90 hover:text-white'}">{item.label}</a
				>
			{/each}
			<a
				href="#contact"
				class="rounded-full px-4 py-2 text-base font-medium transition-colors {scrolled
					? 'bg-zinc-900 text-white hover:bg-zinc-800'
					: 'bg-white text-zinc-900 hover:bg-zinc-100'}"
				>Contact</a
			>
		</nav>

		<button
			class="rounded-full border px-3 py-2 text-base transition-colors md:hidden {scrolled
				? 'border-zinc-200/60 bg-white/60 text-[#92969C] backdrop-blur hover:bg-white/80'
				: 'border-white/30 text-white hover:bg-white/10'}"
			onclick={() => (open = !open)}
			aria-expanded={open}
			aria-controls="mobile-nav"
			aria-label="Toggle menu"
		>
			{open ? 'Close' : 'Menu'}
		</button>

		{#if open}
			<nav
				id="mobile-nav"
				class="absolute left-0 right-0 top-[calc(100%+12px)] px-4 py-4 md:hidden {scrolled
					? 'rounded-2xl border border-white/30 bg-white/80 shadow-lg backdrop-blur-xl supports-[backdrop-filter]:bg-white/75'
					: 'rounded-2xl border border-white/15 bg-zinc-900/85 backdrop-blur-xl'}"
				style={scrolled
					? 'backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%);'
					: undefined}
				aria-label="Mobile"
			>
				<div class="flex flex-col gap-3">
					{#each navItems as item (item.href)}
						<a
							href={item.href}
							onclick={() => (open = false)}
							class="py-1 text-base transition-colors {scrolled
								? 'text-[#92969C] hover:text-zinc-900'
								: 'text-white/90 hover:text-white'}">{item.label}</a
						>
					{/each}
					<a
						href="#contact"
						onclick={() => (open = false)}
						class="mt-2 rounded-full px-4 py-2 text-center text-base font-medium transition-colors {scrolled
							? 'bg-zinc-900 text-white'
							: 'bg-white text-zinc-900'}"
						>Contact</a
					>
				</div>
			</nav>
		{/if}
	</div>
</header>
