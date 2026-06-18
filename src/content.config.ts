import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Campos compartidos por todas las secciones del jardín.
 * `tags` es deliberadamente texto libre: no hay un set cerrado de categorías,
 * porque la idea es conectar contenido, no encajarlo en cajones rígidos.
 * `relacionados` apunta a slugs de cualquier colección, ej: "laboratorio/patrones-de-turing".
 */
const base = {
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  relacionados: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
};

const lecturas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lecturas' }),
  schema: ({ image }) =>
    z.object({
      ...base,
      autor: z.string().optional(),
      tipo: z.enum(['Libro', 'Artículo', 'Paper']).default('Libro'),
      rating: z.number().min(1).max(5).optional(),
      enlace: z.string().url().optional(),
      cover: image().optional(),
    }),
});

const cuaderno = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cuaderno' }),
  schema: z.object({
    ...base,
    tipo: z.enum(['Nota', 'Pregunta', 'Idea', 'Reflexión']).default('Reflexión'),
  }),
});

const recetario = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/recetario' }),
  schema: ({ image }) =>
    z.object({
      ...base,
      autor: z.string().optional(),
      tipo: z.enum([
        'Desayuno',
        'Comida-Principal',
        'Acompañamiento',
        'Snack',
        'Postre',
        'Panadería',
      ]).default('Panadería'),
      rating: z.number().min(1).max(5).optional(),
      enlace: z.string().url().optional(),
      cover: image().optional(),
  }),
});

const laboratorio = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/laboratorio' }),
  schema: z.object({
    ...base,
    stack: z.array(z.string()).default([]),
    demoUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
  }),
});

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/proyectos' }),
  schema: z.object({
    ...base,
    estado: z.enum(['activo', 'pausado', 'completado']).default('activo'),
    inicio: z.coerce.date().optional(),
  }),
});

export const collections = { lecturas, cuaderno, recetario, laboratorio, proyectos };
