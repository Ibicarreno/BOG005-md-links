
const {mdLinks} = require('../index')
const {mocksData} = require('./mocksData.js');

describe('mdLinks', () => {
  it('mdLinks should be a function', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('mdLinks retorno validate true', done => {
    mdLinks(mocksData.filePath, {validate:true})
    .then((arrayObject) => {
      expect(arrayObject).toEqual(mocksData.validateTrue);
      done()
    })
  });

  it('mdLinks retorno validate false', done => {
    mdLinks(mocksData.filePath, {validate:false})
    .then((arrayObject) => {
      expect(arrayObject).toEqual(mocksData.validateFalse);
      done()
    })
  });
});

