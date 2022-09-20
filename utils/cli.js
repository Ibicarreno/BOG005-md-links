#! /usr/bin/env node

const process = require('process');
const {statsLinks, statsAndValidateLinks} = require('../utils/mdLinks');
const { mdLinks } = require('../index');

const filePath = process.argv[2];
const argv = process.argv

const cli = (filePath, argv) => {
  if(filePath === undefined){
    console.log("😱 Debes ingresar una ruta")
  } else if(argv.includes('--stats') && argv.includes('--validate')){
    (mdLinks(filePath, {validate:true}).then((res) => {console.log(statsAndValidateLinks(res))}))
  } else if(argv.includes('--validate')){
    mdLinks(filePath, {validate:true}).then((res) => {console.log(res)})
  } else if(argv.length <= 3){
    mdLinks(filePath, {validate:false}).then((res) => {console.log(res)})
  } else if(argv.includes('--stats')){
   (mdLinks(filePath, {validate:true}).then((res) => {console.log(statsLinks(res))}))
  } else if(argv !== '--stats' && argv !== '--validate' && argv !== undefined){
    console.log("😔 Tu opcion no es valida, intenta con --validate, --stats o --stats --validate")
  }
}

cli(filePath, argv)












