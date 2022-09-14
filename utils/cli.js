#! /usr/bin/env node

const process = require('process');
const {statsLinks, statsAndValidateLinks} = require('../utils/mdLinks');
const { mdLinks } = require('../index');

const argv = process.argv
const cli = (filePath, options) => {
      if(argv.includes('--stats') && argv.includes('--validate')){
        (mdLinks(argv[2], {validate:true}).then((res) => {console.log(statsAndValidateLinks(res))}))
      } else if(argv.includes('--validate')){
        mdLinks(argv[2], {validate:true}).then((res) => {console.log('otra prueba', res)})
      } else if(argv.length <= 3){
        mdLinks(argv[2], {validate:false}).then((res) => {console.log('prueba', res)})
      } else if(argv.includes('--stats')){
       (mdLinks(argv[2], {validate:true}).then((res) => {console.log(statsLinks(res))}))
      }
}

cli(argv[2], argv)












