import type { LucideIcon } from 'lucide-react';

export type Service = { slug: string; title: string; summary: string; description: string; icon: LucideIcon; image: string; benefits: string[] };
export type PortfolioItem = { title: string; category: string; location: string; image: string; alt: string; description: string };
export type Testimonial = { name: string; city: string; text: string; rating: number };
export type FAQItem = { question: string; answer: string };
