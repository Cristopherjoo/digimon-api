# Digimon API Application

Bienvenido a la aplicación **Digimon API**. Este proyecto te permite interactuar con la API de Digimon y mostrar los datos de tres maneras: en una tabla, en una grilla (tarjetas), y utilizando un selector para elegir el contenido mostrado. Además, incluye una función para extraer los datos de la API y almacenarlos en una base de datos local.

## Estructura del Proyecto

El proyecto está dividido en dos carpetas principales:

1. **api-digimon-M2:** Contiene el código para realizar consultas a la API pública de Digimon: [https://digimon-api.vercel.app/api/digimon](https://digimon-api.vercel.app/api/digimon) y mostrar los resultados.
2. **extraer-digimon-BD:** Contiene el código para extraer los datos de la API y guardarlos en una base de datos local PostgreSQL.

## Características

### 1. **Vista en Tabla**
   - Muestra los Digimon en una tabla con datos como el nombre y el nivel.

### 2. **Vista en Grilla (Tarjetas)**
   - Presenta los Digimon en formato de tarjetas con imagen y detalles como el nombre y nivel, dispuestos en una grilla.

### 3. **Selector de Vista**
   - Permite al usuario elegir el contenido mostrado mediante un selector.

### 4. **Extracción y Almacenamiento en Base de Datos**
   - Extrae los datos de la API pública [https://digimon-api.vercel.app/api/digimon](https://digimon-api.vercel.app/api/digimon) y los guarda en una base de datos PostgreSQL para su gestión local.

## Tecnologías Utilizadas

- **Frontend:** HTML5, JavaScript, Bootstrap
- **Backend:** Node.js
- **Base de Datos:** PostgreSQL
- **Bibliotecas:** 
  - `node-fetch` para realizar solicitudes HTTP a la API.
  - `pg` para interactuar con la base de datos PostgreSQL.

## Diseño

Este proyecto aún está en desarrollo y puede que algunos detalles estéticos no estén completamente pulidos. Sin embargo, su funcionalidad está completamente implementada y opera correctamente. Lo estoy mejorando conforme avanzo en mi aprendizaje.


