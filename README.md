# NorthCloud Landing Page

Landing page moderna y responsive desarrollada con React y Vite.

## Características

- **Diseño Moderno**: UI/UX limpio y profesional
- **Totalmente Responsive**: Optimizado para todos los dispositivos
- **Componentes Modulares**: Código organizado y reutilizable
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **Navegación Fluida**: Scroll suave entre secciones
- **Formulario de Contacto**: Interacción con el usuario

## Secciones Incluidas

1. **Header**: Navegación fija con menú responsive
2. **Hero**: Sección principal con CTA y animaciones
3. **Features**: Características del servicio
4. **Pricing**: Planes y precios con cards destacadas
5. **Contact**: Formulario de contacto e información
6. **Footer**: Links y redes sociales

## Tecnologías Utilizadas

- React 18
- Vite 6
- CSS3 (Flexbox & Grid)
- JavaScript ES6+

## Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Navegar al directorio
cd northcloud

# Instalar dependencias
npm install
```

## Uso

### Modo Desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### Preview de Producción

```bash
npm run preview
```

## Estructura del Proyecto

```
northcloud/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Features.jsx
│   │   ├── Features.css
│   │   ├── Pricing.jsx
│   │   ├── Pricing.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Personalización

### Colores

Puedes modificar los colores principales en `src/index.css`:

```css
:root {
  --primary-color: #0066ff;
  --primary-dark: #0052cc;
  --secondary-color: #6c757d;
  /* ... más variables */
}
```

### Contenido

Edita los archivos de componentes en `src/components/` para modificar:
- Textos y descripciones
- Precios y planes
- Características
- Información de contacto

## Próximos Pasos

- [ ] Integrar backend para el formulario de contacto
- [ ] Agregar animaciones más complejas con Framer Motion
- [ ] Implementar dark mode
- [ ] Agregar más secciones (testimonios, blog, etc.)
- [ ] Optimizar SEO

## Licencia

Este proyecto está bajo la Licencia MIT.
