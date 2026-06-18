---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout
title="Sobre mí"
description="Pequeña introducción sobre mí, mi visión, y objetivo."

>

<!-- ── HERO ── -->
  <section class="hero">
    <div class="hero-left">
      <p class="eyebrow">✦ Un poco sobre mí</p>
      <h1 class="hero-title">
        ¿Quién<br/><em>soy?</em>
      </h1>
      <p class="hero-bio">
        ¡Hola, soy Mir! Soy estudiante de ingeniería en tecnologías computacionales y 
        vivo con esta necesidad constante de aprender y probar cosas nuevas. <br>

        <br>Soy una persona muy activa, amo tener muchos hobbies: corro, cocino, hago yoga y nado.
        Pero el hábito que más ha marcado mi vida es la lectura. Aunque crecí rodeada de libros,
        no fue hasta los 15 o 16 años que empecé a leer, y de ahí ha sido todo un journey hasta hoy
        en día, en donde es una parte esencial de mi día a día. <br>

        <br>Actualmente, leo con constancia y disfruto explorar textos un poco más complejos.
        Soy fiel creyente de que no apegarte a un solo género o corriente te permite tener una
        perspectiva más amplia y cambia por completo la forma en la que entiendes el mundo. <br>

        <br>En este blog vas a encontrar lecturas muy distintas entre sí: desde clásicos hasta libros
        que aparecen de forma inesperada. La idea es compartir lo que cada uno me deja —ideas, preguntas
        y emociones— y que, si algo te resuena, te den ganas de leerlo también.
      </p>

      <div class="social-links">
        <a href="https://www.tiktok.com/@mirandaurbann" target="_blank" rel="noopener noreferrer" class="social-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
          </svg>
          TikTok
        </a>

        <a href="https://letterboxd.com/mirurban" target="_blank" rel="noopener noreferrer" class="social-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M10.5 2C6.08 2 2.5 5.58 2.5 10s3.58 8 8 8c1.5 0 2.91-.42 4.11-1.14L19.5 21.5l1.41-1.41-4.97-4.97A7.96 7.96 0 0 0 18.5 10c0-4.42-3.58-8-8-8zm0 2a6 6 0 0 1 6 6 6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6z"/>
          </svg>
          Letterboxd
        </a>
      </div>
    </div>

    <!-- INTRODUCTORY IMAGES -->
    <div class="hero-right">
      <div class="scrapbook">

        <!-- Fotos -->
        <div class="scrap scrap-1">
          <img src="../../images/sobre-mi-1.jpeg" alt="Yo en Canadá" />
        </div>

        <div class="scrap scrap-2">
          <img src="../../images/sobre-mi-2.jpeg" alt="Selfie en el espejo" />
        </div>

        <div class="scrap scrap-3">
          <img src="../../images/sobre-mi-3.jpeg" alt="Biblioteca del abuelo" />
        </div>

        <div class="scrap scrap-4">
          <img src="../../images/sobre-mi-4.jpeg" alt="Biblioteca del abuelo" />
        </div>

      </div>
    </div>

  </section>

</BaseLayout>

<style>
  /* ── HERO ── */
  .hero {
    display: grid;
    grid-template-columns: 3fr 2fr;
    min-height: 88vh;
    border-bottom: var(--border);
  }

  .hero-left {
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    border-right: var(--border);
  }

  .eyebrow {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--rust);
  }

  .hero-title {
    font-family: var(--font-display);
    font-size: clamp(3.5rem, 6vw, 6rem);
    line-height: 1.0;
    font-weight: 400;
    letter-spacing: -0.03em;
  }

  .hero-title em {
    font-style: italic;
    color: var(--rust);
  }

  .hero-bio {
    font-size: 1.15rem;
    line-height: 1.8;
    font-weight: 300;
    max-width: 60ch;
  }

  /* ── SCRAPBOOK ── */
  .hero-right {
    position: relative;
    overflow: hidden;
    background: var(--cream);
  }

  .scrapbook {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 500px;
  }

  .scrap {
    position: absolute;
    background: var(--paper);
    /* Borde estilo polaroid: más grueso abajo */
    padding: 10px 10px 32px 10px;
    box-shadow: 4px 6px 16px rgba(44,44,42,0.13);
    overflow: hidden;
  }

  .scrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Fotos */
  .scrap-1 {
    width: 220px;
    height: 270px;
    top: 15%;
    left: 10%;
    rotate: -3deg;
    z-index: 2;
  }

  .scrap-2 {
    width: 190px;
    height: 230px;
    top: 16%;
    left: 64%;
    rotate: 4deg;
    z-index: 3;
  }

  .scrap-3 {
    width: 190px;
    height: 230px;
    top: 60%;
    left: 16%;
    rotate: 4deg;
    z-index: 4;
  }

  .scrap-4 {
    width: 220px;
    height: 270px;
    top: 57%;
    left: 57%;
    rotate: -3deg;
    z-index: 2;
  }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .eyebrow   { animation: fadeUp 0.5s ease both; }
  .hero-title { animation: fadeUp 0.5s ease 0.1s both; }
  .hero-bio  { animation: fadeUp 0.5s ease 0.2s both; }
  .scrap-1   { animation: fadeUp 0.6s ease 0.2s both; }
  .scrap-2   { animation: fadeUp 0.6s ease 0.35s both; }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .hero {
      grid-template-columns: 1fr;         
      min-height: auto;            
      border-bottom: var(--border);
    }

    .hero-left {
      border-right: none;
      border-bottom: var(--border);
      padding: 4rem 2rem 3.5rem;
      justify-content: flex-start;    
      gap: 1.75rem;
    }

    .hero-right {
      min-height: 560px;              
      padding: 2rem 0;
    }

    .scrapbook {
      min-height: 560px;
    }

    /* Ajustes de posición de fotos */
    .scrap-1 {
      width: 180px;
      height: 220px;
      top: 12%;
      left: 8%;
      rotate: -4deg;
    }
    .scrap-2 {
      width: 160px;
      height: 200px;
      top: 18%;
      left: 55%;
      rotate: 5deg;
    }
    .scrap-3 {
      width: 160px;
      height: 200px;
      top: 58%;
      left: 12%;
      rotate: 3deg;
    }
    .scrap-4 {
      width: 180px;
      height: 220px;
      top: 55%;
      left: 52%;
      rotate: -4deg;
    }

    .sticker {
      bottom: 12%;
      left: 10%;
      font-size: 0.55rem;
      padding: 0.3rem 0.8rem;
    }
  }

  @media (max-width: 640px) {
    .hero-left {
      padding: 3rem 1.5rem 3rem;
    }

    .hero-right {
      min-height: 480px;
    }

    .scrapbook {
      min-height: 480px;
    }

    .hero-title {
      font-size: clamp(2.8rem, 8.5vw, 4.8rem);
    }

    .hero-bio {
      font-size: 1.05rem;
      max-width: 100%;
    }

    /* Fotos más pequeñas en pantallas muy estrechas */
    .scrap-1, .scrap-4 {
      width: 155px;
      height: 195px;
    }
    .scrap-2, .scrap-3 {
      width: 140px;
      height: 175px;
    }
  }

  /* ── SOCIAL BUTTONS ── */
  .social-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .social-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.25rem;
    border: 1px solid var(--rust);
    color: var(--rust);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-decoration: none;
    transition: background 0.2s ease, color 0.2s ease;
  }

  .social-btn:hover {
    background: var(--rust);
    color: var(--cream);
  }

  /* Responsivo */
  @media (max-width: 640px) {
    .social-links {
      flex-direction: column;
    }

    .social-btn {
      justify-content: center;
      width: 100%;
    }
  }
</style>
