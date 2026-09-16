<script lang="ts">
	import { onMount, tick } from 'svelte';
	import gsap from 'gsap';
	import { navItems, site } from '$lib/data';

	let open = $state(false);
	let scrolled = $state(false);
	let active = $state('hero');

	let navEl: HTMLElement | undefined = $state();
	let sheetEl: HTMLElement | undefined = $state();
	let linkEls: Record<string, HTMLAnchorElement> = $state({} as any);
	let indicatorStyle = $state('');

	function updateIndicator() {
		if (!navEl) return;
		const key = `#${active}`;
		const el = linkEls[key];
		if (!el) {
			indicatorStyle = 'opacity:0;';
			return;
		}
		const navRect = navEl.getBoundingClientRect();
		const rect = el.getBoundingClientRect();
		const left = rect.left - navRect.left;
		indicatorStyle = `transform: translateX(${left}px); width: ${rect.width}px; opacity: 1;`;
	}

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 24;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });

		// scroll-spy
		const ids = navItems.map((i) => i.href.replace('#', ''));
		const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

		const io = new IntersectionObserver(
			(entries) => {
				// pick the most visible / closest to top
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
				if (visible[0]) {
					const id = (visible[0].target as HTMLElement).id;
					if (id) active = id;
				} else {
					// fallback: nearest above viewport
					let current = 'hero';
					for (const sec of sections) {
						if (sec.getBoundingClientRect().top <= 160) current = sec.id;
					}
					active = current;
				}
				requestAnimationFrame(updateIndicator);
			},
			{ rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
		);
		sections.forEach((s) => io.observe(s));

		const onResize = () => updateIndicator();
		window.addEventListener('resize', onResize);

		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && open) open = false;
		};
		window.addEventListener('keydown', onKey);

		// initial
		requestAnimationFrame(updateIndicator);
		const t = setTimeout(updateIndicator, 150);

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onResize);
			window.removeEventListener('keydown', onKey);
			io.disconnect();
			clearTimeout(t);
		};
	});

	// body lock + sheet stagger
	$effect(() => {
		if (typeof document === 'undefined') return;
		if (open) {
			const prev = document.body.style.overflow;
			document.body.style.overflow = 'hidden';
			const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			tick().then(() => {
				if (!sheetEl) return;
				if (reduced) return;
				const items = sheetEl.querySelectorAll('[data-sheet-item]');
				gsap.fromTo(
					items,
					{ y: 16, opacity: 0 },
					{ y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out', delay: 0.08 }
				);
			});
			return () => {
				document.body.style.overflow = prev;
			};
		} else {
			document.body.style.overflow = '';
		}
	});

	$effect(() => {
		// keep indicator in sync when active changes
		active;
		tick().then(updateIndicator);
	});

	// focus trap (minimal)
	function trapFocus(e: KeyboardEvent) {
		if (!open || !sheetEl || e.key !== 'Tab') return;
		const focusable = sheetEl.querySelectorAll<HTMLElement>(
			'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
		);
		if (!focusable.length) return;
		const first = focusable[0];
		const last = focusable[focusable.length - 1];
		if (e.shiftKey && document.activeElement === first) {
			e.preventDefault();
			last.focus();
		} else if (!e.shiftKey && document.activeElement === last) {
			e.preventDefault();
			first.focus();
		}
	}
</script>

<!-- skip link -->
<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#172033] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
	>Skip to content</a
>

<header
	class="fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500
		{scrolled || open
		? 'border-[#172033]/10 bg-[#fbf8f2]/85 shadow-[0_8px_32px_rgba(23,32,51,0.08)] backdrop-blur-xl supports-[backdrop-filter]:bg-[#fbf8f2]/80'
		: 'border-transparent bg-transparent backdrop-blur-none'}"
	style={scrolled || open
		? 'backdrop-filter: blur(16px) saturate(150%); -webkit-backdrop-filter: blur(16px) saturate(150%);'
		: undefined}
>
	<div class="mx-auto flex h-[64px] w-full max-w-6xl items-center justify-between gap-6 px-6">
		<!-- Brand -->
		<a
			href="#hero"
			class="group flex items-center gap-3 shrink-0"
			aria-label="{site.name} — back to top"
		>
			<img
				src="/profile.jpeg"
				alt="{site.name}"
				width="32"
				height="32"
				class="h-8 w-8 shrink-0 rounded-full object-cover ring-1 transition-colors duration-500 {scrolled || open ? 'ring-[#172033]/15' : 'ring-white/25'}"
				loading="eager"
				decoding="async"
			/>
			<span class="hidden sm:flex flex-col leading-none">
				<span
					class="text-[15px] font-semibold tracking-[-0.02em] transition-colors duration-500 {scrolled || open
						? 'text-[#172033]'
						: 'text-white'}">{site.name}</span
				>
				<span
					class="text-[11px] font-medium tracking-[0.14em] uppercase transition-colors duration-500 {scrolled || open
						? 'text-[#536070]'
						: 'text-white/70'}">Backend Engineer</span
				>
			</span>
			<span
				class="sm:hidden text-[15px] font-semibold tracking-[-0.02em] transition-colors duration-500 {scrolled || open
					? 'text-[#172033]'
					: 'text-white'}">{site.name}</span
			>
		</a>

		<!-- Desktop nav — centered -->
		<nav
			bind:this={navEl}
			class="relative hidden md:flex items-center rounded-full p-1 transition-colors duration-500
				{scrolled || open ? 'bg-[#172033]/[0.06]' : 'bg-white/10 backdrop-blur'}"
			aria-label="Primary"
		>
			<!-- sliding indicator -->
			<span
				class="pointer-events-none absolute inset-y-1 rounded-full bg-white shadow-[0_2px_12px_rgba(23,32,51,0.12)] ring-1 ring-[#172033]/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
				style={indicatorStyle}
				aria-hidden="true"
			></span>

			{#each navItems as item (item.href)}
				{@const isActive = active === item.href.replace('#', '')}
				<a
					bind:this={linkEls[item.href]}
					href={item.href}
					aria-current={isActive ? 'page' : undefined}
					class="relative z-10 rounded-full px-4 py-[7px] text-sm font-medium transition-colors duration-300
						{isActive
						? 'text-[#172033]'
						: scrolled || open
							? 'text-[#536070] hover:text-[#172033]'
							: 'text-white/75 hover:text-white'}"
					>{item.label}</a
				>
			{/each}
		</nav>

		<!-- Right: CTA + mobile button -->
		<div class="flex items-center gap-3 shrink-0">
			<a
				href="#contact"
				class="hidden md:inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300
					{scrolled || open
					? 'bg-[#172033] text-white hover:bg-[#1e2a44] hover:shadow-[0_6px_20px_rgba(23,32,51,0.18)]'
					: 'bg-white text-[#172033] hover:bg-white/90 shadow-[0_4px_16px_rgba(7,25,52,0.18)]'}"
				>Get in touch</a
			>

			<button
				class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300
					{open
					? 'border-[#172033]/15 bg-[#172033] text-white'
					: scrolled
						? 'border-[#172033]/12 bg-white text-[#172033] shadow-sm'
						: 'border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/15'}"
				onclick={() => (open = !open)}
				aria-expanded={open}
				aria-controls="mobile-sheet"
				aria-label={open ? 'Close menu' : 'Open menu'}
			>
				<span class="relative block h-3.5 w-4" aria-hidden="true">
					<span
						class="absolute left-0 right-0 h-0.5 rounded-full bg-current transition-all duration-300 {open
							? 'top-[6px] rotate-45'
							: 'top-0'}"
					></span>
					<span
						class="absolute left-0 right-0 top-[6px] h-0.5 rounded-full bg-current transition-all duration-200 {open
							? 'opacity-0 scale-x-50'
							: 'opacity-100'}"
					></span>
					<span
						class="absolute left-0 right-0 h-0.5 rounded-full bg-current transition-all duration-300 {open
							? 'top-[6px] -rotate-45'
							: 'top-[12px]'}"
					></span>
				</span>
			</button>
		</div>
	</div>
</header>

{#if open}
	<!-- Mobile sheet -->
	<div
		bind:this={sheetEl}
		id="mobile-sheet"
		class="fixed inset-0 z-40 flex flex-col bg-[#fbf8f2] md:hidden"
		role="dialog"
		aria-modal="true"
		aria-label="Navigation"
		tabindex="-1"
		onkeydown={trapFocus}
	>
		<!-- spacer for fixed header -->
		<div class="h-[64px] shrink-0"></div>

		<div class="flex flex-1 flex-col px-6 pb-8 pt-6">
			<nav class="flex flex-col gap-1" aria-label="Mobile">
				{#each navItems as item, i (item.href)}
					{@const isActive = active === item.href.replace('#', '')}
					<a
						data-sheet-item
						href={item.href}
						onclick={() => (open = false)}
						aria-current={isActive ? 'page' : undefined}
						class="group flex items-baseline justify-between rounded-2xl px-4 py-4 transition-colors {isActive
							? 'bg-[#172033] text-white'
							: 'text-[#172033] hover:bg-[#172033]/[0.06]'}"
					>
						<span class="text-[28px] font-semibold tracking-[-0.03em] leading-none">{item.label}</span>
						<span
							class="text-xs font-medium tracking-[0.14em] uppercase {isActive
								? 'text-white/60'
								: 'text-[#536070] group-hover:text-[#172033]'}"
							>{String(i + 1).padStart(2, '0')}</span
						>
					</a>
				{/each}
			</nav>

			<div data-sheet-item class="mt-auto space-y-4 pt-8">
				<a
					href="#contact"
					onclick={() => (open = false)}
					class="flex w-full items-center justify-center gap-2 rounded-full bg-[#172033] px-6 py-4 text-base font-semibold text-white shadow-[0_12px_32px_rgba(23,32,51,0.18)] hover:bg-[#1e2a44]"
					>Get in touch <span aria-hidden="true">→</span></a
				>
				<div
					class="flex items-center justify-between rounded-2xl bg-white px-4 py-3 ring-1 ring-[#172033]/10"
				>
					<div class="flex flex-col">
						<span class="text-sm font-semibold text-[#172033]">{site.name}</span>
						<span class="text-xs font-medium tracking-[0.12em] uppercase text-[#536070]"
							>{site.location}</span
						>
					</div>
					<a
						href="mailto:{site.email}"
						class="rounded-full bg-[#edf3f1] px-4 py-2 text-sm font-semibold text-[#2f5f57] ring-1 ring-[#2f5f57]/10"
						>{site.email}</a
					>
				</div>
				<p class="text-center text-xs font-medium tracking-[0.14em] uppercase text-[#536070]">
					Available for new projects
				</p>
			</div>
		</div>
	</div>

	<!-- backdrop press to close (below sheet header) -->
	<button
		class="fixed inset-0 top-[64px] z-30 bg-[#172033]/10 backdrop-blur-[1px] md:hidden"
		aria-label="Close menu"
		onclick={() => (open = false)}
	></button>
{/if}

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
	.sr-only:focus {
		width: auto;
		height: auto;
		margin: 0;
		overflow: visible;
		clip: auto;
		white-space: normal;
	}
</style>
