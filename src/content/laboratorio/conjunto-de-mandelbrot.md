---
title: "Explorador del conjunto de Mandelbrot"
description: "Un zoom interactivo al fractal más famoso de las matemáticas, calculado pixel por pixel en el navegador."
date: 2026-06-01
stack: ["TypeScript", "WebGL"]
demoUrl: "https://example.com/mandelbrot"
tags: ["matemáticas", "arte generativo"]
relacionados: ["laboratorio/patrones-de-turing"]
---

La regla detrás del conjunto de Mandelbrot es absurdamente simple: para cada punto del plano complejo, repetir `z = z² + c` y ver si el resultado se escapa al infinito o se queda acotado. Esa frontera entre "se escapa" y "se queda" es el fractal.

## Por qué vale la pena construirlo, no solo verlo

Hay miles de imágenes del Mandelbrot en internet, pero programarlo cambia cómo lo entiendes: de golpe la pregunta deja de ser "qué tan bonito es" y pasa a ser "cuántas iteraciones necesito antes de decidir que un punto no se escapa", que es exactamente el tipo de decisión de ingeniería que hace interesante al fractal.

## Detalles técnicos

- Cada pixel es un número complejo independiente — perfecto para paralelizar en la GPU vía WebGL.
- El color se asigna según cuántas iteraciones tardó en escapar, no según si escapó o no.
- El zoom profundo empieza a chocar con los límites de precisión de punto flotante; ahí es donde tocaría migrar a aritmética de mayor precisión.

Pendiente: agregar un modo de "viaje" que haga zoom automático hacia coordenadas interesantes guardadas.
