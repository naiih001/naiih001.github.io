import {
	siDocker,
	siExpress,
	siGo,
	siJsonwebtokens,
	siLua,
	siNestjs,
	siNodedotjs,
	siPostgresql,
	siPrisma,
	siRatatui,
	siReact,
	siReactquery,
	siRedis,
	siRust,
	siTui,
	siTypescript
} from 'simple-icons';

export type IconEntry = {
	title: string;
	slug: string;
	hex: string;
	path: string;
	source: string;
};

export const iconMap: Record<string, IconEntry> = {
	'NestJS': siNestjs,
	'Express': siExpress,
	'TypeScript': siTypescript,
	'PostgreSQL': siPostgresql,
	'Prisma': siPrisma,
	'React': siReact,
	// TanStack Query was previously React Query — simple-icons keeps it as `reactquery`
	'TanStack Query': siReactquery,
	'Node.js': siNodedotjs,
	'Docker': siDocker,
	'Redis': siRedis,
	'Go': siGo,
	'Rust': siRust,
	'ratatui': siRatatui,
	'TUI': siTui,
	'Lua': siLua,
	'JWT': siJsonwebtokens
};
