# Guía para publicar el portal desde una Mac

Tiempo estimado: 15 minutos. Se necesita una cuenta de GitHub.

> **Importante:** a GitHub se sube el **contenido descomprimido**, no el archivo ZIP.

## 1. Descomprimir

1. En **Finder**, hacé doble clic en el archivo ZIP. Se crea una carpeta llamada `arco-portal`.
2. Abrí esa carpeta. Adentro tienen que verse `index.html`, las carpetas `assets`, `documentos`, `src`, `tests` y `docs`, y los archivos `.md`.
3. Hay un archivo oculto, `.nojekyll`, que Finder no muestra. Para verlo, presioná **Cmd + Shift + .** (punto). Es recomendable subirlo, pero el sitio funciona igual sin él.

## 2. Crear el repositorio

1. Entrá a github.com e iniciá sesión.
2. Arriba a la derecha, hacé clic en **+** y luego en **New repository**.
3. Escribí un nombre simple, por ejemplo `arco-portal`.
4. Elegí **Public**. Con una cuenta gratuita, GitHub Pages solo publica repositorios públicos.
5. No marques ninguna opción de agregar archivos (README, .gitignore ni licencia). Hacé clic en **Create repository**.

## 3. Subir el contenido desde el navegador

1. En el repositorio vacío, hacé clic en el enlace **uploading an existing file**.
2. En Finder, dentro de la carpeta `arco-portal`, seleccioná todo con **Cmd + A** (incluido `.nojekyll`, si lo hiciste visible).
3. Arrastrá la selección a la ventana del navegador. Las carpetas se suben con su estructura.
4. Esperá a que termine la carga. Abajo, en **Commit changes**, escribí un mensaje como «Versión inicial del portal» y confirmá.

**Límites verificados:** la documentación de GitHub indica que los archivos subidos desde el navegador pueden pesar hasta **25 MiB cada uno**. El archivo más grande de este paquete es el video de la demo, de 6,3 MiB. El paquete tiene 65 archivos. Si la carga se interrumpe, subí primero las carpetas `assets` y `documentos` y después el resto, o usá GitHub Desktop.

## 4. Activar GitHub Pages

1. En el repositorio, entrá a **Settings** y luego a **Pages** (menú de la izquierda).
2. En **Build and deployment**, en **Source**, elegí **Deploy from a branch**.
3. En **Branch**, elegí **main** y la carpeta **/ (root)**. Hacé clic en **Save**.
4. Esperá uno o dos minutos y recargá la página. Arriba va a aparecer la dirección del sitio, con la forma `https://TU-USUARIO.github.io/arco-portal/`.

## 5. Comprobar

- Abrí la dirección y recorré el menú.
- Reproducí los dos videos: el de la portada y el de la página MVP.
- Abrí y descargá un documento desde la página Documentos.
- Probá el sitio en el celular.

## Alternativa: GitHub Desktop

Si la carga desde el navegador falla o preferís una herramienta de escritorio:

1. Descargá GitHub Desktop desde desktop.github.com e iniciá sesión.
2. Elegí **File → New Repository**. Indicá el nombre `arco-portal` y, como ubicación, la carpeta que contiene la carpeta descomprimida. Si GitHub Desktop avisa que la carpeta ya existe, usá **File → Add Local Repository** y seleccioná `arco-portal`.
3. En la columna izquierda aparecen todos los archivos. Escribí un mensaje en **Summary** y hacé clic en **Commit to main**.
4. Hacé clic en **Publish repository** y desmarcá **Keep this code private**.
5. Activá GitHub Pages como en el paso 4.

## Actualizaciones posteriores

- Desde el navegador: abrí el archivo en GitHub, hacé clic en el lápiz (**Edit**), modificá el texto y confirmá con **Commit changes**.
- Para reemplazar un archivo: entrá a la carpeta, usá **Add file → Upload files** y subí uno con el mismo nombre.
- Los cambios tardan uno o dos minutos en verse en el sitio.
