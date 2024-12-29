import path from 'node:path'

const pathDeUnArchivo = (archivo) => {
  console.log(path.dirname(archivo))
  console.log(path.basename(archivo))
  console.log(path.extname(archivo))
  console.log(archivo, path.extname(archivo))
  const prueba = 'pathPrueba'
  console.log(path.join('/', prueba, '/', archivo))
  console.log(path.resolve(archivo))
  console.log(path.resolve(archivo, prueba))
  console.log(path.resolve('/etc', archivo, prueba))
}

pathDeUnArchivo('archivo.txt')
