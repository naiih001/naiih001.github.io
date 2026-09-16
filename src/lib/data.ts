export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
	{ label: 'Home', href: '#hero' },
	{ label: 'Experience', href: '#experience' },
	{ label: 'Stack', href: '#stack' },
	{ label: 'Projects', href: '#projects' }
];

export type Experience = {
	company: string;
	companyUrl?: string;
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
		companyUrl: 'https://www.useuptime.site/',
		role: 'Backend Engineer',
		period: 'Apr 2026 – Sep 2026',
		location: 'Lagos, Nigeria',
		summary:
			'Shipped features across NestJS/Express + PostgreSQL/Prisma APIs and React frontend — owned predictive maintenance, employee management and inventory features with performance and reliability hardening on a production ops platform.',
		bullets: [
			'Hardened NestJS/Express + Prisma/Postgres data layer: added NGN/GBP currency, org slug uniqueness and validation, eliminated N+1 on asset lists (2 queries removed, 2× throughput), plus cron inventory alerts, seed permissions and streaming PDF/CSV exports.',
			'Built employee management vertical slice end-to-end: server pagination and bulk import; frontend list/detail/cards, bulk import with polling/progress/CSV, paginated error results (10/page) and dialog→sidebar refactors.',
			'Shipped predictive maintenance and asset intelligence: dashboard, paginated failure predictions and recommended tasks, failure-history tab moved to right sidebar with snapshots, and fixed /predictive route param capture.',
			'Improved frontend performance and reliability: React Query staleTime 30s to cut redundant fetches, lazy-init PowerSync WASM with 2s debounce, compile/runtime rendering cuts, fire-and-forget audits and DISTINCT optimization, plus auth/session and org-fetch race fixes.',
			'Polished product surfaces: low-stock alert widget, Power BI-aligned charts, vendor→inventory navigation, org-currency dashboards and forms, Metadata→Customizations rename, communication red dot for unread and ports/Prisma regeneration fixes.'
		],
		tags: ['NestJS', 'Express', 'TypeScript', 'PostgreSQL', 'Prisma', 'React', 'TanStack Query', 'PowerSync']
	},
	{
		company: "Kat's & Co",
		companyUrl: 'https://x.com/KatsDojo',
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
		title: 'lean — Autonomous Coding Assistant',
		description:
			'Single-binary autonomous coding assistant in Rust (ratatui TUI, SSE streaming agent loop, 6 tools, skills system, MCP integration). Works with any OpenAI-compatible API — no Electron, no Node, just cargo build.',
		focus: 'Rust systems & agent infra',
		outcome: 'TUI, streaming agent loop, tool routing, and guarded execution.',
		tags: ['Rust', 'ratatui', 'TUI', 'SSE', 'MCP', 'OpenAI API'],
		links: { github: 'https://github.com/naiih001/lean' },
		featured: true
	},
	{
		title: 'tedii — Terminal Editor',
		description:
			'Keyboard-driven terminal editor in Rust — rope-based buffer, tree-sitter parsing, Lua (mlua) extensibility, git integration (gix), and clipboard support. Most-starred repo (6★), built for speed and low footprint.',
		focus: 'Rust TUI & systems',
		outcome: 'Rope buffer, syntax parsing, and Lua plugin surface.',
		tags: ['Rust', 'ratatui', 'tree-sitter', 'Lua', 'ropey', 'gix'],
		links: { github: 'https://github.com/naiih001/tedii' },
		featured: true
	},
	{
		title: 'ProTask API',
		description:
			'Multi-tenant task management REST API with full RBAC across normalized tables (users, teams, projects, tasks, comments). JWT auth, role-based guards, team invites, activity logging, pagination, filtering, rate limiting, and BullMQ/Redis background jobs.',
		focus: 'Multi-tenant RBAC API',
		outcome: 'Normalized data model, JWT guards, invites, activity log, and background processing.',
		tags: ['NestJS', 'PostgreSQL', 'Prisma', 'JWT', 'BullMQ', 'Redis', 'Docker'],
		links: { github: 'https://github.com/naiih001/protask' },
		featured: true
	},
	{
		title: 'zk-mcp — Zettelkasten MCP Server',
		description:
			'Zettelkasten note system as an MCP server (Streamable HTTP + stdio). Create, link, tag, search, and retrieve atomic notes via any MCP client — PostgreSQL + Prisma persistence, dual transports, and typed tool surface.',
		focus: 'MCP & knowledge infra',
		outcome: 'MCP tool surface, linked note graph, and Prisma persistence.',
		tags: ['TypeScript', 'MCP', 'PostgreSQL', 'Prisma', 'Node.js'],
		links: { github: 'https://github.com/naiih001/zk-mcp' },
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
	location: 'Niger, Nigeria · Remote Africa',
	email: 'nommohhayab@outlook.com'
};
