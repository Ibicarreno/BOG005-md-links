
const filesArray = require('./utils/list-md-links')
const mdLinks = require('./utils/md-links')
const mdLinksR = require('./utils/md-links-resv')

const statusHttp = require('./utils/status-links')

const filePath = './'
const arrayMdFiles = filesArray(filePath)

const readFile = mdLinksR.readFile(arrayMdFiles)
console.log(readFile)

//const result = mdLinks(arrayMdFiles)


// const result = mdLinks(arrayMdFiles)
//   .then(content => {Promise.all(content)
//     .then(x => {console.log(x.flat())})
// })



//const statusLinks = statusHttp(result)
