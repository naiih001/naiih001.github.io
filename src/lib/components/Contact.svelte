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
			<h2 class="text-3xl font-semibold tracking-tight">Contact</h2>
			<p class="mt-2 text-base leading-7">
				Reach out — dummy form below. No backend yet; submit shows a success state. Replace with a
				SvelteKit action or email service when ready. Direct email also works.
			</p>
			<a href="mailto:{site.email}" class="mt-4 inline-block text-base font-medium underline"
				>{site.email}</a
			>
			<div class="mt-6 flex flex-wrap gap-2">
				{#each socials as s (s.label)}
					<a
						href={s.href}
						class="rounded-full border border-zinc-200 px-3 py-1.5 text-sm font-medium hover:bg-zinc-100"
						target={s.href.startsWith('http') ? '_blank' : undefined}
						rel={s.href.startsWith('http') ? 'noreferrer' : undefined}>{s.label}</a
					>
				{/each}
			</div>
		</div>

		<form
			onsubmit={onSubmit}
			class="rounded-xl border border-zinc-200 bg-zinc-50 p-5 md:p-6"
			aria-label="Contact form"
			novalidate
		>
			{#if error}
				<p class="mb-4 rounded-lg bg-red-50 px-3 py-2 text-base text-red-700" role="alert">{error}</p>
			{/if}
			{#if success}
				<p class="mb-4 rounded-lg bg-green-50 px-3 py-2 text-base text-green-800" role="status">
					Demo — message not sent. Replace this handler with a real action/API. ✓
				</p>
			{/if}

			<label class="block text-sm font-medium" for="contact-name">Name</label>
			<input
				id="contact-name"
				bind:value={name}
				placeholder="Jane Doe"
				autocomplete="name"
				class="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-base outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
			/>

			<label class="mt-4 block text-sm font-medium" for="contact-email">Email</label>
			<input
				id="contact-email"
				bind:value={email}
				placeholder="jane@example.com"
				autocomplete="email"
				class="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-base outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
			/>

			<label class="mt-4 block text-sm font-medium" for="contact-message">Message</label>
			<textarea
				id="contact-message"
				bind:value={message}
				rows="4"
				placeholder="Hi — I'd like to talk about..."
				class="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-base outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
			></textarea>

			<button
				type="submit"
				class="mt-6 w-full rounded-full bg-zinc-900 px-5 py-2.5 text-base font-medium text-white hover:bg-zinc-800"
			>
				Send message
			</button>
			<p class="mt-2 text-center text-sm">
				Or <a href="mailto:{site.email}" class="underline">email directly</a>
			</p>
		</form>
	</div>
</section>
