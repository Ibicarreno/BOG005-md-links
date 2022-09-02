//const request = require('request');
//https://www.digitalocean.com/community/tutorials/how-to-write-asynchronous-code-in-node-js-es

// Utilizaremos fetch() API de JS para realizar peticiones HTTP asincronas utilizando promesas


module.exports = function (content) {
  content.map((linksArray)=> linksArray.map(link => fetch(console.log(link.href))
  .then((response)=> {
    if(response.status === 202) {
      console.log(link.file, link.href, 'OK', response.status, link.text)
    } else if(response.status === 404){
      console.log(link.file, link.href, 'fail', response.status, link.text)
    }
    })
    .catch(error =>
      error(console.log('Error al leer el link')))
  ))
  return statusLinks;
}
