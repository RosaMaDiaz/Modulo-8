# Modulo-8 - Guía 4.

# Sistema de Gestión Dinámica de Anuncios

## Descripción General

Este proyecto consiste en una aplicación web desarrollada con HTML, CSS y JavaScript que permite administrar anuncios de manera dinámica mediante la manipulación del DOM (Document Object Model).

La aplicación ofrece funcionalidades para agregar, insertar, reemplazar y eliminar anuncios sin necesidad de recargar la página, demostrando el uso de eventos, creación dinámica de elementos y manipulación de nodos en JavaScript.

---

# Propósito del Ejercicio

El objetivo principal de este ejercicio es aplicar técnicas de manipulación dinámica del DOM utilizando JavaScript, permitiendo que el usuario gestione publicaciones o anuncios a través de una interfaz interactiva.

Además, se busca fortalecer los conocimientos relacionados con:

- Manejo de eventos.
- Formularios HTML.
- Creación y eliminación de elementos HTML dinámicamente.
- Inserción y reemplazo de nodos.
- Validación de datos introducidos por el usuario.
- Actualización automática de elementos de la interfaz.

---

# Archivos que Componen el Proyecto

## 1. index.html

Archivo principal de la aplicación.

Contiene:

- La estructura general de la página.
- El formulario para administrar anuncios.
- El área donde se muestran los anuncios creados dinámicamente.
- La referencia al archivo CSS.
- La referencia al archivo JavaScript.

---

## 2. anuncios.css

Archivo encargado del diseño visual de la aplicación.

Incluye:

- Estilos generales.
- Diseño responsivo.
- Configuración del formulario.
- Apariencia de los anuncios.
- Distribución de paneles mediante CSS Grid.
- Efectos visuales para botones y elementos interactivos.

---

## 3. anuncios.js

Archivo que contiene toda la lógica de programación.

Implementa:

- Inicialización de eventos.
- Validación de mensajes.
- Creación dinámica de anuncios.
- Inserción de anuncios antes de otros existentes.
- Reemplazo de anuncios seleccionados.
- Eliminación de anuncios.
- Actualización automática de la lista desplegable.
- Limpieza del formulario.

---

# Cómo Ejecutar la Aplicación

## Requisitos Previos

- Navegador web moderno:
  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge
  - Opera

## Pasos para Ejecutar

1. Descargar o clonar el proyecto.
2. Verificar la siguiente estructura de carpetas:

```text
Proyecto/
│
├── index.html
│
├── CSS/
│   └── anuncios.css
│
├── JS/
│   └── anuncios.js
│
├── img/
│   └── log.jpeg
│   └── banner.jpeg
│
└── README.md
```

3. Abrir el archivo `index.html` en cualquier navegador web.
4. Escribir un mensaje en el área de texto.
5. Seleccionar una acción:
   - Agregar
   - Insertar antes
   - Reemplazar
   - Eliminar

6. Presionar el botón **Ejecutar Acción**.
7. Observar cómo los cambios se realizan dinámicamente en la página.

---

# Conceptos de JavaScript Aplicados

## Eventos

Uso de eventos para detectar acciones del usuario:

```javascript
window.addEventListener("load", iniciar);
formulario.addEventListener("submit", procesarFormulario);
```

---

## Manipulación del DOM

Creación dinámica de elementos HTML:

```javascript
document.createElement("div");
```

Inserción de elementos:

```javascript
appendChild();
insertBefore();
```

Reemplazo de elementos:

```javascript
replaceChild();
```

Eliminación de elementos:

```javascript
remove();
```

---

## Selección de Elementos

Uso de diferentes métodos para acceder a elementos del DOM:

```javascript
getElementById();
querySelector();
querySelectorAll();
```

---

## Validación de Formularios

Verificación de que el usuario introduzca información válida antes de ejecutar acciones.

```javascript
if (mensaje === "")
```

---

## Uso de Funciones

Organización del código mediante funciones especializadas:

- iniciar()
- procesarFormulario()
- agregarAnuncio()
- insertarAnuncio()
- reemplazarAnuncio()
- eliminarAnuncio()
- crearAnuncio()
- actualizarLista()
- validarMensaje()
- limpiarFormulario()

---

## Variables Globales

Control de identificadores únicos mediante:

```javascript
let contadorAnuncios = 1;
```

---

## Estructuras Condicionales

Uso de:

```javascript
if
```

y

```javascript
switch
```

para determinar la acción seleccionada por el usuario.

---

# Requerimientos Técnicos del Ejercicio

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6)

---

## Funcionalidades Obligatorias

### Gestión de anuncios

La aplicación debe permitir:

- Agregar anuncios.
- Insertar anuncios antes de otro seleccionado.
- Reemplazar anuncios existentes.
- Eliminar anuncios.

---

### Validación

Debe impedir:

- Crear anuncios vacíos.
- Ejecutar acciones sin seleccionar una opción.
- Modificar anuncios sin seleccionar un elemento de referencia.

---

### Actualización Dinámica

La lista desplegable debe actualizarse automáticamente cada vez que:

- Se agrega un anuncio.
- Se inserta un anuncio.
- Se reemplaza un anuncio.
- Se elimina un anuncio.

---

### Interfaz Responsiva

La aplicación debe adaptarse a dispositivos móviles mediante Media Queries.

---

# Resultado Esperado

El usuario podrá administrar anuncios dinámicamente desde el navegador, observando en tiempo real cómo se crean, modifican y eliminan elementos HTML mediante JavaScript, sin necesidad de recargar la página.

---

# Autor

Es Proyecto académico desarrollado para practicar la manipulación dinámica del DOM utilizando JavaScript, HTML y CSS.
De la Guía 4. Gestión de Datos con JavaScript: Formularios, Tablas Dinámicas y CRUD Básico. Del profesor Ramón Morillo de INFOTEP, Taller Técnico en Programación de Páginas Web.
