export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
	{ label: 'Home', href: '#hero' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Stack', href: '#stack' },
	{ label: 'Projects', href: '#projects' }
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
		company: 'Uptime Tech',
		role: 'Backend Engineer',
		period: 'Apr 2026 – Jul 2026',
		location: 'Lagos, Nigeria',
		summary:
			'Built and maintained NestJS/Express TypeScript REST APIs and PostgreSQL + Prisma data layers for core platform features and predictive maintenance routes.',
		bullets: [
			'Built and maintained NestJS/Express TypeScript REST APIs powering core platform features with emphasis on correctness, reliability, and clean data models using PostgreSQL.',
			'Developed predictive maintenance capabilities and supporting API routes consumed by internal dashboards.',
			'Wrote automated tests that improved coverage and reduced production regressions; participated in code reviews and production issue diagnosis.'
		],
		tags: ['NestJS', 'Express', 'TypeScript', 'PostgreSQL', 'Prisma']
	},
	{
		company: "Kat's & Co",
		role: 'Web3 Backend Engineer',
		period: 'Jan 2024 – Feb 2026',
		location: 'Remote · Canada',
		summary:
			'Designed and operated Node.js backend services for 1,000+ high-value transactions/month (99% success) with Docker/Linux CI/CD and caching/background-job patterns.',
		bullets: [
			'Designed and operated Node.js backend services handling 1,000+ monthly high-value transactions with 99% success rate, including robust payment and state-management flows.',
			'Architected CI/CD pipelines and Docker-based Linux deployments, cutting release cycles by 60% and production errors by 40%.',
			'Collaborated with frontend teams to deliver production TypeScript APIs; implemented caching, background processing patterns, and secure authentication/authorization.',
			'Investigated and resolved production issues while maintaining high availability for transaction-critical systems.'
		],
		tags: ['Node.js', 'TypeScript', 'Docker', 'CI/CD', 'Redis', 'PostgreSQL']
	},
	{
		company: 'Freelance',
		role: 'Backend Engineer',
		period: 'Feb 2021 – Nov 2023',
		location: 'Lagos, Nigeria',
		summary:
			'Built Node.js and Go microservices/REST APIs serving 2,000+ users; PostgreSQL query and service optimization.',
		bullets: [
			'Built Node.js and Go microservices and REST APIs serving 2,000+ users, improving response times by 35% through query optimization and service design.',
			'Optimized PostgreSQL queries and service performance, reducing latency by 30% and error rates by 25%.',
			'Delivered reliable data models, third-party integrations, and provided code reviews across shared projects; supported deployment and ongoing maintenance.'
		],
		tags: ['Node.js', 'Go', 'PostgreSQL', 'REST APIs', 'microservices']
	}
];

export type StackItem = { name: string };
export type StackCategory = { label: string; description: string; items: StackItem[] };

export const stack: StackCategory[] = [
	{
		label: 'Backend',
		description: 'Production Node.js/TypeScript REST APIs, persistence, and background processing.',
		items: [
			{ name: 'Node.js' },
			{ name: 'Express' },
			{ name: 'NestJS' },
			{ name: 'PostgreSQL' },
			{ name: 'Prisma' },
			{ name: 'Redis' },
			{ name: 'BullMQ' },
			{ name: 'REST APIs' },
			{ name: 'GraphQL' },
			{ name: 'microservices' },
			{ name: 'Socket.io' }
		]
	},
	{
		label: 'Frontend',
		description: 'Modern, maintainable product surfaces with typed routing and server components.',
		items: [
			{ name: 'TypeScript' },
			{ name: 'Next.js (App Router)' },
			{ name: 'React' },
			{ name: 'Tailwind CSS' },
			{ name: 'Svelte / SvelteKit' }
		]
	},
	{
		label: 'Integrations & Payments',
		description: 'Money flows, webhooks, and auth boundaries that have to be correct.',
		items: [
			{ name: 'Paystack' },
			{ name: 'Webhook handling' },
			{ name: 'Auth & Authorization' },
			{ name: 'Third-party APIs' }
		]
	},
	{
		label: 'Infrastructure & Tooling',
		description: 'Delivery and quality that keeps releases boring in the best way.',
		items: [
			{ name: 'Docker' },
			{ name: 'AWS S3' },
			{ name: 'GitHub Actions' },
			{ name: 'CI/CD' },
			{ name: 'Linux' },
			{ name: 'Bash' },
			{ name: 'Vitest' },
			{ name: 'Playwright' },
			{ name: 'Git' }
		]
	},
	{
		label: 'Languages',
		description: 'Core languages used day-to-day.',
		items: [
			{ name: 'TypeScript' },
			{ name: 'JavaScript' },
			{ name: 'SQL' },
			{ name: 'Go' },
			{ name: 'Bash' }
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
		title: 'ProTask API',
		description:
			'Multi-tenant task management REST API with full RBAC across normalized tables (users, teams, projects, tasks, comments). JWT auth, role-based guards, team invites, activity logging, pagination, filtering, rate limiting, and BullMQ/Redis background jobs.',
		focus: 'Multi-tenant RBAC API',
		outcome: 'Normalized data model, JWT guards, invites, activity log, and background processing.',
		tags: ['NestJS', 'PostgreSQL', 'Prisma', 'JWT', 'BullMQ', 'Redis', 'Docker'],
		links: { github: 'https://github.com/naiih001' },
		featured: true
	},
	{
		title: 'PayFlow API',
		description:
			'SaaS payment and subscription backend with idempotent Paystack webhook handling, plan-based feature gating, subscription lifecycle management, and secure payment flows — directly relevant to marketplace wallets, escrow, and booking payments.',
		focus: 'Payments & subscriptions',
		outcome: 'Idempotent webhooks, plan gating, and subscription lifecycle.',
		tags: ['NestJS', 'PostgreSQL', 'Prisma', 'Paystack', 'BullMQ', 'Redis', 'Docker'],
		links: { github: 'https://github.com/naiih001' },
		featured: true
	}
];

export type SocialLink = { label: string; href: string };

export const socials: SocialLink[] = [
	{ label: 'GitHub', href: 'https://github.com/naiih001' },
	{ label: 'LinkedIn', href: 'https://linkedin.com/in/isaac_hayab' },
	{ label: 'X', href: 'https://x.com/naet001' },
	{ label: 'Email', href: 'mailto:nommohhayab@outlook.com' }
];

export const site = {
	name: 'Hayab Nommoh Isaac',
	role: 'Senior Full-Stack Software Developer',
	tagline:
		'Full-stack engineer building production Node.js/TypeScript REST APIs, PostgreSQL + Prisma data layers, Redis/BullMQ processing, and modern web frontends — from investigation through deployment.',
	location: 'Minna, Niger State · Open to Lagos Hybrid / Remote Africa',
	email: 'nommohhayab@outlook.com'
};
