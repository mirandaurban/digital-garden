---
title: "Patrones de Turing en el navegador"
description: "Una simulación de reacción-difusión para generar manchas tipo piel de leopardo, corriendo en tiempo real con Canvas."
date: 2026-05-20
stack: ["JavaScript", "Canvas API"]
demoUrl: "https://example.com/patrones-de-turing"
repoUrl: "https://github.com/example/patrones-de-turing"
tags: ["arte generativo", "matemáticas", "programación"]
relacionados: ["laboratorio/conjunto-de-mandelbrot"]
---

Alan Turing propuso en 1952 que patrones como las manchas de un leopardo o las rayas de una cebra podían surgir de dos sustancias químicas difundiéndose a velocidades distintas y reaccionando entre sí — sin ningún plano previo, solo matemática local repetida miles de veces.

## La idea central

Dos "sustancias" simuladas en una grilla: un activador que se autopromueve y un inhibidor que lo frena. Ajustando solo las tasas de difusión de cada uno, el mismo sistema produce manchas, rayas o laberintos.

```js
// Núcleo simplificado del paso de difusión
function paso(a, b, da, db, feed, kill) {
  const lapA = laplaciano(a);
  const lapB = laplaciano(b);
  a += da * lapA + a * a * b - (feed + kill) * a;
  b += db * lapB - a * a * b + feed * (1 - b);
}
```

## Lo que aprendí

El resultado es muy sensible a la relación entre `da` y `db`. Pequeños cambios mueven el sistema entre "manchas", "laberinto" y "caos sin forma" — la frontera entre orden y ruido es más angosta de lo que esperaba.

Pendiente: exponer esos parámetros como sliders para poder explorar la frontera a mano.
