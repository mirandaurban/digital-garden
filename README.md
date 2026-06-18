# Digital Garden 🌱 📚 ☀️ 🌀

A personal digital garden for collecting, connecting, and exploring ideas.

---

# Vision

This project is a long-term space for storing, organizing, and connecting things that I find interesting.

Publishing is a consequence, not the goal.

---

# Why

My interests are currently scattered across notebooks, documents, bookmarks, apps, and unfinished projects. Some examples include:

- Books and reading notes
- Philosophy
- Programming
- Languages
- Recipes
- Generative art
- Mathematics
- Sports and training
- Personal projects
- Random curiosities

Instead of maintaining multiple disconnected systems, I want a single place where all of these can coexist and evolve together.

---

# Core Principles

## Content First

The valuable part of the project is the content. Technology exists to make creating and exploring content easier.

## Everything Can Connect

- A recipe can relate to a book.
- A philosophy note can connect to a programming project.
- A training log can inspire a visualization.

Relationships matter more than categories.

## Incremental Evolution

The goal is not to build the final version immediately. Start simple. Add complexity only when there is a real need.

## Content Outlives Technology

If Astro disappears tomorrow, the content should still exist and remain readable.

---

# Conceptual Architecture

## Lecturas

Reading notes, reflexions, and reviews about books.

## Cuaderno

Quick thoughts and unfinished ideas. Entries do not need to be complete.

## Recetario

Recipes that I enjoy cooking. Useful for sharing with my family.

## Laboratorio

A place for experimentation. Built primarily out of curiosity.

## Projects

Long-term efforts and progress logs.

---

# Current Stack (v1)

- Astro
- TypeScript
- Markdown
- Vercel

---

# Explicitly Out of Scope (for now)

- Databases
- Authentication
- Comments
- Newsletters
- Complex analytics
- AI features

These may be added later if they solve a real problem.

---

# Priorities

1. Easy content creation
2. Search
3. Related content
4. Tags
5. Long-term maintainability

---

# Future Ideas

- Content relationships and backlinks
- Knowledge graph
- Generative visuals for entries
- Interactive simulations
- Semantic search
- Reading and learning maps
- Recipe tools
- Training visualizations

---

# Long-Term Goal

Create a living archive of:

- ideas
- readings
- recipes
- experiments
- projects
- questions

---

# Development

## Getting Started

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:4321
```

Build locally:

```bash
npm run build
npm run preview
```

---

# Project Structure

```text
src/
├── content.config.ts
├── content/
│   ├── lecturas/
│   ├── cuaderno/
│   ├── laboratorio/
│   └── proyectos/
├── layouts/
├── components/
├── lib/
├── pages/
└── site.config.ts
```

---

# Content Model

Every piece of content belongs to one of four collections:

- Biblioteca
- Cuaderno
- Laboratorio
- Proyectos

Each collection has its own metadata, but all entries share a common structure.

Example:

```yaml
---
title: "Título"
description: "Resumen corto"
date: 2026-06-17
tags: ["tag-1", "tag-2"]
relacionados: ["laboratorio/otra-pieza"]
draft: false
---
```

The filename becomes the URL.

Example:

```text
cuaderno/mi-nota.md
```

↓

```text
/cuaderno/mi-nota
```

---

# Technical Notes

- Content lives in plain Markdown.
- Markdown is the source of truth.
- Categories are fixed.
- Tags are free-form.
- Simplicity is preferred over features.
- New dependencies require a good reason.

```

```
