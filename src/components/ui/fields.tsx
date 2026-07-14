import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
export function FieldError({ error }: { error?: string }) { return error ? <p className="mt-1 text-sm text-red-700">{error}</p> : null; }
export function Input(props: InputHTMLAttributes<HTMLInputElement>) { return <input {...props} className={`focus-ring w-full rounded-xl border border-slate-300 bg-white px-4 py-3 ${props.className ?? ''}`} />; }
export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) { return <select {...props} className={`focus-ring w-full rounded-xl border border-slate-300 bg-white px-4 py-3 ${props.className ?? ''}`} />; }
export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) { return <textarea {...props} className={`focus-ring min-h-32 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 ${props.className ?? ''}`} />; }
