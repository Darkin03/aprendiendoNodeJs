import fs, { readFile} from 'node:fs'
import fsp from 'node:fs/promises';

//funcion sin promesas
export function verificarArchivo(archivo){
    fs.access(archivo, fs.constants.F_OK, (err)=>{
        if (err) {
            console.log('El archivo no existe');
        } else {
            readFile(archivo, 'utf-8', (err, data)=>{
                if (err) {
                    console.log('Error al leer el archivo');
                } else {
                    console.log('Contenido del archivo: ',data);
                    fs.stat(archivo,(err,stats)=>{
                        if (err) {
                            console.log('las caracteristicas del archivo');
                        } else {
                            console.log('Tamaño del archivo:', stats.size,'bytes = ',stats.size/1024,'Mb');
                            console.log('Es un archivo:',stats.isFile());
                            console.log('Es un directorio:',stats.isDirectory());
                            console.log('Es un dispositivo:',stats.isBlockDevice());
                            console.log('Es un enlace simbolico:',stats.isSymbolicLink());
                        }
                    })
                }
            })  
        }
    })
}

//funcion con promesas

export async function verificarArchivoP(archivo){
    try {
        const stats = await fsp.stat(archivo);
        console.log('Tamaño del archivo:', stats.size,'bytes = ',stats.size/1024,'Mb');
        console.log('Es un archivo:',stats.isFile());
        console.log('Es un directorio:',stats.isDirectory());
        console.log('Es un dispositivo:',stats.isBlockDevice());
        console.log('Es un enlace simbolico:',stats.isSymbolicLink());
        const data = await fsp.readFile(archivo, 'utf-8');
        console.log('Contenido del archivo: ',data);
    } catch (error) {
        console.log('Error al leer el archivo');
    }
}