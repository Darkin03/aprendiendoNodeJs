import fs from 'node:fs'
// import path from 'node:path'
// verificar si existe una carpeta
const nombreDeCarpeta = 'CarpetaDePrueba'

try {
  if (!fs.existsSync(nombreDeCarpeta)) {
    fs.mkdirSync(nombreDeCarpeta)
    console.log('Carpeta creada con éxito')
  }
} catch (error) {
  console.error('No fue posible verificar la carpeta:', error.message)
}

// leer el contenido de una carpeta

// const carpeta = 'CarpetaDePrueba'
// fs.readdir(carpeta, (error, archivos) => {
//   if (error) {
//     console.log('No fue posible leer la carpeta: ', error)
//   }
//   console.log('Archivos de la carpeta:', archivos)
//   archivos.forEach((archivo) => {
//     console.log(path.join(carpeta, archivo))
//   })
// })

// Renombrar una
// fs.rename('CarpetaDePrueba', 'CarpetaDePruebaRenombrada', (error) => {
//   if (error) {
//     console.error('No fue posible renombrar la carpeta:', error)
//   }
//   console.log('Carpeta renombrada con éxito')
// })

// Elimanr una carpeta

// fs.rm('CarpetaDePruebaRenombrada', { recursive: true }, (error) => {
//   if (error) {
//     console.error('No fue posible eliminar la carpeta:', error)
//   }
//   console.log('Carpeta eliminada con éxito')
// })
