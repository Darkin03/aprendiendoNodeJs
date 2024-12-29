import fs from 'node:fs/promises'
// Or const fs = require('fs').promises before v14.
let filehandle
try {
  filehandle = await fs.open('archivo.txt', 'a')
  console.log(filehandle.fd)
  console.log(await filehandle.readFile({ encoding: 'utf8' }))
} catch (err) {
  console.error(err)
} finally {
  if (filehandle) await filehandle.close()
}
