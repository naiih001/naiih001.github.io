<script lang="ts">
	import { experiences } from '$lib/data';
</script>

<section id="experience" class="mx-auto max-w-6xl px-6 py-16 md:py-24">
	<div class="mb-8 flex items-end justify-between gap-4">
		<div>
			<h2 class="text-2xl font-semibold tracking-tight text-zinc-900">Experience</h2>
			<p class="mt-1 text-sm text-zinc-500">Dummy timeline — replace with your real roles.</p>
		</div>
		<span class="hidden text-xs text-zinc-400 md:block">3 roles · edit in $lib/data.ts</span>
	</div>

	<div class="relative border-l border-zinc-200 pl-6">
		{#each experiences as exp (exp.company + exp.period)}
			<div class="relative pb-10 last:pb-0">
				<span
					class="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-zinc-50 bg-zinc-900 ring-1 ring-zinc-200"
					aria-hidden="true"
				></span>
				<div class="flex flex-wrap items-baseline justify-between gap-2">
					<h3 class="text-sm font-semibold text-zinc-900">
						{exp.role} <span class="font-normal text-zinc-500">@ {exp.company}</span>
					</h3>
					<span class="text-xs text-zinc-500">{exp.period} · {exp.location}</span>
				</div>
				<ul class="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-600">
					{#each exp.bullets as b (b)}
						<li>{b}</li>
					{/each}
				</ul>
				<div class="mt-3 flex flex-wrap gap-2">
					{#each exp.tags as tag (tag)}
						<span
							class="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs text-zinc-700"
							>{tag}</span
						>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
