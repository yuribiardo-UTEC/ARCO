# ARCO · Acelerador de Reciclaje Colaborativo en Origen

Portal documental del proyecto ARCO, desarrollado por un equipo del Diplomado en Gobernabilidad e Innovación Pública, CAF – Universidad de Montevideo, 2026.

ARCO propone un servicio de bajo costo para mejorar la separación de residuos reciclables en edificios de Montevideo y documentar qué ocurre con el material después de que sale del edificio. El piloto propuesto es acotado: un edificio, un material, un gestor receptor y ocho semanas, con una línea de base previa.

## Estado del proyecto

**Versión inicial · En evolución.**

Este repositorio reúne el proceso y los materiales de ARCO y queda preparado para incorporar progresivamente el código, las pruebas y la documentación técnica del MVP. El video muestra una demostración conceptual; la herramienta operativa aún no está implementada.

| Componente | Estado |
|---|---|
| Portal documental (este sitio) | Versión inicial publicable |
| Piezas educativas y de comunicación | Existen: video de presentación del Centenario, adhesivos, folleto, tarjetas del equipo. El juego educativo no está incluido en este paquete |
| Demostración conceptual del MVP | Video con datos simulados. No es evidencia de un piloto |
| Herramienta operativa | No implementada. Ver `src/`, `tests/` y `docs/tecnica/` |
| Piloto | Propuesto, no ejecutado |

## Estructura

```
index.html            Portada
recorrido.html        Línea de tiempo del proyecto
investigacion.html    Encuesta, devoluciones y aprendizajes
propuesta.html        Servicio, actores, recorrido del material y pendientes
mvp.html              Demostración conceptual del MVP
galeria.html          Fotografías, piezas e imágenes conceptuales
documentos.html       Documentos publicables
equipo.html           Integrantes
desarrollo.html       Próximos desarrollos
assets/               Estilos, script, tipografía, imágenes y videos
documentos/           Archivos publicables (PDF, CSV, TXT)
src/                  Reservado para el código del MVP (vacío)
tests/                Reservado para las pruebas (vacío)
docs/tecnica/         Reservado para la documentación técnica (vacío)
GUIA_MACOS.md         Cómo subir el sitio a GitHub Pages desde una Mac
INVENTARIO.md         Archivos incluidos, excluidos y pendientes
VERIFICACIONES.md     Qué se comprobó y qué quedó pendiente
```

El sitio es estático (HTML, CSS y JavaScript) y no necesita servidor, instalación ni dependencias externas. Todas las rutas son relativas, por lo que funciona dentro de la dirección `https://USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.

## Cómo actualizar

- **Textos:** se editan directamente en el archivo `.html` de cada sección. Encabezado, menú y pie se repiten en cada página: si se cambia uno, hay que cambiarlo en las nueve.
- **Documentos:** se agregan en `documentos/` con un nombre simple, sin espacios ni tildes (por ejemplo `2026-12-01_informe-piloto.pdf`), y se suma una tarjeta en `documentos.html` copiando una existente.
- **Imágenes:** van en `assets/img/` y deben llevar texto alternativo (`alt`) que describa lo que se ve. Las imágenes conceptuales se identifican como tales.
- **Videos:** van en `assets/video/`. Con carga desde el navegador, cada archivo puede pesar como máximo 25 MiB.
- **Código del MVP:** se incorpora en `src/`, con sus pruebas en `tests/` y su documentación en `docs/tecnica/`. Cuando exista, actualizar el estado en este README y en la página `desarrollo.html`.

## Reglas de contenido

- Distinguir lo realizado, lo propuesto y lo simulado.
- No presentar el piloto como ejecutado ni la aceptación del material como prueba de reciclaje.
- No publicar datos personales: la planilla original de la encuesta queda fuera del repositorio.
- No corregir documentos históricos. Las diferencias se explican en el portal y en `INVENTARIO.md`.

## Contexto académico y derechos

ARCO se desarrolló en el marco del Diplomado en Gobernabilidad e Innovación Pública, CAF – Universidad de Montevideo. La mención de ambas instituciones indica el contexto académico y no implica un aval adicional.

El equipo todavía no decidió una licencia de reutilización para los contenidos. Hasta que lo haga, no se otorga ninguna licencia. La tipografía Montserrat se incluye bajo su propia licencia SIL Open Font License (`assets/fonts/OFL-Montserrat.txt`).
