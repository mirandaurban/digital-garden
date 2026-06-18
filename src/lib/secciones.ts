export type SeccionId = 'lecturas' | 'cuaderno' | 'recetario' | 'laboratorio' | 'proyectos';

export interface Seccion {
  id: SeccionId;
  label: string;
  singular: string;
  descripcion: string;
  accent: string;
  glifo: string;
}

export const SECCIONES: Record<SeccionId, Seccion> = {
  lecturas: {
    id: 'lecturas',
    label: 'Lecturas',
    singular: 'lectura',
    descripcion: 'Contenido sobre libros: reseñas, opiniones, y reflexiones.',
    accent: 'c-lecturas',
    glifo: '◆',
  },
  cuaderno: {
    id: 'cuaderno',
    label: 'Cuaderno',
    singular: 'nota',
    descripcion: 'Pensamientos rápidos: preguntas, observaciones, citas, ideas. No necesita estar terminado.',
    accent: 'c-cuaderno',
    glifo: '●',
  },
  recetario: {
    id: 'recetario',
    label: 'Recetario',
    singular: 'recetario',
    descripcion: 'Recetas deliciosas que disfruto hacer.',
    accent: 'c-recetario',
    glifo: '◆',
  },
  laboratorio: {
    id: 'laboratorio',
    label: 'Laboratorio',
    singular: 'experimento',
    descripcion: 'Un lugar para jugar: simulaciones, matemáticas, machine learning, y más.',
    accent: 'c-laboratorio',
    glifo: '▲',
  },
  proyectos: {
    id: 'proyectos',
    label: 'Proyectos',
    singular: 'proyecto',
    descripcion: 'Procesos de largo plazo: entrenamiento, aprendizaje, desarrollo de este mismo jardín.',
    accent: 'c-proyectos',
    glifo: '■',
  },
};

export const SECCION_IDS: SeccionId[] = ['lecturas', 'cuaderno', 'recetario', 'laboratorio', 'proyectos'];

export function formatFecha(d: Date): string {
  return new Intl.DateTimeFormat('es', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
}
