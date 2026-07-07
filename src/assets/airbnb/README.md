# Fotos del Airbnb

Arrastra aquí las fotos del alojamiento y aparecerán **solas** en el carrusel
de la sección "Nuestro hospedaje". No hay que tocar código.

## Cómo funciona
- Formatos soportados: `.jpg`, `.jpeg`, `.png`, `.webp`
- El orden es alfabético/numérico, así que nómbralas `1.jpg`, `2.jpg`, `3.jpg`...
- Si no hay ninguna foto, se muestra un placeholder automáticamente.
- Con 1 foto se ve una sola imagen; con 2 o más se activa el carrusel con
  auto-play y puntos de navegación.

## Nota
Estas fotos van en `src/assets/` (no en `public/`) para que Vite las detecte
automáticamente al hacer build.
