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
			? 'h-14 w-[calc(100%-2rem)] max-w-3xl rounded-2xl border border-[var(--color-text)]/15 bg-[var(--color-surface)]/85 px-5 shadow-[0_8px_32px_rgba(7,25,52,0.35)] backdrop-blur-xl md:h-14 md:px-6'
			: 'h-16 w-full max-w-6xl border border-transparent bg-transparent px-6'}"
		style={scrolled
			? 'backdrop-filter: blur(20px) saturate(160%); -webkit-backdrop-filter: blur(20px) saturate(160%); box-shadow: inset 0 1px 0 rgba(146,150,156,0.12), 0 8px 32px rgba(7,25,52,0.35);'
			: undefined}
	>
		<nav class="hidden items-center gap-6 md:flex" aria-label="Primary">
			{#each navItems as item (item.href)}
				<a
					href={item.href}
					class="text-base transition-colors {scrolled
						? 'text-[var(--color-muted)] hover:text-[var(--color-text)]'
						: 'text-[var(--color-text)]/80 hover:text-[var(--color-text)]'}">{item.label}</a
				>
			{/each}
		</nav>

		<button
			class="rounded-full border px-3 py-2 text-base transition-colors md:hidden {scrolled
				? 'border-[var(--color-text)]/15 bg-[var(--color-surface)] text-[var(--color-muted)] backdrop-blur hover:bg-[var(--color-surface)]/80 hover:text-[var(--color-text)]'
				: 'border-[var(--color-text)]/20 bg-[var(--color-surface)]/60 text-[var(--color-text)] hover:bg-[var(--color-surface)]'}"
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
					? 'rounded-2xl border border-[var(--color-text)]/15 bg-[var(--color-surface)] shadow-lg backdrop-blur-xl'
					: 'rounded-2xl border border-[var(--color-text)]/15 bg-[var(--color-surface)]/95 backdrop-blur-xl'}"
				style={scrolled
					? 'backdrop-filter: blur(20px) saturate(160%); -webkit-backdrop-filter: blur(20px) saturate(160%);'
					: undefined}
				aria-label="Mobile"
			>
				<div class="flex flex-col gap-3">
					{#each navItems as item (item.href)}
						<a
							href={item.href}
							onclick={() => (open = false)}
							class="py-1 text-base transition-colors text-[var(--color-muted)] hover:text-[var(--color-text)]">{item.label}</a
						>
					{/each}
				</div>
			</nav>
		{/if}
	</div>
</header>
