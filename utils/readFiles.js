const fs = require("fs");

function readMdFiles(filesArray){
  // Leer los archivo .md
  let content = new Promise((resolve, reject) => {
    const promises = filesArray.map((fileObject) => {
      //readfile con promises all, como esperar que se lean todos los archivos
      return new Promise((resolve, reject) => {
        fs.readFile(fileObject.path, "utf-8", (error, data) => {
          if (error) {
            console.log("error");
          } else {
            resolve(data);
          }
        });
      });
    });
    resolve(promises)
  });
  return content;
}

function loadLinks(dataPromisesArray){

  let response = new Promise((resolve, reject) => {
    dataPromisesArray.then(promise => {
      Promise.all(promise).then(data => {
        let links = [];
        //readfile con promises all, como esperar que se lean todos los archivos
        return new Promise((resolve, reject) => {
          links.push(1);
          resolve(links);
        })
      })
    })
  })

  return response
}


module.exports = {
  readMdFiles,
  loadLinks
}
