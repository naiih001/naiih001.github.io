<script lang="ts">
	let { label } = $props<{ label: string }>();
</script>

{#if label === 'GitHub'}
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.75"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	><path
			d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 4 5 4 5 4c-.28 1.15-.28 2.35 0 3.5A2.98 2.98 0 0 0 4 11c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.2 1.23-.1 1.85"
		/><path d="M9 18c-4.51 2-5-2-7-2" /></svg
	>
{:else if label === 'LinkedIn'}
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.75"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect
			width="4"
			height="12"
			x="2"
			y="9"
		/><circle cx="4" cy="4" r="2" /></svg
	>
{:else if label === 'X'}
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="currentColor"
		aria-hidden="true"
	><path
			d="M18.336 2H21.5l-6.84 7.82L22.5 22h-6.18l-4.84-6.33L5.94 22H2.77l7.32-8.37L2.5 2h6.35l4.37 5.78L18.336 2Zm-1.09 18.02h1.72L7.07 3.83H5.23l12.016 16.19Z"
		/></svg
	>
{:else if label === 'Email'}
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.75"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	><rect width="20" height="16" x="2" y="4" rx="2" /><path
			d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
		/></svg
	>
{/if}
