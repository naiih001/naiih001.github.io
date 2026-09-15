export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
	{ label: 'Home', href: '#hero' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Stack', href: '#stack' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Contact', href: '#contact' }
];

export type Experience = {
	company: string;
	role: string;
	period: string;
	location: string;
	summary: string;
	bullets: string[];
	tags: string[];
};

export const experiences: Experience[] = [
	{
		company: 'Uptime Tech LTD',
		role: 'Backend Engineer',
		period: 'April / 2026 - September / 2026',
		location: 'Remote · Berlin',
		summary: 'Backend ownership across product dashboards, APIs, and cloud deployment paths.',
		bullets: [
			'Shipped customer-facing dashboard used by 40k+ MAU with SvelteKit and TypeScript.',
			'Led migration from legacy REST to type-safe API layer, cutting fetch bugs by 60%.',
			'Mentored 4 engineers and introduced visual regression testing into CI.'
		],
		tags: ['Next.js', 'TypeScript', 'AWS', 'Express.js']
	},
	{
		company: 'Kat\'s & Co Web3 LTD',
		role: 'Full-Stack Developer',
		period: '2021 — 2023',
		location: 'Stockholm · Hybrid',
		summary: 'Product delivery across commerce surfaces, CMS integration, and shared UI systems.',
		bullets: [
			'Built e-commerce storefront and CMS integration handling €2M monthly GMV.',
			'Designed component library adopted across 3 product teams.',
			'Improved Lighthouse performance score from 71 to 96.'
		],
		tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Figma']
	},
	{
		company: 'Freelance',
		role: 'Web Developer',
		period: '2019 — 2021',
		location: 'Remote',
		summary: 'Client-facing web builds with a focus on accessible, performant delivery.',
		bullets: [
			'Delivered 20+ marketing sites and prototypes for startups and agencies.',
			'Focused on accessibility and performance — 100% a11y audits on shipped projects.'
		],
		tags: ['Svelte', 'React', 'CSS', 'Accessibility']
	}
];

export type StackItem = { name: string };
export type StackCategory = { label: string; description: string; items: StackItem[] };

export const stack: StackCategory[] = [
	{
		label: 'Frontend',
		description: 'Readable product surfaces, typed routing, and interface systems that stay maintainable.',
		items: [
			{ name: 'TypeScript' },
			{ name: 'Svelte / SvelteKit' },
			{ name: 'React / Next.js' },
			{ name: 'Tailwind CSS' },
			{ name: 'Vite' }
		]
	},
	{
		label: 'Backend',
		description: 'APIs, persistence, validation, and service boundaries for production web products.',
		items: [
			{ name: 'Node.js' },
			{ name: 'PostgreSQL' },
			{ name: 'Prisma' },
			{ name: 'REST / tRPC' }
		]
	},
	{
		label: 'Tooling',
		description: 'The checks and delivery tools that keep releases boring in the best way.',
		items: [
			{ name: 'Git / GitHub' },
			{ name: 'Playwright' },
			{ name: 'Docker' },
			{ name: 'Figma' }
		]
	}
];

export type Project = {
	title: string;
	description: string;
	focus: string;
	outcome: string;
	tags: string[];
	links: { github?: string; demo?: string };
	featured?: boolean;
};

export const projects: Project[] = [
	{
		title: 'Pulse — Analytics Dashboard',
		description:
			'Real-time analytics UI with drag-and-drop widgets, role-based access, and CSV exports for data-heavy teams.',
		focus: 'Data-heavy product UI',
		outcome: 'Dashboard architecture, access boundaries, and export flows.',
		tags: ['SvelteKit', 'Tailwind', 'Charts'],
		links: { github: 'https://github.com', demo: 'https://example.com' },
		featured: true
	},
	{
		title: 'Shelf — Minimal Storefront',
		description:
			'Headless commerce storefront with cart, checkout, and CMS-driven content. Built to be swapped for any backend.',
		focus: 'Commerce workflow',
		outcome: 'Composable storefront patterns with checkout-ready state.',
		tags: ['SvelteKit', 'Stripe', 'CMS'],
		links: { github: 'https://github.com', demo: 'https://example.com' }
	},
	{
		title: 'Atlas — Docs Template',
		description:
			'Opinionated docs template with search, dark mode-ready tokens, and MDX pipeline. Replace content and ship.',
		focus: 'Developer experience',
		outcome: 'Searchable content structure and reusable documentation shell.',
		tags: ['SvelteKit', 'MDX', 'Search'],
		links: { github: 'https://github.com' }
	},
	{
		title: 'Courier — Form Service',
		description:
			'Lightweight form handler with validation, spam protection, and webhook forwarding. Pair with any email service.',
		focus: 'Backend utility',
		outcome: 'Validation, spam filtering, and webhook delivery boundaries.',
		tags: ['Node.js', 'Validation', 'Webhooks'],
		links: { github: 'https://github.com' }
	}
];

export type SocialLink = { label: string; href: string };

export const socials: SocialLink[] = [
	{ label: 'GitHub', href: 'https://github.com/naiih001' },
	{ label: 'LinkedIn', href: 'https://linkedin.com/isaac_hayab' },
	{ label: 'X', href: 'https://x.com/naet001' },
	{ label: 'Email', href: 'mailto:nommohhayab@outlook.com' }
];

export const site = {
	name: 'Isaac Hayab',
	role: 'Backend Engineer - Rust & TypeScript',
	tagline:
		'I build reliable backend systems and the product surfaces around them — fast, accessible, and engineered for handoff.',
	location: 'Nigeria · Remote',
	email: 'nommohhayab@outlook.com'
};
