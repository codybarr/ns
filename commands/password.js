#!/usr/bin/env node

const colors = require('colors')
const { distanceInWords, addMilliseconds } = require('date-fns')
const clipboardy = require('clipboardy')

const coolDictionary = require('../dictionaries/coolwords')
const secureDictionary = require('../dictionaries/words')

const password = (number_of_words = 4, number_of_times = 1, cool = false) => {
	let words = cool ? coolDictionary : secureDictionary
	let time = words.length ** number_of_words
	time = addMilliseconds(new Date(), time)
	time = distanceInWords(new Date(), time)

	while (number_of_times > 0) {
		let password = [...Array(Number(number_of_words)).keys()].map(i => {
			let randomIndex = Math.floor(Math.random() * words.length)
			return words[randomIndex]
		})
		console.log(password.join('-').green)
		clipboardy.writeSync(password.join('-'))
		number_of_times--
	}

	console.log(
		`Worst case scenario your password would take ${time} to hack`.dim
	)
}

module.exports = { password }
