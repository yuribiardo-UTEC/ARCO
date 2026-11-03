# Inventario de archivos

Corte: 3 de noviembre de 2026.

## Archivos recibidos y verificación del video del Centenario

Se recibieron dos videos. La identificación se hizo por contenido, no solo por el nombre:

| Archivo recibido | Contenido verificado | Uso |
|---|---|---|
| `WhatsApp_Video_2026-11-03_at_12.19.06.mp4` (10 s, 1280×720, con audio) | Abre con una imagen en blanco y negro del Estadio Centenario (torre y tribunas). Siguen escenas recreadas de un hogar, un edificio, un retiro y la ciudad al atardecer. Cierra con «ARCO · Lo que separás hoy, nos une mañana». | Video principal de la portada: `assets/video/arco-centenario.mp4` |
| `ARCO_MVP_operativo_demo_final.mp4` (2:00, 1920×1080, con locución) | Demostración conceptual del registro de lotes con datos simulados. | Página MVP: `assets/video/arco-mvp-demo.mp4` |

Ninguno de los dos videos se recomprimió. Al del Centenario solo se le reorganizaron los metadatos del archivo (`faststart`) para que empiece a reproducirse antes de descargarse completo; imagen y sonido no cambiaron.

## Incluidos

| Archivo publicado | Origen | Notas |
|---|---|---|
| `documentos/2026-07-13_primera-reunion-resumen.pdf` | Primera_Reunion_Resumen.pdf | Sin cambios |
| `documentos/2026-08-30_brief-arco-version-agosto.pdf` | 1_ Brief de Proyecto 2026 - ARCO.pdf | Versión histórica, sin cambios. Contiene la grafía «Yuri Blardo» |
| `documentos/2026-09-02_resumen-encuesta-preliminar.pdf` | ARCO_Resumen_Encuesta.pdf | Base de 94 respuestas. Sin datos personales |
| `documentos/2026-09-02_proceso-simplificado-mvp.pdf` | ARCO_Proceso_Simplificado.pdf | Sin cambios |
| `documentos/2026-10-12_brief-arco-version-revisada.pdf` | Brief revisado del 12/10/2026 (.docx exportado a PDF) | Versión de trabajo, no confirmada como definitiva |
| `documentos/2026-11-03_presentacion-demo-day.pdf` | ARCO_DemoDay_2026_FINAL.pdf | Se quitó «FINAL» del nombre del archivo; el contenido no cambió |
| `documentos/2026-11-03_guion-demo-mvp.txt` | Guion y subtítulos de la demo | Texto plano |
| `documentos/tarjetas-equipo-imprenta.pdf` | ARCO_Tarjetas_Equipo_x7_IMPRENTA.pdf | El QR enlaza a una página en claude.ai (ver pendientes) |
| `documentos/encuesta-sintesis-agregada.csv` | Generado desde la planilla de respuestas | Solo conteos y porcentajes, sin contactos ni respuestas abiertas |
| `assets/video/arco-mvp-demo.vtt` | Subtítulos de la demo | Pista opcional; los subtítulos ya están en la imagen |
| `assets/img/equipo/*.jpg` (7) | Lámina «Nuestro equipo» de la presentación Demo Day | Retratos extraídos tal como figuran en la presentación |
| `assets/img/proceso/*.jpg` (11) | Anexos del brief (agosto) y fotos enviadas | Fotos del proceso con fecha cuando el anexo la indica |
| `assets/img/piezas/*.jpg` (3) | Fotos de adhesivos y folleto; tarjetas renderizadas desde el PDF | Piezas impresas |
| `assets/img/conceptual/imagenes-conceptuales-hogar.jpg` | Collage enviado | Identificado como imagen conceptual |
| `assets/img/capturas/*.jpg` (4) | Cuadros de la demo del MVP | Capturas de la demostración conceptual |
| `assets/img/logo-arco.png`, `favicon.png` | Logo enviado | Fondo blanco convertido en transparente |
| `assets/fonts/*.woff2` | Montserrat (SIL OFL) | Tipografía local, con su licencia |

## Excluidos

| Archivo | Motivo |
|---|---|
| `ARCO - Respuestas_encuesta.xlsx` | La pregunta 14 contiene teléfonos y correos de participantes. Se publica solo la síntesis agregada |
| `2_ Anexos de Proyecto 2026 - ARCO.pdf` | Incluye una fotografía (12/08/2026) donde aparece una persona menor de edad. Se usaron otras fotos de los anexos |
| `RC_Devoluciones_informe_breve.pdf` | Está rotulado como «Documento interno del equipo» y reproduce citas textuales de compañeros. Su síntesis está en Investigación. Publicarlo es una decisión del equipo |
| Versiones anteriores de la presentación (v1 a v3) y del brief (v1, v2) | Reemplazadas por la presentación del Demo Day y el brief revisado. Se evitan duplicados |
| Demo del MVP en HTML | El video MP4 cumple la misma función en el portal |
| Fotografía «Área de reciclables en edificio» (12/08/2026) | Aparece una persona menor de edad |

## Pendientes

| Tema | Qué falta |
|---|---|
| Juego educativo | No se recibió el archivo ni el enlace. La galería tiene un espacio reservado, sin botones |
| Brief definitivo | No se recibió una versión marcada como definitiva. Se publican la versión de agosto y la revisada de octubre |
| Transcripción del video del Centenario | Es automática; la primera frase no se pudo confirmar |
| QR de las tarjetas y del folleto | El de las tarjetas apunta a `claude.ai/artifact/...`; no se verificó su contenido ni su permanencia. El del folleto no se pudo leer desde la foto |
| Diferencias entre documentos | Duración (2+6 frente a 2+8 semanas), presupuesto ($ 122.000 UYU frente a USD 890 – 1330), meta (+20 %), plantas mencionadas, envío automático o manual, cifras de contexto sin fuente completa. Detalle en `propuesta.html` |
| Encuesta | Codificar las respuestas abiertas (preguntas 8.1 y 12). Revisar la diferencia entre las preguntas 4 y 5 |
| Nombre de una integrante | «Andrea Catalá» en la lista frente a «María Andrea Catalá Pezzatti» en presentación y tarjetas. El portal usa la forma completa |
| Licencia | El equipo no decidió una licencia de reutilización |
| Fecha del Demo Day | No figura en los documentos; se usa la fecha del archivo de la presentación (03/11/2026) |
