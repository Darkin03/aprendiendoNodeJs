import fs from 'node:fs/promises'
import path from 'node:path'
import pc from 'picocolors'

const carpeta = process.argv[2] ?? '.'

async function leerArchivo (archivo) {
  let caracteristicas
  try {
    caracteristicas = await fs.stat(archivo)
  } catch (error) {
    console.log(
      pc.red(`No fue posible leer el archivo ${archivo}: ${error.message}`)
    )
    process.exit(1)
  }
  const esDirectorio = caracteristicas.isDirectory() ? 'D' : 'F'
  const tamaño = caracteristicas.size
  const fechaModificacion = caracteristicas.mtime.toLocaleString()
  return (`${esDirectorio} ${archivo.padEnd(20)} ${tamaño.toString().padStart(10)} ${fechaModificacion}`)
}

async function leerCarpeta (carpeta) {
  try {
    const archivos = await fs.readdir(carpeta)
    const informacionDeArchivos = archivos.map((archivo) => leerArchivo(archivo))
    const resultado = await Promise.all(informacionDeArchivos)
    console.log(
      pc.green(`Tipo ${'Nombre'.padEnd(20)} ${'Tamaño'.padStart(10)} Fecha de modificación`)
    )
    resultado.forEach((info) => {
      console.log(path.join(carpeta, info))
    })
  } catch (error) {
    console.log(
      pc.red(`No fue posible leer la carpeta ${carpeta}: ${error.message}`)
    )
  }
}

leerCarpeta(carpeta)
