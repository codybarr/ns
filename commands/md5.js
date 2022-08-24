#!/usr/bin/env node
require('colors')
const MD5 = require('crypto-js/md5')
const clipboardy = require('clipboardy')

const md5 = (opts) => {
  const hash = MD5(opts).toString()
  clipboardy.writeSync(hash)

  console.log(hash.green)
}

module.exports = { md5 }
