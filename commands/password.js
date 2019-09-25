#!/usr/bin/env node

const colors = require('colors')
const { distanceInWords, addMilliseconds } = require('date-fns')
const { words } = require('../dictionaries/coolwords')

const password = (number_of_words = 4, number_of_times = 1) => {
	let time = words.length ** number_of_words
	time = addMilliseconds(new Date(), time)
	time = distanceInWords(new Date(), time)

	while (number_of_times > 0) {
		let password = [...Array(Number(number_of_words)).keys()].map(i => {
			let randomIndex = Math.floor(Math.random() * words.length)
			return words[randomIndex]
		})
		console.log(password.join('-').green)
		number_of_times--
	}

	console.log(
		`Worst case scenario your password would take ${time} to hack`.dim
	)
}

module.exports = { password }
