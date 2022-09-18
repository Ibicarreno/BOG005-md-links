const mocksData = {
  filePath: '/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/carpeta1',
  validateFalse : [
    {
      file: '/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/carpeta1/carpeta2/hola2.md',
      href: 'https://www.tabnine.com/code/javascript/classes/node-fetch/Response',
      text: 'https://www.tabnine.com/code/javascript/classes/node-fetch/Response'
    },
    {
      file: '/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/carpeta1/hola1.md',
      href: 'https://www.tabnine.com/code/javascript/classes/node-fetch/Response',
      text: 'https://www.tabnine.com/code/javascript/classes/node-fetch/Response'
    }
  ],
  validateTrue: [
    {
      file: '/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/carpeta1/carpeta2/hola2.md',
      href: 'https://www.tabnine.com/code/javascript/classes/node-fetch/Response',
      text: 'https://www.tabnine.com/code/javascript/classes/node-fetch/Response',
      status_response: 'Ok',
      status: 200
    },
    {
      file: '/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/carpeta1/hola1.md',
      href: 'https://www.tabnine.com/code/javascript/classes/node-fetch/Response',
      text: 'https://www.tabnine.com/code/javascript/classes/node-fetch/Response',
      status_response: 'Ok',
      status: 200
    }
  ],
  statsData: { Total: 2, Unique: 1 },
  statsAndValidateData: { Total: 2, Unique: 1, Broken: 1 }
}

module.exports = {
  mocksData
}
