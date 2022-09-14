const {absolutPath, listMdLinks} = require('./utils/list-md-links')
const filePath = './'

const arrayMdFiles = listMdLinks(filePath) // ['/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/README.md', '/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/ejemplo.md']

console.log('arrayMdFiles', arrayMdFiles)
