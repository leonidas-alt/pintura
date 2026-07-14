export function normalizeWhatsAppNumber(value: string) { return value.replace(/\D/g, ''); }
export function isValidWhatsAppNumber(value: string) { const n = normalizeWhatsAppNumber(value); return n.length >= 12 && n.length <= 15; }
export function buildWhatsAppUrl(number: string, message: string) { if (!isValidWhatsAppNumber(number)) return null; return `https://wa.me/${normalizeWhatsAppNumber(number)}?text=${encodeURIComponent(message)}`; }
