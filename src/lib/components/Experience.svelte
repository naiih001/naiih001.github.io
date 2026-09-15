<script lang="ts">
	import { experiences } from '$lib/data';
</script>

<section id="experience" class="mx-auto max-w-6xl px-6 py-16 md:py-24">
	<div class="mb-8 flex items-end justify-between gap-4">
		<div>
			<h2 class="text-3xl font-semibold tracking-tight text-[var(--color-text)]">Experience</h2>
			<p class="mt-1 text-base text-[var(--color-muted)]">Dummy timeline — replace with your real roles.</p>
		</div>
		<span class="hidden text-sm text-[var(--color-muted)] md:block">3 roles · edit in $lib/data.ts</span>
	</div>

	<div class="relative border-l border-[var(--color-text)]/10 pl-6">
		{#each experiences as exp (exp.company + exp.period)}
			<div class="relative pb-10 last:pb-0">
				<span
					class="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-bg)] bg-[var(--color-text)] ring-1 ring-[var(--color-text)]/15"
					aria-hidden="true"
				></span>
				<div class="flex flex-wrap items-baseline justify-between gap-2">
					<h3 class="text-base font-semibold text-[var(--color-text)]">
						{exp.role} <span class="font-normal text-[var(--color-muted)]">@ {exp.company}</span>
					</h3>
					<span class="text-sm text-[var(--color-muted)]">{exp.period} · {exp.location}</span>
				</div>
				<ul class="mt-3 list-disc space-y-1 pl-5 text-base leading-7 text-[var(--color-muted)] marker:text-[var(--color-muted)]/60">
					{#each exp.bullets as b (b)}
						<li>{b}</li>
					{/each}
				</ul>
				<div class="mt-3 flex flex-wrap gap-2">
					{#each exp.tags as tag (tag)}
						<span class="rounded-full border border-[var(--color-text)]/10 bg-[var(--color-surface)] px-2.5 py-1 text-sm text-[var(--color-muted)]"
							>{tag}</span
						>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>
