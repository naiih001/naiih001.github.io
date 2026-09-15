<script lang="ts">
	import { navItems, site } from '$lib/data';

	let open = $state(false);
</script>

<header
	class="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70"
>
	<div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
		<a href="#hero" class="text-sm font-semibold tracking-tight text-zinc-900">{site.name}</a>

		<nav class="hidden items-center gap-6 md:flex" aria-label="Primary">
			{#each navItems as item (item.href)}
				<a
					href={item.href}
					class="text-sm text-zinc-600 transition-colors hover:text-zinc-900">{item.label}</a
				>
			{/each}
			<a
				href="#contact"
				class="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
				>Contact</a
			>
		</nav>

		<button
			class="rounded-md border border-zinc-200 px-3 py-2 text-sm text-zinc-700 md:hidden"
			onclick={() => (open = !open)}
			aria-expanded={open}
			aria-controls="mobile-nav"
			aria-label="Toggle menu"
		>
			{open ? 'Close' : 'Menu'}
		</button>
	</div>

	{#if open}
		<nav id="mobile-nav" class="border-t border-zinc-200 bg-white px-6 py-4 md:hidden" aria-label="Mobile">
			<div class="flex flex-col gap-3">
				{#each navItems as item (item.href)}
					<a
						href={item.href}
						onclick={() => (open = false)}
						class="py-1 text-sm text-zinc-700 hover:text-zinc-900">{item.label}</a
					>
				{/each}
				<a
					href="#contact"
					onclick={() => (open = false)}
					class="mt-2 rounded-full bg-zinc-900 px-4 py-2 text-center text-sm font-medium text-white"
					>Contact</a
				>
			</div>
		</nav>
	{/if}
</header>
