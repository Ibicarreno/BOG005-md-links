#! /usr/bin/env node

const filesArray = require('../utils/list-md-links')
const process = require('process');
const {statsLinks, statsAndValidateLinks} = require('../utils/mdLinks');
const { mdLinks } = require('../index');

const argv = process.argv
const cli = (filePath, options) => {

      if(argv.includes('--validate')){
        mdLinks(argv[2], {validate:true}).then((res) => {console.log('otra prueba', res)})
      } else if(argv.length <= 3){
        mdLinks(argv[2], {validate:false}).then((res) => {console.log('prueba', res)})
      } else if(argv.includes('--stats')){
       (mdLinks(argv[2], {validate:true}).then((res) => {console.log(statsLinks(res))}))
      } else if(argv.includes('--stats --validate')){
       (mdLinks(argv[2], {validate:true}).then((res) => {console.log(statsAndValidateLinks(res))}))
      }
}

cli(argv[2], argv)












