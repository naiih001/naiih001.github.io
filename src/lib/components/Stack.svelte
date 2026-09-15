<script lang="ts">
	import { stack } from '$lib/data';
</script>

<section id="stack" class="mx-auto max-w-6xl px-6 py-16 md:py-24">
	<h2 class="text-3xl font-semibold tracking-tight text-[var(--color-text)]">Stack</h2>
	<p class="mt-1 max-w-2xl text-base text-[var(--color-muted)]">
		Grouped tech — edit categories and items in <code class="font-mono text-[var(--color-muted)]">$lib/data.ts</code>. No icon dep in
		dummy; add lucide/icons later if you want.
	</p>

	<div class="mt-8 grid gap-6 md:grid-cols-3">
		{#each stack as cat (cat.label)}
			<div class="rounded-xl border border-[var(--color-text)]/10 bg-[var(--color-surface)] p-5">
				<h3 class="text-base font-semibold text-[var(--color-text)]">{cat.label}</h3>
				<div class="mt-3 flex flex-wrap gap-2">
					{#each cat.items as item (item.name)}
						<span
							class="rounded-full border border-[var(--color-text)]/10 bg-[var(--color-bg)] px-3 py-1.5 text-sm font-medium text-[var(--color-text)]"
							>{item.name}</span
						>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
