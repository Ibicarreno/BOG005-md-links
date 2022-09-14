const {listMdLinks} = require('./utils/list-md-links')
const {readFilesPromises, getLinksPromises, getStatusPromises} = require('./utils/mdLinks')


// Funcion mdLinks
const mdLinks = (filePath, options) => {
  const arrayMdFiles = listMdLinks(filePath)

  return new Promise((resolve, reject) => {
    if (options.validate == true) {
      getStatusPromises(getLinksPromises(readFilesPromises(arrayMdFiles)))
                .then(res => {
                  resolve(res)
                })
    } else{
      getLinksPromises(readFilesPromises(arrayMdFiles))
            .then(res => {
                    resolve(res.flat());
                })
    }
  })
}

module.exports = {
  mdLinks
}
