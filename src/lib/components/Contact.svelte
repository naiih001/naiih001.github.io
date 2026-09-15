<script lang="ts">
	import { site, socials } from '$lib/data';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let error = $state('');
	let success = $state(false);

	function validateEmail(v: string) {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
	}

	function onSubmit(e: Event) {
		e.preventDefault();
		error = '';
		success = false;
		if (!name.trim() || !email.trim() || !message.trim()) {
			error = 'Please fill in all fields.';
			return;
		}
		if (!validateEmail(email)) {
			error = 'Please enter a valid email address.';
			return;
		}
		success = true;
		name = '';
		email = '';
		message = '';
	}
</script>

<section id="contact" class="mx-auto max-w-6xl px-6 py-16 md:py-24">
	<div class="grid gap-10 md:grid-cols-2">
		<div>
			<h2 class="text-3xl font-semibold tracking-tight text-[var(--color-text)]">Contact</h2>
			<p class="mt-2 text-base leading-7 text-[var(--color-muted)]">
				Reach out — dummy form below. No backend yet; submit shows a success state. Replace with a
				SvelteKit action or email service when ready. Direct email also works.
			</p>
			<a href="mailto:{site.email}" class="mt-4 inline-block text-base font-medium text-[var(--color-text)] underline decoration-[var(--color-muted)] underline-offset-4 hover:decoration-[var(--color-text)]"
				>{site.email}</a
			>
			<div class="mt-6 flex flex-wrap gap-2">
				{#each socials as s (s.label)}
					<a
						href={s.href}
						class="rounded-full border border-[var(--color-text)]/10 bg-[var(--color-surface)] px-3 py-1.5 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-surface)]/80"
						target={s.href.startsWith('http') ? '_blank' : undefined}
						rel={s.href.startsWith('http') ? 'noreferrer' : undefined}>{s.label}</a
					>
				{/each}
			</div>
		</div>

		<form
			onsubmit={onSubmit}
			class="rounded-xl border border-[var(--color-text)]/10 bg-[var(--color-surface)] p-5 md:p-6"
			aria-label="Contact form"
			novalidate
		>
			{#if error}
				<p class="mb-4 rounded-lg border border-[var(--color-muted)]/30 bg-[var(--color-bg)] px-3 py-2 text-base text-[var(--color-text)]" role="alert"><span class="font-medium">Error:</span> {error}</p>
			{/if}
			{#if success}
				<p class="mb-4 rounded-lg border border-[var(--color-text)]/15 bg-[var(--color-bg)]/50 px-3 py-2 text-base text-[var(--color-text)]" role="status">
					<span class="font-medium">Success:</span> Demo — message not sent. Replace this handler with a real action/API. ✓
				</p>
			{/if}

			<label class="block text-sm font-medium text-[var(--color-text)]" for="contact-name">Name</label>
			<input
				id="contact-name"
				bind:value={name}
				placeholder="Jane Doe"
				autocomplete="name"
				class="mt-1 w-full rounded-lg border border-[var(--color-text)]/15 bg-[var(--color-bg)] px-3 py-2 text-base text-[var(--color-text)] placeholder:text-[var(--color-muted)] outline-none focus:border-[var(--color-muted)] focus:ring-1 focus:ring-[var(--color-muted)]"
			/>

			<label class="mt-4 block text-sm font-medium text-[var(--color-text)]" for="contact-email">Email</label>
			<input
				id="contact-email"
				bind:value={email}
				placeholder="jane@example.com"
				autocomplete="email"
				class="mt-1 w-full rounded-lg border border-[var(--color-text)]/15 bg-[var(--color-bg)] px-3 py-2 text-base text-[var(--color-text)] placeholder:text-[var(--color-muted)] outline-none focus:border-[var(--color-muted)] focus:ring-1 focus:ring-[var(--color-muted)]"
			/>

			<label class="mt-4 block text-sm font-medium text-[var(--color-text)]" for="contact-message">Message</label>
			<textarea
				id="contact-message"
				bind:value={message}
				rows="4"
				placeholder="Hi — I'd like to talk about..."
				class="mt-1 w-full rounded-lg border border-[var(--color-text)]/15 bg-[var(--color-bg)] px-3 py-2 text-base text-[var(--color-text)] placeholder:text-[var(--color-muted)] outline-none focus:border-[var(--color-muted)] focus:ring-1 focus:ring-[var(--color-muted)]"
			></textarea>

			<button
				type="submit"
				class="mt-6 w-full rounded-full bg-[var(--color-text)] px-5 py-2.5 text-base font-medium text-[var(--color-bg)] hover:opacity-90"
			>
				Send message
			</button>
			<p class="mt-2 text-center text-sm text-[var(--color-muted)]">
				Or <a href="mailto:{site.email}" class="text-[var(--color-text)] underline decoration-[var(--color-muted)] underline-offset-4 hover:decoration-[var(--color-text)]">email directly</a>
			</p>
		</form>
	</div>
</section>
