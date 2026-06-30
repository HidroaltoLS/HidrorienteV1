# 📝 Guía: Cómo Agregar Nuevas Noticias

¡Hola! A continuación te muestro cómo agregar nuevas noticias al sitio web de Hidroriente de forma fácil.

## 📍 Ubicación del archivo

El archivo que contiene todas las noticias se encuentra en:
```
data/noticias.json
```

El sitio también incluye este respaldo para que las noticias carguen al abrir los HTML directamente en el navegador:
```
data/noticias.js
```

Si trabajas sin servidor local, agrega la misma noticia en ambos archivos.

## 📋 Estructura de una noticia

Cada noticia debe seguir este formato exacto:

```json
{
  "id": "XX",
  "titulo": "Título de la noticia",
  "categoria": "operaciones",
  "fecha": "Mes Año",
  "descripcion": "Descripción corta que aparece en la tarjeta",
  "contenido": "<p>Contenido detallado de la noticia con párrafos HTML</p><p>Otro párrafo aquí</p>",
  "icono": "bi-tools",
  "imagen": "assets/images/noticia-1.jpg",
  "video": "",
  "poster": "",
  "mediaLeyenda": "Imagen destacada de la actividad",
  "extraImagen": "",
  "extraVideo": ""
}
```

## 🔍 Detalles de cada campo

- **id**: Número único de 2 dígitos (01, 02, 03, etc.). Incrementa el número más alto existente.
- **titulo**: El título principal de la noticia (máximo 80 caracteres recomendado)
- **categoria**: Una de estas opciones:
  - `operaciones` - Para noticias de construcción y operación
  - `social` - Para programas sociales y comunitarios
  - `ambiental` - Para iniciativas ambientales
  - `seguridad` - Para seguridad laboral
  - `institucional` - Para anuncios institucionales
- **fecha**: En formato "Mes Año" (ej: "Mayo 2025")
- **descripcion**: Resumen de 1-2 oraciones que aparece en la tarjeta
- **contenido**: HTML con párrafos `<p>` que se muestra en la página de detalle
- **icono**: Clase de Bootstrap Icons para el respaldo visual (ej: `bi-tools`, `bi-people`, `bi-tree`)
- **imagen**: Opcional. Ruta de una imagen para el detalle de la noticia, por ejemplo `assets/images/noticia-1.jpg`
- **video**: Opcional. URL de YouTube o ruta de video local, por ejemplo `assets/videos/noticia-1.mp4`
- **poster**: Opcional. Imagen de portada para videos locales
- **mediaLeyenda**: Opcional. Texto breve que aparece debajo de la imagen o video
- **extraImagen** / **extraVideo**: Opcional. Segundo espacio multimedia que aparece debajo del texto editorial

## 🎨 Iconos recomendados por categoría

| Categoría | Iconos sugeridos |
|-----------|-----------------|
| operaciones | `bi-tools`, `bi-gear`, `bi-lightning-charge`, `bi-building` |
| social | `bi-people`, `bi-heart-pulse`, `bi-journal-text`, `bi-flower1` |
| ambiental | `bi-tree`, `bi-droplet`, `bi-recycle`, `bi-binoculars` |
| seguridad | `bi-shield-check`, `bi-exclamation-triangle`, `bi-person-workspace` |
| institucional | `bi-building`, `bi-clipboard-data`, `bi-bullseye` |

## 📝 Ejemplo completo

```json
{
  "id": "10",
  "titulo": "Nueva iniciativa de capacitación técnica para la comunidad",
  "categoria": "social",
  "fecha": "Junio 2025",
  "descripcion": "Hidroriente lanza programa de capacitación en energías renovables para jóvenes de la región.",
  "contenido": "<p>Como parte del compromiso con el desarrollo comunitario, Hidroriente S.A. anuncia el lanzamiento de un nuevo programa de capacitación técnica enfocado en energías renovables.</p><p>El programa está dirigido a jóvenes de 18 a 30 años de las comunidades del área de influencia del proyecto y ofrece formación práctica en operación de centrales hidroeléctricas.</p><p>Las clases comenzarán en julio de 2025 con una duración de 3 meses. Los interesados pueden inscribirse contactando a info@hidroriente.com.ec</p>",
  "icono": "bi-journal-text",
  "imagen": "assets/images/noticia-1.jpg",
  "video": "",
  "poster": "",
  "mediaLeyenda": "Jornada de capacitación comunitaria",
  "extraImagen": "",
  "extraVideo": ""
}
```

## ✅ Pasos para agregar una noticia

1. **Abre el archivo** `data/noticias.json` en un editor de texto
2. **Busca el final del array** (antes del último `]`)
3. **Agrega una coma** después de la última noticia
4. **Copia y pega** la estructura de una noticia existente
5. **Actualiza los campos** con tu nueva información
6. **Verifica el JSON** (puedes usar https://jsonlint.com para validar)
7. **Guarda el archivo**

## ⚠️ Puntos importantes

- ✅ El JSON debe ser válido (verifica con jsonlint.com si tienes dudas)
- ✅ Los `id` deben ser números secuenciales de 2 dígitos
- ✅ Usa comillas dobles `"` no simples `'`
- ✅ Asegúrate de agregar una coma después de cada noticia excepto la última
- ✅ En el contenido, usa etiquetas `<p>` para párrafos
- ✅ Si no agregas imagen o video, el detalle usará una imagen referencial por categoría
- ✅ Si trabajas sin servidor local, repite los mismos cambios en `data/noticias.js`

## 🌐 Cómo se verá

Una vez que agregues la noticia:
- Aparecerá automáticamente en `pages/noticias.html`
- Será filtrable por categoría
- Tendrá su propia página de detalle accesible desde el link "Leer más"
- Se mostrará junto a noticias relacionadas de la misma categoría

## 💡 Consejos

- Las noticias se ordenan como aparecen en el JSON (la última es la primera)
- Puedes reorganizar las noticias moviendo los objetos en el array
- Para eliminar una noticia, simplemente elimina el objeto completo (y la coma anterior si la hay)
- El sitio se actualiza automáticamente sin necesidad de reiniciar nada

## ¿Necesitas ayuda?

Si encuentras errores en el JSON:
1. Copia el contenido del archivo
2. Pégalo en https://jsonlint.com
3. Verifica los errores que aparezcan
4. Corrígelos en el archivo original

¡Listo! Tu noticia estará visible en el sitio.
