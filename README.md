# Challenge Front End

Este proyecto es la respuesta al challenge para Front End.

### Tecnologías 📋

- [Github](https://github.com) - Manejador de versiones
- [NodeJs](https://nodejs.org/es/) - Entorno de desarrollo del lado del servidor, basado en **Javascript**
- [React](https://reactjs.org/) - Framework empleado en el front, basado en **javascript**
- [Jest](https://jestjs.io/) - Librería uasada para hacer los test unitarios
- [React testing library](https://testing-library.com/) - Librería complementaria para los test unitarios

### Pre-requisitos 📋

_Para poder correr este proyecto deberás seguir estos pasos_

- Instalar [NodeJs](https://nodejs.org/es/). Lo necesitarás para poder desplegar el proyecto en local.
- [Clonar](https://github.com/Yotfil/challenge.git) el respositorio.
  - Crea una carpeta en tu equipo donde clonarás el proyecto
  - Abre tu términal, navega hasta la ruta de la carpeta y una vez en ella pega la línea de abajo en tu términal

```
 git clone https://github.com/Yotfil/challenge.git
```

## Instalación 🔧

Una vez clonado encontrarás dos carpetas, una llamada front donde se encuentra la vista del proyecto y otra llamada back donde se encuentran los endpoints

### Back

- **Navega en tu términal hasta llegar a la carpeta back y una vez en ella pega la línea de abajo.**

```
 npm install
```

Este comando se encargará de instalar todos los modulos necesarios para poder correr el proyecto en local.

- **Una vez instalado usa el siguiente comando para correr el proyecto**

```
 npm run start
```

o corre el siguiente comando si quieres correr nodemon

```
 npm run dev
```

- _si quieres ver lo que devuelve la API ve a tu navegador e ingresa a la siguiente ruta:_

  - **http://localhost:4000/api/items?search=query**

- _Si quieres ver algún item en específico_

  - **http://localhost:4000/api/items/:id**

- _Si quieres ver su descripción_

  - **http://localhost:8000/api/items/:id/description**

### Front

- **Navega en tu términal hasta llegar a la carpeta front y una vez en ella pega la línea de abajo.**

```
 npm install
```

Este comando se encargará de instalar todos los modulos necesarios para poder correr el proyecto en local.

- **Una vez instalado, usa el siguiente comando para correr el proyecto**

```
 yarn dev
```

- _El proyecto se abrirá en el siguiente link_

  - \*\*http://localhost:5173/

Ahora deberás poder ver el proyecto en tu navegador.

## Testing 🧪

Para poder correr los test, deberás ejecutar los siguientes comandos en las respectivas carpetas

### Front

```
 yarn dev
```

### Back

```
npm run dev
```

# Autor

- ### [Jefry Guevara](https://www.linkedin.com/in/jefry-guevara/)
