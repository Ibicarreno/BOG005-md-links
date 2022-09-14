
const {mdLinks} = require('../index')

const filePath = './README.md'

describe('mdLinks', () => {
  it('mdLinks should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('mdLinks deberia retornar un array de objetos como resultado si ingreso una opcion validate', () => {
    mdLinks(filePath, {validate:true}).then((arrayObject) => {
      const objectExpect = [
        {
          file: '/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/README.md',
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown',
          status_response: 'Ok',
          status: 200
        },
        {
          file: '/Users/ibicarreno/Documents/Laboratoria/BOG005-md-links/README.md',
          href: 'https://www.tabnine.com/code/javascript/classes/node-fetch/Response',
          text: 'https://www.tabnine.com/code/javascript/classes/node-fetch/Response',
          status_response: 'Ok',
          status: 200
        }
      ]
      expect(arrayObject).toEqual(objectExpect);
    })

  });
});

