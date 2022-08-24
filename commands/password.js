#!/usr/bin/env node

require('colors')
const { distanceInWords, addMilliseconds } = require('date-fns')
const clipboardy = require('clipboardy')

const coolDictionary = require('../dictionaries/coolwords')
const secureDictionary = require('../dictionaries/words')

const password = (number_of_words = 4, number_of_times = 1, cool = false) => {
  let words = cool ? coolDictionary : secureDictionary
  let time = words.length ** number_of_words
  time = addMilliseconds(new Date(), time)
  time = distanceInWords(new Date(), time)

  Array(parseInt(number_of_times, 10))
    .fill(null)
    .forEach(() => {
      const password = Array(parseInt(number_of_words, 10))
        .fill(null)
        .map(() => words[Math.floor(Math.random() * words.length)])
        .join('-')
      console.log(password.green)
      clipboardy.writeSync(password)
    })

  console.log(
    `Worst case scenario your password would take ${time} to hack`.dim
  )
}

module.exports = { password }
