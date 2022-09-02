const filesArray = require('./utils/list-md-links')
const {readMdFiles, loadLinks} = require('./utils/readFiles')



const filePath = './'

const arrayMdFiles = filesArray(filePath) // ['path1', 'path2']

const dataPromisesArray = readMdFiles(arrayMdFiles) // Promise{[Promise1, Promise2]}

loadLinks(dataPromisesArray).then(links => {
  console.log(links)
})




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
