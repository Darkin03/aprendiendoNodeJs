import fsp from 'node:fs/promises'
import path from 'node:path'
export async function verificarArchivoP (archivo) {
  try {
    const stats = await fsp.stat(archivo)
    console.log('Directorio del archivo:', path.dirname(archivo))
    console.log('Nombre del archivo:', path.basename(archivo))
    console.log('Extensión del archivo:', path.extname(archivo))
    console.log('Tamaño del archivo:', stats.size, 'bytes = ', stats.size / 1024, 'Mb')
    console.log('Es un archivo:', stats.isFile())
    console.log('Es un directorio:', stats.isDirectory())
    console.log('Es un dispositivo:', stats.isBlockDevice())
    console.log('Es un enlace simbolico:', stats.isSymbolicLink())
    const data = await fsp.readFile(archivo, 'utf-8')
    console.log('Contenido del archivo: ', data)
  } catch (error) {
    console.log('Error al leer el archivo:', error.message)
  }
}
