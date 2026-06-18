import { getEntry, getCollection } from 'astro:content';
import { SECCION_IDS, type SeccionId } from './secciones';

export function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-');
}

function esSeccionId(v: string): v is SeccionId {
  return (SECCION_IDS as string[]).includes(v);
}

export interface EntradaConSeccion {
  seccionId: SeccionId;
  id: string;
  data: {
    title: string;
    description: string;
    date: Date;
    tags: string[];
    draft: boolean;
    [key: string]: unknown;
  };
}

export async function obtenerTodasLasEntradas(): Promise<EntradaConSeccion[]> {
  const todas: EntradaConSeccion[] = [];
  for (const seccionId of SECCION_IDS) {
    const entradas = await getCollection(seccionId, ({ data }) => !data.draft);
    for (const e of entradas) {
      todas.push({ seccionId, id: e.id, data: e.data as EntradaConSeccion['data'] });
    }
  }
  return todas;
}

export interface RelacionadoResuelto {
  seccionId: SeccionId;
  href: string;
  title: string;
  description: string;
  date: Date;
}

/**
 * Recibe referencias tipo "laboratorio/patrones-de-turing" y devuelve
 * los datos necesarios para renderizar una EntryCard. Si una referencia
 * no existe (typo, entrada borrada), se ignora en silencio en vez de
 * romper el build.
 */
export async function resolverRelacionados(refs: string[]): Promise<RelacionadoResuelto[]> {
  const resultados: RelacionadoResuelto[] = [];

  for (const ref of refs) {
    const [seccionId, slug] = ref.split('/');
    if (!seccionId || !slug || !esSeccionId(seccionId)) continue;

    const entry = await getEntry(seccionId, slug);
    if (!entry) continue;

    resultados.push({
      seccionId,
      href: `/${seccionId}/${slug}`,
      title: entry.data.title,
      description: entry.data.description,
      date: entry.data.date,
    });
  }

  return resultados;
}
