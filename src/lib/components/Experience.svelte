<script lang="ts">
	import TechIcon from '$lib/components/TechIcon.svelte';
	import { experiences } from '$lib/data';
</script>

<section id="experience" class="bg-[var(--color-bg)] text-white">
	<div class="mx-auto max-w-6xl px-6 py-20 md:py-28">
		<div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
			<div class="lg:sticky lg:top-28">
				<p class="text-xs font-medium tracking-wide text-white/70">Experience</p>
				<h2 class="mt-4 max-w-sm text-4xl font-semibold leading-[0.95] tracking-tight text-white md:text-5xl">
					Backend work with product receipts.
				</h2>
				<p class="mt-5 max-w-md text-lg leading-8 text-white/70">
					A quick hiring scan: where I worked, what I owned, and which systems I used to ship reliable web products.
				</p>
				<div class="mt-8 grid grid-cols-3 gap-3 border-y border-white/10 py-4 text-white">
					<div>
						<p class="text-3xl font-semibold leading-none">{experiences.length}</p>
						<p class="mt-1 text-sm text-white/60">roles</p>
					</div>
					<div>
						<p class="text-3xl font-semibold leading-none">40k+</p>
						<p class="mt-1 text-sm text-white/60">MAU shipped</p>
					</div>
					<div>
						<p class="text-3xl font-semibold leading-none">20+</p>
						<p class="mt-1 text-sm text-white/60">web builds</p>
					</div>
				</div>
			</div>

			<div class="space-y-5">
				{#each experiences as exp (exp.company + exp.period)}
					<article class="group rounded-2xl bg-[var(--color-surface)] p-5 shadow-[0_18px_55px_rgba(0,0,0,0.35)] ring-1 ring-white/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(0,0,0,0.45)] md:p-6">
						<div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
							<div>
								<h3 class="text-2xl font-semibold leading-tight text-white">{exp.role}</h3>
								<p class="mt-1 text-base font-medium text-white/60">{#if exp.companyUrl}<a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" class="underline decoration-white/20 underline-offset-4 hover:text-white hover:decoration-white/40" aria-label="{exp.company} — external site">{exp.company}<span aria-hidden="true" class="hidden sm:inline"> ↗︎</span></a>{:else}{exp.company}{/if} · {exp.location}</p>
							</div>
							<p class="shrink-0 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white ring-1 ring-white/10">{exp.period}</p>
						</div>
						<p class="mt-5 max-w-2xl text-lg leading-8 text-white/70">{exp.summary}</p>
						<ul class="mt-5 grid gap-3 text-base leading-7 text-white/60">
							{#each exp.bullets as b (b)}
								<li class="flex gap-3">
									<span class="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d17857]" aria-hidden="true"></span>
									<span>{b}</span>
								</li>
							{/each}
						</ul>
						<div class="mt-5 flex flex-wrap items-center gap-2">
							{#each exp.tags as tag (tag)}
								<TechIcon label={tag} />
							{/each}
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
