const filesArray = require('./utils/list-md-links')
const process = require('process');
const {readFilesPromises, getLinksPromises, getStatusPromises,} = require('./utils/mdLinks')

// Path que ingresa el usurio
const filePath = process.argv[2];

//Diferentes opciones de validacion
const optionValidationOne = process.argv[3];
const optionValidationTwo = process.argv[4];

const mdLinks = (filePath, optionValidationOne, optionValidationTwo) => {
  if(optionValidationOne === ''){
    // Imprimir file, href, text
  }
  else if(optionValidationOne === '--validate' || optionValidationOne === '--v'){
    // Imprimir file, href, text, statusText y status
  }
  else if(optionValidationOne === '--stats' || optionValidationOne === '--s'){
    // Imprimir total Links y Unique links
  }

}








const arrayMdFiles = filesArray(filePath) // ['/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/README.md', '/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/ejemplo.md']

const dataPromisesArray = readFilesPromises(arrayMdFiles)// [ [{path: /Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/README.md, data: data}], [{path: /Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/ejemplo.md, data: data}]]
// [ [{file: '/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/README.md', href: 'https://es.wikipedia.org/wiki/Markdown', text: 'Markdown'}], [{file: '/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/ejemplo.md', href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays', text: 'Arreglos'}] ]

const linksDataPromise = getLinksPromises(dataPromisesArray) // [{file: '/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/README.md', href: 'https://es.wikipedia.org/wiki/Markdown', text: 'Markdown'},{file: '/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/ejemplo.md', href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays', text: 'Arreglos'} ]

const statusLinksArray = getStatusPromises(linksDataPromise)

statusLinksArray.then(result => {console.log(result)})
//loadLinks(dataPromisesArray)

























//const filesArray = require('./utils/list-md-links')
//const mdLinks = require('./utils/md-links')
//const mdLinksR = require('./utils/md-links-resv')

//const statusHttp = require('./utils/status-links')

//const filePath = './'
//const arrayMdFiles = filesArray(filePath)

//const readFile = mdLinksR.readFile(arrayMdFiles).then()
//console.log(readFile)

//const result = mdLinks(arrayMdFiles)


// const result = mdLinks(arrayMdFiles)
//   .then(content => {Promise.all(content)
//     .then(x => {console.log(x.flat())})
// })



//const statusLinks = statusHttp(result)
