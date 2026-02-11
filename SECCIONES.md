# Secciones de la Landing Page

## Orden de Secciones

1. **Hero** - Sección principal con fondo oscuro y código animado
2. **Features** - Características con iconos SVG
3. **Clientes** - Clientes aliados (NUEVA ✨)
4. **Contact** - Formulario de contacto
5. **Footer** - Pie de página con redes sociales

## Navegación

### Header
- Inicio → #hero
- Características → #features
- **Clientes → #clients** (NUEVO)
- Contacto → #contact

### Footer
- Características → #features
- **Clientes → #clients** (NUEVO)
- Contacto → #contact

## Sección Clientes

### Ubicación
La sección de Clientes se encuentra entre Features y Contact.

### Contenido
- **Logo real**: Academia Linaje (logo_academia.png)
- **5 placeholders**: Cards con diseño de "Próximamente"
- **CTA**: Botón "Contáctanos" para nuevos clientes

### Archivos
- Componente: `src/components/Clients.jsx`
- Estilos: `src/components/Clients.css`
- Logo: `public/clients/logo_academia.png`

### Cómo agregar más logos

1. Copia los logos a `public/clients/`
2. Actualiza el array `clients` en `Clients.jsx`:

```javascript
const clients = [
  {
    name: 'Academia',
    logo: '/clients/logo_academia.png',
    category: 'Educación'
  },
  {
    name: 'Nuevo Cliente',
    logo: '/clients/nuevo_logo.png',
    category: 'Tecnología'
  }
]
```

3. Elimina o reduce los placeholders según necesites

## Servidor de Desarrollo

```bash
npm run dev
```

La aplicación estará en: **http://localhost:5174**

Para ver la sección de clientes:
1. Abre http://localhost:5174
2. Haz scroll o click en "Clientes" en el menú
3. La sección aparece después de "Características"
