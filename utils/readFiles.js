const fs = require("fs");

function readMdFiles(filesArray){

  let promises = [];

  filesArray.map((fileObject) => {
    promises.push(new Promise((resolve, reject) => {
      fs.readFile(fileObject.path, "utf-8", (error, data) => {
        if (error) {
          console.log("error");
        } else {
          resolve(data);
        }
      });
    }));
  })

  return promises


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

  let promises = [];

  dataPromisesArray.map(promise => {
    promise.then(data =>{
      //console.log(data)
    })
  })

  return promises
}


module.exports = {
  readMdFiles,
  loadLinks
}
