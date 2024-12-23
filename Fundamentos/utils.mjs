import fs from 'node:fs'

export function verificarArchivo(archivo){
    fs.access(archivo, fs.constants.F_OK, (err)=>{
        if (err) {
            console.log('El archivo no existe');
        } else {
            console.log('El archivo existe');
            fs.readFile(archivo, 'utf8', (err, data) => {
                if (err) throw err;
                console.log(data);
            });
        }
    })
}