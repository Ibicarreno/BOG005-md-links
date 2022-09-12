const fs = require("fs");
const path = require("path");
const marked = require("marked");
const fetch = require("node-fetch");

const readFilesPromises = (listFilesMdArray) => {
  let promisesReadFiles = [];
  listFilesMdArray.map((filesObject) => {
    promisesReadFiles.push(
      new Promise((resolve, reject) => {
        fs.readFile(filesObject.path, "utf-8", (error, data) => {
          if (error) {
            console.log("error");
          } else {
            resolve({
              path: filesObject.path,
              data: data,
            });
          }
        });
      })
    );
  });
  return promisesReadFiles; //[ Promise { <pending> }, Promise { <pending> } ]
};

const getLinksPromises = (promisesReadFilesArray) => {
  let promisesGetLinks = [];
  promisesReadFilesArray.map((promiseObject) => {
    promisesGetLinks.push(
      new Promise((resolve, reject) => {
        let links = [];
        promiseObject.then((result) => {
          let renderer = new marked.Renderer();
          renderer.link = function (href, tittle, text) {
            if (href.includes("http")) {
              links.push({
                file: result.path,
                href: href,
                text: text,
              });
            }
          };
          marked.marked(result.data, { renderer: renderer });
          //console.log(links);
          resolve(links);
        });
      })
    );
  });
  return Promise.all(promisesGetLinks);
};

const getStatusPromises = (linksPromise) => {
  return new Promise((resolve, reject) => {
    linksPromise.then((linksArray) => {
      let promisesGetStatusLinks = [];
      let linksArrayFlat = linksArray.flat();
      linksArrayFlat.map((link) => {
        promisesGetStatusLinks.push(
          new Promise((resolve, reject) => {
            fetch(link.href).then((res) => {
              if (res.status >= 200 && res.status < 400) {
                statusLinks = "Ok";
              } else {
                statusLinks = "fail";
              }
              resolve({
                file: link.file,
                href: link.href,
                text: link.text,
                status_response: statusLinks,
                status: res.status,
              });
            });
          })
        );
      });
      Promise.all(promisesGetStatusLinks).then((result) => resolve(result));
    });
  });
};

// const statsLinks = (linksStatusPromise) => {
//   let resultStats = [];
//   let totalLinks;
//   let uniqueLinks;
//   linksStatusPromise.then((linksArray) => {
//     let totalLinksArray = [];
//     linksArray.map((links) => {
//       totalLinksArray.push(links.href);
//       totalLinks = totalLinksArray.length;
//       uniqueLinks = new Set(totalLinksArray).size;
//     });
//     resultStats = {
//       total: totalLinks,
//       Unique: uniqueLinks,
//     };
//     console.log(resultStats)
//   });
//   console.log(resultStats)
//   return resultStats;
// };

const statsLinks = (linksArray) => {
    return {
      'Total': linksArray.length,
      'Unique': new Set(linksArray.map((linkObject) => linkObject.href)).size
    }
}

const statsAndValidateLinks = (linksArray) => {
    const broken = linksArray.filter((links) => links.status_response === 'fail').length;
    return {
      'Total': linksArray.length,
      'Unique': new Set(linksArray.map((linkObject) => linkObject.href)).size,
      'Broken': broken
    }
}



module.exports = {
  readFilesPromises,
  getLinksPromises,
  getStatusPromises,
  statsLinks,
  statsAndValidateLinks
};
