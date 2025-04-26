# Proyecto: Panel Administrativo con React Router

## Descripción del Proyecto

El presente proyecto fue desarrollado utilizando **React JS** con el objetivo de aprender y practicar el manejo de rutas a través de la herramienta **React Router**. Para ello, se diseñó un **panel administrativo** que incluye diversas vistas: **Usuarios**, **Clientes**, **Proveedores** y **Cierre de Sesión**. Cada sección representa una ruta específica dentro de la aplicación.

- La **vista de Usuarios** contiene una tabla que presenta las principales características de los usuarios registrados, como su nombre, correo electrónico y rol.
- La **vista de Clientes** utiliza tarjetas visuales para mostrar información relevante acerca de los clientes y sus compras en la plataforma.
- La **vista de Proveedores** también implementa una tabla que, aunque sencilla, permite listar y gestionar los proveedores asociados.
- La **vista de Cierre de Sesión** permite terminar la sesión activa.

El proyecto tiene como propósito fundamental la familiarización con el sistema de rutas anidadas y el manejo de navegación entre diferentes componentes mediante **React Router**, sin enfocarse en funcionalidades avanzadas de backend o persistencia de datos.

## Pasos Seguidos para Crear el Proyecto

1. Creación de la aplicación base utilizando **Vite** con soporte para **React JS**.
2. Implementación inicial del componente raíz `App.jsx`, encargado de servir como layout principal del sistema.
3. Configuración del sistema de rutas utilizando **React Router**, asegurando que el componente `App` sirviera de envoltorio para las rutas hijas.
4. Creación de los componentes individuales: **Usuarios**, **Clientes**, **Proveedores** y **Cierre de Sesión**, cada uno configurado como una ruta anidada dentro de `App`.
5. Diseño y maquetación de las vistas:
   - **Usuarios**: creación de una tabla dinámica mostrando nombre, correo y rol.
   - **Clientes**: implementación de tarjetas individuales para cada cliente.
   - **Proveedores**: desarrollo de una tabla simplificada para proveedores.
   - **Cierre de Sesión**: creación de una pantalla de confirmación de logout.
6. Uso de **hooks** de React como `useState` y `useContext` para manejar los estados y compartir datos entre componentes.
7. Realización de ajustes estéticos menores para mejorar la usabilidad y cohesión visual de la aplicación.

## Capturas de Pantalla del Resultado Final

### Vista del Panel Principal (Clientes)
![Panel Principal - Clientes](https://github.com/user-attachments/assets/7711ef66-35e9-4f67-9f3d-b5fbf3d28b71)

### Vista de Proveedores
![Proveedores](https://github.com/user-attachments/assets/8ea689dd-c74e-4af0-bbfc-27fd80f03218)

### Vista de Usuarios
![Usuarios](https://github.com/user-attachments/assets/6bf4389d-3754-4e74-964a-ecddd472443b)

### Vista de Cierre de Sesión
![Cierre de Sesión](https://github.com/user-attachments/assets/85e7114d-3068-4d7f-ac69-a4c5bed3e485)

### Autor
Andrés Felipe Muñoz Aguilar - 2210087 <br/>
**Grupo:** E1
