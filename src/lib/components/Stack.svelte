<script lang="ts">
	import { stack } from '$lib/data';
</script>

<section id="stack" class="mx-auto max-w-6xl px-6 py-16 md:py-24">
	<h2 class="text-3xl font-semibold tracking-tight">Stack</h2>
	<p class="mt-1 max-w-2xl text-base">
		Grouped tech — edit categories and items in <code class="font-mono">$lib/data.ts</code>. No icon dep in
		dummy; add lucide/icons later if you want.
	</p>

	<div class="mt-8 grid gap-6 md:grid-cols-3">
		{#each stack as cat (cat.label)}
			<div class="rounded border border-zinc-200 bg-zinc-50 p-5">
				<h3 class="text-base font-semibold">{cat.label}</h3>
				<div class="mt-3 flex flex-wrap gap-2">
					{#each cat.items as item (item.name)}
						<span
							class="rounded bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white"
							>{item.name}</span
						>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
