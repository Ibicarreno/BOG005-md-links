const filesArray = require('./utils/list-md-links')
const {readFilesPromises, getLinksPromises, getStatusPromises} = require('./utils/mdLinks')

// Funcion mdLinks
const mdLinks = (filePath, options) => {
  const arrayMdFiles = filesArray(filePath)

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





  // if(options.stats == true) {
  //statsLinks(getStatusPromises(getLinksPromises(readFilesPromises(arrayMdFiles))))
  // } else {
  //   statsAndValidateLinks(getStatusPromises(getLinksPromises(readFilesPromises(arrayMdFiles))))
  // }








//OJO CON ESTOOOO


// const arrayMdFiles = filesArray(filePath) // ['/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/README.md', '/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/ejemplo.md']

// const dataPromisesArray = readFilesPromises(arrayMdFiles)// [ [{path: /Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/README.md, data: data}], [{path: /Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/ejemplo.md, data: data}]]
// // [ [{file: '/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/README.md', href: 'https://es.wikipedia.org/wiki/Markdown', text: 'Markdown'}], [{file: '/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/ejemplo.md', href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays', text: 'Arreglos'}] ]

// const linksDataPromise = getLinksPromises(dataPromisesArray) // [{file: '/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/README.md', href: 'https://es.wikipedia.org/wiki/Markdown', text: 'Markdown'},{file: '/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/ejemplo.md', href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays', text: 'Arreglos'} ]

// const statusLinksArray = getStatusPromises(linksDataPromise)

// const statsLinksArray = statsLinks(statusLinksArray)

//console.log(statsLinksArray)

//statusLinksArray.then(result => {console.log(result)})
//loadLinks(dataPromisesArray)

//OJO CON ESTOOOO
























