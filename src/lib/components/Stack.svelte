<script lang="ts">
	import { stack } from '$lib/data';
</script>

<section id="stack" class="relative overflow-hidden bg-[var(--color-bg)] text-white">
	<picture aria-hidden="true" class="pointer-events-none absolute inset-0">
		<source media="(max-width: 640px)" srcset="/stack-bg-mobile.webp" type="image/webp" />
		<source media="(max-width: 640px)" srcset="/stack-bg-mobile.jpeg" />
		<source srcset="/stack-bg.webp" type="image/webp" />
		<img
			src="/stack-bg.jpeg"
			alt=""
			loading="lazy"
			decoding="async"
			class="h-full w-full object-cover max-sm:object-[center_38%] sm:object-center"
		/>
	</picture>
	<div class="pointer-events-none absolute inset-0 bg-[var(--color-bg)]/40" aria-hidden="true"></div>
	<div class="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--color-bg)]/55 via-[var(--color-bg)]/25 to-[var(--color-bg)]/35" aria-hidden="true"></div>
	<div class="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
		<div class="max-w-2xl">
			<p class="text-xs font-medium tracking-wide text-white/70">Stack</p>
			<h2 class="mt-4 max-w-xl text-4xl font-semibold leading-none tracking-tight text-white md:text-5xl">
				The stack is grouped by responsibility.
			</h2>
			<p class="mt-5 max-w-xl text-lg leading-8 text-white/70">
				Recruiters should see more than a list of logos: these are the tools I use to shape interfaces, ship services, and keep delivery predictable.
			</p>
		</div>

		<div class="mt-12 grid gap-5 lg:grid-cols-3">
			{#each stack as cat (cat.label)}
				<section class="group relative overflow-hidden rounded-2xl bg-[var(--color-surface)] p-5 text-white shadow-[0_18px_55px_rgba(0,0,0,0.35)] ring-1 ring-white/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.45)] md:p-6">
					<h3 class="text-2xl font-semibold">{cat.label}</h3>
					<p class="mt-3 min-h-24 text-base leading-7 text-white/70">{cat.description}</p>
					<div class="mt-6 flex flex-wrap gap-2">
						{#each cat.items as item (item.name)}
							<span class="rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white ring-1 ring-white/10">{item.name}</span>
						{/each}
					</div>
				</section>
			{/each}
		</div>

	</div>
</section>
