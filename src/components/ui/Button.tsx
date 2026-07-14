import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Props = { children: ReactNode; variant?: 'primary' | 'secondary' | 'ghost'; href?: string; className?: string } & ButtonHTMLAttributes<HTMLButtonElement> & AnchorHTMLAttributes<HTMLAnchorElement>;
export function Button({ children, variant = 'primary', href, className = '', ...props }: Props) {
 const base = 'focus-ring inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 disabled:opacity-60';
 const styles = { primary: 'bg-amber-500 text-slate-950 hover:bg-amber-400', secondary: 'bg-slate-900 text-white hover:bg-slate-800', ghost: 'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50' }[variant];
 if (href) return <Link href={href} className={`${base} ${styles} ${className}`} {...props}>{children}</Link>;
 return <button className={`${base} ${styles} ${className}`} {...props}>{children}</button>;
}
