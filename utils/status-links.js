const fetch = require('node-fetch');
//https://www.digitalocean.com/community/tutorials/how-to-write-asynchronous-code-in-node-js-es

// Utilizaremos fetch() API de JS para realizar peticiones HTTP asincronas utilizando promesas
const link = 'https://www.npmjs.com/package/node-fetch#iface-body'

const getStatus = (link) => {
 fetch(link)
  .then(response => {console.log(response.status)
    // if(response.status === 202) {
    //   console.log(link.file, link.href, 'OK', response.status, link.text)
    // } else if(response.status === 404){
    //   console.log(link.file, link.href, 'fail', response.status, link.text)
    // }
    })
    .catch(error =>
      error(console.log('Error al leer el link')))
    }

    console.log(getStatus('https://www.npmjs.com/package/node-fetch#iface-body'))







const getStatus2 = (link) => {
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




const response = fetch('https://github.com/');

console.log(response.ok);
console.log(response.status);
console.log(response.statusText);
console.log(response.headers.raw());
console.log(response.headers.get('content-type'));

const myRequest = new Request('flowers.jpg');

fetch(myRequest).then((response) => {
  console.log(response.status);})
