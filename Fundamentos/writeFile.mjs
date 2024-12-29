import fs from 'node:fs'

const contenido = 'Este es un contenido adicional'

fs.writeFile('archivo.txt', contenido, { flag: 'a+' }, err => {
  if (err) {
    console.error('Error al escribir el archivo:', err)
  }
  console.log('Archivo escrito correctamente')
})
