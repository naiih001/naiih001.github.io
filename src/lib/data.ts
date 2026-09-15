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
	bullets: string[];
	tags: string[];
};

export const experiences: Experience[] = [
	{
		company: 'Acme Inc.',
		role: 'Frontend Engineer',
		period: '2023 — Present',
		location: 'Remote · Berlin',
		bullets: [
			'Shipped customer-facing dashboard used by 40k+ MAU with SvelteKit and TypeScript.',
			'Led migration from legacy REST to type-safe API layer, cutting fetch bugs by 60%.',
			'Mentored 4 engineers and introduced visual regression testing into CI.'
		],
		tags: ['SvelteKit', 'TypeScript', 'Tailwind', 'Playwright']
	},
	{
		company: 'North Studio',
		role: 'Full-Stack Developer',
		period: '2021 — 2023',
		location: 'Stockholm · Hybrid',
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
		bullets: [
			'Delivered 20+ marketing sites and prototypes for startups and agencies.',
			'Focused on accessibility and performance — 100% a11y audits on shipped projects.'
		],
		tags: ['Svelte', 'React', 'CSS', 'Accessibility']
	}
];

export type StackItem = { name: string };
export type StackCategory = { label: string; items: StackItem[] };

export const stack: StackCategory[] = [
	{
		label: 'Frontend',
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
		items: [
			{ name: 'Node.js' },
			{ name: 'PostgreSQL' },
			{ name: 'Prisma' },
			{ name: 'REST / tRPC' }
		]
	},
	{
		label: 'Tooling',
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
	tags: string[];
	links: { github?: string; demo?: string };
	featured?: boolean;
};

export const projects: Project[] = [
	{
		title: 'Pulse — Analytics Dashboard',
		description:
			'Real-time analytics UI with drag-and-drop widgets, role-based access, and CSV exports. Dummy data, real patterns.',
		tags: ['SvelteKit', 'Tailwind', 'Charts'],
		links: { github: 'https://github.com', demo: 'https://example.com' },
		featured: true
	},
	{
		title: 'Shelf — Minimal Storefront',
		description:
			'Headless commerce starter with cart, checkout, and CMS-driven content. Built to be swapped for any backend.',
		tags: ['SvelteKit', 'Stripe', 'CMS'],
		links: { github: 'https://github.com', demo: 'https://example.com' }
	},
	{
		title: 'Atlas — Docs Template',
		description:
			'Opinionated docs template with search, dark mode-ready tokens, and MDX pipeline. Replace content and ship.',
		tags: ['SvelteKit', 'MDX', 'Search'],
		links: { github: 'https://github.com' }
	},
	{
		title: 'Courier — Form Service',
		description:
			'Lightweight form handler with validation, spam protection, and webhook forwarding. Pair with any email service.',
		tags: ['Node.js', 'Validation', 'Webhooks'],
		links: { github: 'https://github.com' }
	}
];

export type SocialLink = { label: string; href: string };

export const socials: SocialLink[] = [
	{ label: 'GitHub', href: 'https://github.com' },
	{ label: 'LinkedIn', href: 'https://linkedin.com' },
	{ label: 'X', href: 'https://x.com' },
	{ label: 'Email', href: 'mailto:hello@example.com' }
];

export const site = {
	name: 'Alex Rivera',
	role: 'Frontend Engineer — Svelte & TypeScript',
	tagline:
		'I build fast, accessible web apps with clean design and solid engineering. This is a dummy starter — replace the copy and ship your own.',
	location: 'Berlin · Remote',
	email: 'hello@example.com'
};
