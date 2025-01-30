import { z } from 'zod';

const orderValidationSchema = z.object({
  body: z.object({
    user: z.string(),
    name: z.string().min(1, 'Name is required'),
    brand: z.string().min(1, 'Brand is required'),
    price: z.number().min(0, 'Price cannot be negative'),
    category: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric']),
    model: z.string().trim().min(1, 'Model is required'),
    description: z
      .string()
      .min(10, 'Description should be at least 10 characters long'),
    quantity: z.number().int().min(0, 'Quantity cannot be negative'),
    inStock: z.boolean().default(true),
  }),
});

export const orderValidation = {
  orderValidationSchema,
};
