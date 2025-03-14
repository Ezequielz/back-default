# Backend Base con Node.js

Este es un backend base desarrollado en Node.js con una arquitectura modular y escalable. Está diseñado para soportar múltiples bases de datos (MongoDB y PostgreSQL) y seguir buenas prácticas de desarrollo.

## 📁 Estructura del Proyecto

```
src/
├── config/                # Configuración de la aplicación
├── data/                  # Conexión a bases de datos
│   ├── mongo/             # Configuración de MongoDB
│   ├── postgres/          # Configuración de PostgreSQL
├── domain/                # Capa de dominio
│   ├── datasources/       # Interfaces de acceso a datos
│   ├── dtos/              # Data Transfer Objects (DTOs)
│   ├── entities/          # Definición de entidades
│   ├── errors/            # Manejo de errores
│   ├── repositories/      # Interfaces de repositorios
│   └── services/          # Casos de uso y lógica de negocio
├── infrastructure/        # Implementaciones de la infraestructura
│   ├── datasources/       # Implementaciones de acceso a datos
│   └── repositories/      # Implementaciones de repositorios
└── presentation/          # Capa de presentación
    ├── controllers/       # Controladores para manejar las solicitudes
    ├── routes/            # Definición de rutas
    └── server/            # Configuración del servidor
```

## 🚀 Instalación y Configuración

### 1️⃣ Clonar el repositorio
```sh
git clone https://github.com/Ezequielz/back-default.git
cd back-default
```

### 2️⃣ Instalar dependencias
```sh
npm install
```

### 3️⃣ Configurar variables de entorno
Reemplazar `.env.template` por `.env` en la raíz del proyecto y añadir las variables necesarias:



### 4️⃣ Ejecutar el servidor
#### Modo desarrollo
```sh
npm run dev
```

#### Modo producción
```sh
npm start
```

## 🛠 Tecnologías Utilizadas
- **Node.js** - Entorno de ejecución
- **Express.js** - Framework para manejar rutas y controladores
- **MongoDB y Mongoose** - Base de datos NoSQL y ODM
- **PostgreSQL y Prisma** - Base de datos SQL y ORM
- **TypeScript (Opcional)** - Tipado estático
- **JWT (JSON Web Tokens)** - Autenticación segura

## 📌 Principios de Arquitectura
✅ **Separación de responsabilidades** - Cada capa tiene su propósito específico.
✅ **Escalabilidad** - Fácil de agregar nuevas funcionalidades.
✅ **Facilidad para cambiar la base de datos** - Implementaciones intercambiables.

## 📬 Endpoints Básicos
| Método  | Ruta            | Descripción         |
|---------|---------------|---------------------|
| GET     | `/users`      | Obtener todos los usuarios |
| GET     | `/users/:id`  | Obtener un usuario por ID |
| POST    | `/users`      | Crear un nuevo usuario |
| PUT     | `/users/:id`  | Actualizar un usuario |
| DELETE  | `/users/:id`  | Eliminar un usuario |

## 🏗 Futuras Mejoras
- [ ] Documentación con Swagger.
- [ ] Microservicios.
- [ ] Kubernetes.

## 📄 Licencia
Este proyecto está bajo la licencia MIT. ¡Úsalo y modifícalo libremente! 🎉
