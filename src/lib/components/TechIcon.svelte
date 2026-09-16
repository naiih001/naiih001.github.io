<script lang="ts">
	import { iconMap } from '$lib/techIcons';

	let { label, size = 18 } = $props<{ label: string; size?: number }>();

	const icon = $derived(iconMap[label]);
</script>

{#if icon}
	<span
		title={label}
		aria-label={label}
		role="img"
		class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white ring-1 ring-[#172033]/10"
	>
		<svg
			viewBox="0 0 24 24"
			width={size}
			height={size}
			fill="#{icon.hex}"
			aria-hidden="true"
		>
			<title>{label}</title>
			<path d={icon.path} />
		</svg>
	</span>
{:else}
	<span class="rounded-full bg-[#f6f1ea] px-3 py-1.5 text-sm font-medium text-[#536070] ring-1 ring-[#172033]/8"
		>{label}</span
	>
{/if}
