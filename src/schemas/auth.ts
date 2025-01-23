import { z } from 'zod'

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, 'O nome deve ter pelo menos 3 caracteres')
    .max(50, 'O nome deve ter no máximo 50 caracteres'),
  email: z
    .string()
    .email('Email inválido')
    .min(5, 'O email deve ter pelo menos 5 caracteres')
    .max(50, 'O email deve ter no máximo 50 caracteres'),
  password: z
    .string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .max(50, 'A senha deve ter no máximo 50 caracteres')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      'A senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número'
    ),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não conferem",
  path: ["confirmPassword"],
})

export type RegisterFormData = z.infer<typeof registerSchema> 