# Registro de verificaciones

Fecha: 3 de noviembre de 2026. Las pruebas se hicieron con Chromium (Playwright), sirviendo el sitio desde una subcarpeta (`http://localhost/arco-portal/`) para simular la dirección de un repositorio de GitHub Pages.

## Comprobado

| Verificación | Resultado |
|---|---|
| Las 9 páginas abren sin errores de JavaScript | Sí, en escritorio (1366 px) y en celular (390 px) |
| Enlaces, imágenes, videos, subtítulos, estilos y documentos | 54 recursos únicos responden correctamente desde la subcarpeta; no hay enlaces rotos ni externos |
| Anclas internas (`#transcripcion`, `#encuesta`, `#devoluciones`, `#contenido`) | Existen en su página de destino |
| Imágenes | Todas cargan en las 9 páginas y en los dos tamaños de pantalla; todas tienen texto alternativo |
| Desborde horizontal | No hay desplazamiento horizontal de página. La única tabla ancha (pendientes de confirmación) se desplaza dentro de su recuadro en el celular |
| Textos cortados | No se detectaron títulos, párrafos, botones ni celdas con texto cortado |
| Menú en celular | Se abre con el botón, informa su estado (`aria-expanded`), navega y se cierra con Escape |
| Teclado | El primer Tab muestra «Saltar al contenido». El foco es visible (contorno de 3 px) y sigue el orden de lectura |
| Movimiento reducido | Con la preferencia activada se desactiva el desplazamiento suave |
| Videos sin descarga automática | Ambos usan `preload="none"`, controles visibles y sin reproducción automática; antes de pulsar «play» no se cargan datos |
| Reproductor | Con una copia temporal en WebM, ambos reproductores arrancan y avanzan. Ver limitación sobre MP4 |
| Archivos MP4 | Se decodificaron completos con ffmpeg sin errores. Ambos usan H.264 (High) y AAC, con el índice al inicio del archivo (`faststart`) |
| Cifras de la encuesta | Calculadas directamente desde la planilla: 111 respuestas, con la cantidad de respuestas válidas por pregunta |
| Datos personales | La planilla con contactos no se incluye. No hay correos ni teléfonos en las páginas, el CSV ni el TXT. Las imágenes no conservan metadatos EXIF |
| Tamaños para la carga desde el navegador | Archivo más grande: 6,3 MiB (límite documentado por GitHub: 25 MiB por archivo). Total aproximado: 16 MB. Límite de un sitio de GitHub Pages: 1 GB |

## No comprobado o con limitaciones

- **Reproducción de los MP4 en un navegador con H.264:** el Chromium del entorno de prueba no incluye ese códec. Los MP4 son válidos y usan el formato habitual que reproducen Safari, Chrome y Firefox en macOS, pero conviene probarlos una vez publicado el sitio.
- **Publicación real en GitHub Pages:** no se creó el repositorio ni se publicó el sitio. La ruta base se simuló con un servidor local.
- **Lectores de pantalla:** no se probaron con VoiceOver.
- **Contraste:** se eligieron combinaciones de alto contraste, pero no se midió cada combinación con una herramienta.
- **Cantidad de archivos por carga:** la documentación de GitHub consultada no indica un máximo de archivos por subida desde el navegador. El paquete tiene 65 archivos.
- **Contenido externo:** no se abrió la página a la que apunta el QR de las tarjetas (claude.ai). El QR del folleto no pudo leerse desde la foto.
- **Transcripción del video del Centenario:** es automática; la primera frase no se pudo confirmar.

## Fuentes consultadas sobre límites

- GitHub Docs, «About large files on GitHub»: archivos agregados desde el navegador, hasta 25 MiB.
- GitHub Docs, «GitHub Pages limits»: sitio publicado de hasta 1 GB; repositorio recomendado de hasta 1 GB; ancho de banda con límite flexible de 100 GB por mes.
- GitHub Docs, «What is GitHub Pages?»: disponible en repositorios públicos con GitHub Free.
