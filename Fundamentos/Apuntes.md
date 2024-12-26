# `Manipulacion de archivos`

En esta seccion esta una introduccion de Node atraves de la manipalacion de archivos dentro del programa utilizando CommonJs y Modules.

### `CommonJS`

```js
function saludar(nombre) {
  return `Hola, ${nombre}`;
}
module.exports = saludar;

const saludar = require("./utils");
console.log(saludar("Mundo"));
```

### `Modules`

```js
export function saludar(nombre) {
  return `Hola, ${nombre}`;
}

import { saludar } from "./utils.mjs";
console.log(saludar("Mundo"));
```

## `FileSystem`

Estas son las funciones mas comunes al utlizar fd module.

```js
console.log(
  "Tamaño del archivo:",
  stats.size,
  "bytes = ",
  stats.size / 1024,
  "Mb"
);
console.log("Es un archivo:", stats.isFile());
console.log("Es un directorio:", stats.isDirectory());
console.log("Es un dispositivo:", stats.isBlockDevice());
console.log("Es un enlace simbolico:", stats.isSymbolicLink());
``;
```

### `FilePaths`

### `ReadFile`

Realiza una lectura completa del contenido del archivo en memoria para retornar la informacion. Es decir que el tiempo de respuesta y el consumo de memoria dependera del archivo con el cual estes trabajando.