import fs from 'node:fs'

fs.readFile('archivo.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err)
  }
  console.log('Contenido del archivo:', data)
})
