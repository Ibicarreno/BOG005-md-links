const fs = require("fs");
const path = require("path");
const marked = require("marked");
const { resolve } = require("path");

module.exports = function (arrayMdFiles) {
  // Leer los archivo .md
  let content = new Promise((resolve, reject) => {
    const promises = arrayMdFiles.map((fileObject) => {
      let links = [];
      //readfile con promises all, como esperar que se lean todos los archivos
      return new Promise((resolve, reject) => {
        fs.readFile(fileObject.path, "utf-8", (error, data) => {
          if (error) {
            console.log("error");
          } else {
            //console.log(data);
            let renderer = new marked.Renderer();
            renderer.link = function (href, title, text) {
              // if para seleccionar solo los http
              if(href.includes('http')){
                links.push({
                  'file': fileObject.path,
                  'href': href,
                  'text': text,
                });
              }
            };
            marked.marked(data, { renderer: renderer });
            // seleccionar solo los links que contengan http
            //const finalLinks = links.filter(link => link.href.includes('http'))
            //console.log(links)
            resolve(links);
          }
        });
      });
    });
    resolve(promises)
    //console.log(promises)
  });
  //console.log(content)
  return content;
};
