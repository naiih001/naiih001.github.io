import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

export const prefersReducedMotion = () =>
	typeof window !== 'undefined' &&
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

type RevealOptions = {
	y?: number;
	duration?: number;
	delay?: number;
	start?: string;
	once?: boolean;
};

/** Fade-up reveal on scroll. Usage: use:reveal or use:reveal={{ y: 48 }} */
export function reveal(node: HTMLElement, opts: RevealOptions = {}) {
	if (prefersReducedMotion()) {
		gsap.set(node, { clearProps: 'all' });
		return {};
	}
	const { y = 40, duration = 0.9, delay = 0, start = 'top 85%', once = true } = opts;
	const tween = gsap.from(node, {
		y,
		opacity: 0,
		duration,
		delay,
		ease: 'power3.out',
		scrollTrigger: {
			trigger: node,
			start,
			once
		}
	});
	return {
		destroy() {
			tween.scrollTrigger?.kill();
			tween.kill();
		}
	};
}

type GroupOptions = RevealOptions & { stagger?: number };

/** Stagger children on scroll. Usage: use:revealGroup on parent, children need [data-reveal-item] */
export function revealGroup(node: HTMLElement, opts: GroupOptions = {}) {
	if (prefersReducedMotion()) return {};
	const {
		y = 48,
		duration = 0.8,
		stagger = 0.12,
		start = 'top 82%',
		once = true
	} = opts;
	const items = node.querySelectorAll('[data-reveal-item]');
	if (!items.length) return {};
	const tween = gsap.from(items, {
		y,
		opacity: 0,
		duration,
		stagger,
		ease: 'power3.out',
		scrollTrigger: { trigger: node, start, once }
	});
	return {
		destroy() {
			tween.scrollTrigger?.kill();
			tween.kill();
		}
	};
}

/**
 * Line-mask heading reveal (true line-by-line via SplitText).
 * Small markup tweak: heading gets overflow-hidden lines automatically.
 * Usage: use:maskLines on an h2/h3.
 */
export function maskLines(node: HTMLElement, opts: { start?: string; stagger?: number } = {}) {
	if (prefersReducedMotion()) return {};
	const { start = 'top 85%', stagger = 0.12 } = opts;
	let split: SplitText | null = null;
	let tween: gsap.core.Tween | null = null;
	// Defer so fonts/layout settle
	const init = () => {
		split = new SplitText(node, { type: 'lines', mask: 'lines' });
		tween = gsap.from(split.lines, {
			yPercent: 110,
			duration: 1,
			stagger,
			ease: 'power4.out',
			scrollTrigger: { trigger: node, start, once: true }
		});
	};
	// SplitText needs laid-out text; requestAnimationFrame avoids 0-width flash
	const raf = requestAnimationFrame(init);
	return {
		destroy() {
			cancelAnimationFrame(raf);
			tween?.scrollTrigger?.kill();
			tween?.kill();
			split?.revert();
		}
	};
}

/** Slow scrub parallax. Usage: use:parallax={{ amount: 12 }} (percent). */
export function parallax(node: HTMLElement, opts: { amount?: number } = {}) {
	if (prefersReducedMotion()) return {};
	const { amount = 12 } = opts;
	const tween = gsap.fromTo(
		node,
		{ yPercent: -amount / 2 },
		{
			yPercent: amount / 2,
			ease: 'none',
			scrollTrigger: { trigger: node.parentElement ?? node, start: 'top bottom', end: 'bottom top', scrub: true }
		}
	);
	return {
		destroy() {
			tween.scrollTrigger?.kill();
			tween.kill();
		}
	};
}
