
# Funny Library

Este proyecto es una aplicación web completa que incluye un **backend** (Node.js + Express + MongoDB) y un **frontend** (Angular). Permite la gestión de usuarios, libros y préstamos de una biblioteca.

## Descripción General

La aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre usuarios, libros y préstamos. El acceso a las funcionalidades depende del rol del usuario autenticado:

- **Administrador:** Puede administrar usuarios, libros y préstamos (CRUD completo).
- **Usuario estándar:** Solo puede prestar libros disponibles.

## Funcionalidades principales

- **Autenticación y autorización de usuarios** (con JWT).
- **CRUD de usuarios:** registro, edición, eliminación y listado.
- **CRUD de libros:** agregar, editar, eliminar y listar libros.
- **CRUD de préstamos:** registrar, editar, eliminar y listar préstamos de libros.
- **Interfaz web amigable** para la gestión y préstamo de libros.
- **Roles de usuario** para controlar el acceso a las funcionalidades administrativas.

## Estructura del proyecto

- `backend/`: Código fuente del backend (API REST, modelos, controladores, middlewares).
- `frontend/`: Código fuente del frontend (Angular).
- `funny-library.postman_collection.json`: Colección de Postman con ejemplos de peticiones a la API.

## Colección de Postman

Puedes encontrar ejemplos de uso de la API en el archivo [`funny-library.postman_collection.json`](funny-library.postman_collection.json).

## Instalación y ejecución

Consulta los README de [backend/README.md](backend/README.md) y [frontend/README.md](frontend/README.md) para instrucciones detalladas sobre cómo instalar dependencias y ejecutar cada parte del proyecto.

---

Desarrollado por Walther Zapata Casas  
© Walther Zapata Casas - 2025. Todos los derechos reservados.

