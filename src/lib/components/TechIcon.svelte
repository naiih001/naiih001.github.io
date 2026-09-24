<script lang="ts">
	import { iconMap } from '$lib/techIcons';

	let { label, size = 14 } = $props<{ label: string; size?: number }>();

	const icon = $derived(iconMap[label]);
</script>

<span
	title={label}
	class="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-white ring-1 ring-white/10"
>
	{#if icon}
		<svg
			viewBox="0 0 24 24"
			width={size}
			height={size}
			fill="currentColor"
			aria-hidden="true"
			class="shrink-0 opacity-70"
		>
			<path d={icon.path} />
		</svg>
	{/if}
	{label}
</span>
