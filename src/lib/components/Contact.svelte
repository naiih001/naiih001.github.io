<script lang="ts">
	import { site, socials } from '$lib/data';
</script>

<section id="contact" class="bg-[#fbf8f2] text-[#172033]">
	<div class="mx-auto max-w-6xl px-6 py-20 md:py-28">
		<div id="contact-card" class="overflow-hidden rounded-[2rem] shadow-[0_28px_90px_rgba(23,32,51,0.22)] scroll-mt-8">
			<div class="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
				<div class="relative overflow-hidden p-6 text-white md:p-10 lg:p-12">
					<img
						src="/contact-bg.jpg"
						alt=""
						aria-hidden="true"
						loading="lazy"
						decoding="async"
						class="pointer-events-none absolute inset-0 h-full w-full object-cover"
					/>
					<div class="pointer-events-none absolute inset-0 bg-[#172033]/70" aria-hidden="true"></div>
					<div class="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#172033]/45 via-transparent to-[#172033]/35" aria-hidden="true"></div>
					<div class="relative">
					<h2 class="max-w-2xl text-4xl font-semibold leading-none tracking-tight md:text-6xl">
						Have a backend-heavy role that needs product sense?
					</h2>
					<p class="mt-6 max-w-2xl text-lg leading-8 text-white/72">
						Send the role, the team context, or the problem area. I read direct email first, and the links below are the fastest way to verify code and work history.
					</p>
					<div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
						<a
							href="mailto:{site.email}?subject=Backend%20Engineer%20Opportunity"
							class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-[#172033] transition hover:bg-[#edf3f1]"
							>Email Isaac</a
						>
						<a
							href="#projects"
							class="inline-flex items-center justify-center rounded-full border border-white/18 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
							>Review projects</a
						>
					</div>
					<a
						href="mailto:{site.email}"
						class="mt-8 inline-block text-xl font-semibold text-white underline decoration-[#d17857]/60 underline-offset-8 transition hover:decoration-[#d17857] md:text-2xl"
						>{site.email}</a
					>
					</div>
				</div>

				<aside class="bg-white p-6 text-[#172033] md:p-10 lg:p-12">
					<p class="text-sm font-semibold uppercase tracking-[0.18em] text-[#d17857]">Verify</p>
					<h3 class="mt-4 text-3xl font-semibold leading-tight">Links recruiters usually need.</h3>
					<div class="mt-8 grid gap-3">
						{#each socials as s (s.label)}
							<a
								href={s.href}
								class="group flex items-center justify-between rounded-2xl bg-[#f4efe7] px-4 py-3 text-base font-semibold text-[#172033] ring-1 ring-[#172033]/8 transition hover:bg-[#edf3f1]"
								target={s.href.startsWith('http') ? '_blank' : undefined}
								rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
							>
								<span class="flex items-center gap-3">
									<span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#172033] ring-1 ring-[#172033]/10">
										{#if s.label === 'GitHub'}
											<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.18-3.36-1.18-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.08-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.4-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.8a9.5 9.5 0 0 1 2.5.33c1.9-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.63.71 1.03 1.61 1.03 2.71 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.16.59.67.49A10 10 0 0 0 12 2z"/></svg>
										{:else if s.label === 'LinkedIn'}
											<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.48-2.24-1.67-2.24-.91 0-1.45.61-1.69 1.2-.09.21-.11.5-.11.79v5.82H10V9h3.42v1.56a3.42 3.42 0 0 1 3.1-1.68c2.23 0 3.93 1.45 3.93 4.58zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56z"/></svg>
										{:else if s.label === 'X'}
											<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M18.9 2.25h2.74l-6 6.86L22.5 21.75h-5.6l-4.38-5.73L7.5 21.75H4.77l6.42-7.34L4.5 2.25h5.74l3.96 5.24zM17.04 19.58h1.52L7.08 4.12H5.39z"/></svg>
										{:else}
											<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
										{/if}
									</span>
									{s.label}
								</span>
								<span class="text-[#d17857] transition group-hover:translate-x-0.5" aria-hidden="true">→</span>
							</a>
						{/each}
					</div>
				</aside>
			</div>
		</div>
	</div>
</section>
