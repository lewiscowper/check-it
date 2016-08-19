#!/usr/bin/env node
'use strict';

/**
 * @TODO
 * - Validation failure message
 * - Implement ES6 string templates rather than string concatenation
 * - Fix some scoping issues
 */

const fs         = require('fs');
const path       = require('path');
const chalk      = require('chalk');
const readline   = require('readline');
const logSymbols = require('log-symbols');

const filePath     = process.argv[2];
const maxInstances = 10;
const minInstances = 2;

const rl = readline.createInterface({
   input: fs.createReadStream(filePath)
});

let lineNumber = 1;
let instances = 0;

rl.on('line', (line) => {
  lineNumber += 1;

  if (line.indexOf('\!important') >= 0) {
    instances += 1;
    let content = line.trim();
    let tag = content.match(/^(.*)\:/)[1];
    let value = content.match(/\:(.*)\!/)[1];

     console.log(chalk.magenta(lineNumber) + ': ' +chalk.yellow(tag)+ ': ' +chalk.green(value) +' '+ chalk.red('!important'));
  }
});

rl.on('close', function() {
  console.log("\r\n");
  console.log('Total Instances: '+ instances);

  if (instances > maxInstances) {
    console.log(logSymbols.error, chalk.red('Whoa yo don\'t use too many !importants!!!'));
    console.log("\r\n");
  } else {
    console.log(logSymbols.success, chalk.green('Whoa yo, you can CSS like a ninja!'));
    console.log("\r\n");
  }
});
