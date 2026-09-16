<script lang="ts">
	import { iconMap } from '$lib/techIcons';

	let { label, size = 14 } = $props<{ label: string; size?: number }>();

	const icon = $derived(iconMap[label]);
</script>

<span
	title={label}
	class="inline-flex items-center gap-1.5 rounded-full bg-[#f6f1ea] px-2.5 py-1 text-xs font-medium leading-none text-[#536070] ring-1 ring-[#172033]/[0.06]"
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
