import { z } from 'zod';

const imageSchema = z.instanceof(File).refine((file) => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type), 'Use JPG, PNG ou WebP.').refine((file) => file.size <= 5 * 1024 * 1024, 'Cada imagem deve ter até 5MB.');
export const quoteSchema = z.object({
 name: z.string().min(2, 'Informe seu nome.'), phone: z.string().min(10, 'Informe um telefone válido.'), email: z.string().email('E-mail inválido.').optional().or(z.literal('')), city: z.string().min(2, 'Informe a cidade.'), neighborhood: z.string().min(2, 'Informe o bairro.'),
 serviceType: z.string().min(1, 'Selecione um serviço.'), propertyType: z.string().min(1), environment: z.string().min(1), area: z.string().min(1), rooms: z.string().min(1), wallState: z.string().min(1), needsPutty: z.string().min(1), material: z.string().min(1), desiredDate: z.string().min(1), notes: z.string().optional(), images: z.array(imageSchema).max(6, 'Envie no máximo 6 fotos.').optional(), consent: z.literal(true, { error: 'Autorize o uso das informações para prosseguir.' }),
});
export type QuoteFormData = z.infer<typeof quoteSchema>;
