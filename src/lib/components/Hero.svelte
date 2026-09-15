<script lang="ts">
	import { site, socials } from '$lib/data';
</script>

<section id="hero" class="mx-auto max-w-6xl px-6 py-16 md:py-24">
	<div class="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
		<div>
			<p class="mb-3 text-sm font-medium tracking-wide text-zinc-500">
				{site.location} · Available for new projects
			</p>
			<h1 class="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
				{site.name}
				<span class="block text-xl font-normal text-zinc-600 md:text-2xl">{site.role}</span>
			</h1>
			<p class="mt-4 max-w-xl text-[15px] leading-7 text-zinc-600">
				{site.tagline}
			</p>
			<div class="mt-6 flex flex-wrap gap-3">
				<a
					href="#projects"
					class="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
					>View projects</a
				>
				<a
					href="#contact"
					class="rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
					>Get in touch</a
				>
			</div>
			<div class="mt-8 flex flex-wrap gap-3">
				{#each socials as s (s.label)}
					<a
						href={s.href}
						class="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-700 hover:bg-zinc-50"
						target={s.href.startsWith('http') ? '_blank' : undefined}
						rel={s.href.startsWith('http') ? 'noreferrer' : undefined}>{s.label}</a
					>
				{/each}
			</div>
		</div>

		<div
			class="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 p-8"
		>
			<div class="text-center">
				<div
					class="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-lg font-semibold text-zinc-900 shadow-sm ring-1 ring-zinc-200"
					aria-hidden="true"
				>
					AR
				</div>
				<p class="mt-4 text-sm font-medium text-zinc-900">Dummy avatar</p>
				<p class="text-xs text-zinc-500">Replace with your photo</p>
				<p class="mt-6 rounded-lg border border-dashed border-zinc-300 bg-white px-3 py-2 text-xs text-zinc-500">
					Tip: swap <code class="font-mono">src/lib/data.ts</code> to make it yours.
				</p>
			</div>
		</div>
	</div>
</section>
