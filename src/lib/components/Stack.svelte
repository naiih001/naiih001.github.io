<script lang="ts">
	import { stack } from '$lib/data';
</script>

<section id="stack" class="relative overflow-hidden bg-[#fbf8f2] text-[#172033]">
	<img
		src="/stack-bg.jpeg"
		alt=""
		aria-hidden="true"
		loading="lazy"
		decoding="async"
		class="pointer-events-none absolute inset-0 h-full w-full object-cover"
	/>
	<div class="pointer-events-none absolute inset-0 bg-[#fbf8f2]/62" aria-hidden="true"></div>
	<div class="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
		<div class="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
			<div>
				<h2 class="max-w-xl text-4xl font-semibold leading-none tracking-tight text-[#172033] md:text-6xl">
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

		<div class="mt-8 rounded-2xl bg-[#edf3f1] p-5 text-[#2f5f57] ring-1 ring-[#2f5f57]/10 md:flex md:items-center md:justify-between md:gap-8">
			<p class="text-lg font-semibold">Best fit: backend-heavy teams that still care about the user-facing product.</p>
			<p class="mt-2 max-w-xl text-base leading-7 md:mt-0">
				Rust and TypeScript sit at the center; SvelteKit, Node, PostgreSQL, and tests support the work around them.
			</p>
		</div>
	</div>
</section>
