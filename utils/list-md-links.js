const fs = require('fs');
const path = require('path');

const absolutPath = (filePath) => {
  let absolutPath;
  if (path.isAbsolute(filePath)){
    absolutPath = filePath;
  }
  else{
    absolutPath = path.resolve(filePath) ;
  }
  return absolutPath
}

const listMdLinks = (filePath) => {

  let finalPath = absolutPath(filePath)
  let filesArray = []
  if(fs.existsSync(finalPath)){
    if(fs.statSync(finalPath).isFile() && path.extname(finalPath) === '.md'){
          filesArray.push({'path' : finalPath})
    }
    // Si es un directorio
    else if (fs.statSync(finalPath).isFile() && path.extname(finalPath) !== '.md'){
      console.log('Error! su archivo no es .md, vuelve a intentarlo 😄')
    }
    else {
      fs.readdirSync(finalPath).forEach(file => {
        let newPath = path.join(finalPath, file)
        if((fs.statSync(newPath).isDirectory())){
          filesArray = filesArray.concat(listMdLinks(newPath))
        } else {
          if(path.extname(newPath) === '.md'){
            filesArray.push({'path' : newPath})
          }
        }
      })
    }
  }

  return filesArray
}

module.exports = {
  listMdLinks,
  absolutPath
}

