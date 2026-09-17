<script lang="ts">
	import { stack } from '$lib/data';
</script>

<section id="stack" class="relative overflow-hidden bg-[#fbf8f2] text-[#172033]">
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
	<div class="pointer-events-none absolute inset-0 bg-[#fbf8f2]/32" aria-hidden="true"></div>
	<div class="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
		<div class="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
			<div>
				<h2 class="max-w-xl text-4xl font-semibold leading-none tracking-tight text-[#080f1e] md:text-6xl">
					The stack is grouped by responsibility.
				</h2>
			</div>
			<p class="max-w-xl text-lg leading-8 text-[#536070] md:justify-self-end">
				Recruiters should see more than a list of logos: these are the tools I use to shape interfaces, ship services, and keep delivery predictable.
			</p>
		</div>

		<div class="mt-12 grid gap-5 lg:grid-cols-3">
			{#each stack as cat (cat.label)}
				<section class="relative overflow-hidden rounded-2xl bg-[#172033] p-6 text-white shadow-[0_22px_70px_rgba(23,32,51,0.16)]">
					<div class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#d17857]/25 blur-2xl" aria-hidden="true"></div>
					<h3 class="text-2xl font-semibold">{cat.label}</h3>
					<p class="mt-3 min-h-24 text-base leading-7 text-white/72">{cat.description}</p>
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
