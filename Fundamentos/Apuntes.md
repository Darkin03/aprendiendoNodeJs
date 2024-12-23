
## Descripción de Archivos

### `CommonJS`
```js
function saludar(nombre) {
    return `Hola, ${nombre}`;
}
module.exports = saludar;

const saludar = require('./utils');
console.log(saludar('Mundo'));
```

### `Modules`
```js
export function saludar(nombre) {
    return `Hola, ${nombre}`;
}

import { saludar } from './utils.mjs';
console.log(saludar('Mundo'));
```
