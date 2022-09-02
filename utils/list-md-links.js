const fs = require('fs');
const path = require('path');

module.exports = listMdLinks = (filePath) => {
//const listMdLinks = (filePath) => {
  let finalPath;
  //let filesArray = ''
  let filesArray = []
  // Vamos a verificar si el path es relativo o absoluto
  if (path.isAbsolute(filePath)){
    // Si es absoluto
    finalPath = filePath;
  }
  else{
    // Si es relativo
    finalPath = path.resolve(filePath) ;
  }

  // Vamos a verificar el si el path existe
  if(fs.existsSync(finalPath)){
    // Vamos a verificar si es un archivo o un directorio
    // Si es un archivo = file
    if(fs.statSync(finalPath).isFile()){
      // Verificar que sea un archivo .md
      if(path.extname(finalPath) === '.md'){
          filesArray.push({'path' : finalPath})
          // mdLinks(arrayMdFiles)
          //   .then(content => {Promise.all(content)
          //   .then(x => {console.log(x)})
          //   })

          //filesArray.push(finalPath)
          //filesArray = finalPath
      }
      else{
        throw error;
      }
    }
    // Si es un directorio
    else if (fs.statSync(finalPath).isDirectory()){
      //listMdLinks(finalPath)
      // Primero buscamos los archivos
      fs.readdirSync(finalPath).map(file => {
        // Condicional para seleccionar solo los .md
        if(path.extname(file) == '.md'){
          filesArray.push({'path' : finalPath + '/' + file})
          //filesArray.push(finalPath + '/' + file)
          //filesArray = finalPath + '/' + file

        }
      })
    }
    else {
      throw error;
    }

}
else {
  throw error;
}
//console.log(filesArray)
return filesArray

}
//module.exports = listMdLinks;
