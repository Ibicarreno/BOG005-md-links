const fs = require("fs");
const path = require("path");
const marked = require("marked");

function readFile (filesArray) {
  let readFileObject = filesArray.map((fileObject) => {
    return new Promise((resolve, reject) => {
      fs.readFile(fileObject.path, "utf-8", (error, data) => {
        if (error) {
          console.log("error");
        } else {
          resolve(data);
        }
      })
    })
  })
  return readFileObject
}

module.exports = {
  readFile
}
