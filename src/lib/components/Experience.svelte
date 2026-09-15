<script lang="ts">
	import { experiences } from '$lib/data';
</script>

<section id="experience" class="bg-[#f4efe7] text-[#172033]">
	<div class="mx-auto max-w-6xl px-6 py-20 md:py-28">
		<div class="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
			<div class="lg:sticky lg:top-28">
				<h2 class="max-w-sm text-4xl font-semibold leading-[0.95] tracking-tight text-[#172033] md:text-6xl">
					Backend work with product receipts.
				</h2>
				<p class="mt-5 max-w-md text-lg leading-8 text-[#536070]">
					A quick hiring scan: where I worked, what I owned, and which systems I used to ship reliable web products.
				</p>
				<div class="mt-8 grid grid-cols-3 gap-3 border-y border-[#172033]/10 py-4 text-[#172033]">
					<div>
						<p class="text-3xl font-semibold leading-none">{experiences.length}</p>
						<p class="mt-1 text-sm text-[#536070]">roles</p>
					</div>
					<div>
						<p class="text-3xl font-semibold leading-none">40k+</p>
						<p class="mt-1 text-sm text-[#536070]">MAU shipped</p>
					</div>
					<div>
						<p class="text-3xl font-semibold leading-none">20+</p>
						<p class="mt-1 text-sm text-[#536070]">web builds</p>
					</div>
				</div>
			</div>

			<div class="space-y-5">
				{#each experiences as exp (exp.company + exp.period)}
					<article class="group rounded-2xl bg-white p-5 shadow-[0_18px_55px_rgba(23,32,51,0.08)] ring-1 ring-[#172033]/10 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_70px_rgba(23,32,51,0.12)] md:p-6">
						<div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
							<div>
								<h3 class="text-2xl font-semibold leading-tight text-[#172033]">{exp.role}</h3>
								<p class="mt-1 text-base font-medium text-[#536070]">{exp.company} · {exp.location}</p>
							</div>
							<p class="shrink-0 rounded-full bg-[#edf3f1] px-3 py-1.5 text-sm font-medium text-[#2f5f57]">{exp.period}</p>
						</div>
						<p class="mt-5 max-w-2xl text-lg leading-8 text-[#2c3648]">{exp.summary}</p>
						<ul class="mt-5 grid gap-3 text-base leading-7 text-[#536070]">
							{#each exp.bullets as b (b)}
								<li class="flex gap-3">
									<span class="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d17857]" aria-hidden="true"></span>
									<span>{b}</span>
								</li>
							{/each}
						</ul>
						<div class="mt-5 flex flex-wrap gap-2">
							{#each exp.tags as tag (tag)}
								<span class="rounded-full bg-[#f6f1ea] px-3 py-1.5 text-sm font-medium text-[#536070] ring-1 ring-[#172033]/8">{tag}</span>
							{/each}
						</div>
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>
