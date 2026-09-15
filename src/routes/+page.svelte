<script lang="ts">
	import Contact from '$lib/components/Contact.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Stack from '$lib/components/Stack.svelte';
</script>

<Hero />
<div class="mx-auto max-w-6xl px-6"><hr class="border-[var(--color-text)]/10" /></div>
<Experience />
<div class="mx-auto max-w-6xl px-6"><hr class="border-[var(--color-text)]/10" /></div>
<Stack />
<div class="mx-auto max-w-6xl px-6"><hr class="border-[var(--color-text)]/10" /></div>
<Projects />
<div class="mx-auto max-w-6xl px-6"><hr class="border-[var(--color-text)]/10" /></div>
<Contact />
