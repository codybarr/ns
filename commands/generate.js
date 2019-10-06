#!/usr/bin/env node
const inquirer = require('inquirer')
const faker = require('faker')
const { format } = require('date-fns')
const fs = require('fs')

const questions = [
	{
		type: 'number',
		name: 'count',
		message: 'How many dummy files would you like to make?',
		validate: value => {
			var valid = value && !isNaN(parseInt(value))
			return valid || 'Please enter a number.'
		}
	}
]

String.prototype.toTitleCase = function() {
	return this.split(' ')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ')
}

String.prototype.toKebabCase = function() {
	return this.toLowerCase()
		.split(' ')
		.join('-')
}

const generate = () => {
	inquirer.prompt(questions).then(answers => {
		let files = []
		for (let i = 0; i < answers.count; i++) {
			let title = faker.fake(
				'{{hacker.adjective}} {{hacker.noun}} {{hacker.verb}}'
			)
			let fileName = title.toKebabCase() + '.md'
			let tags = [faker.hacker.adjective(), faker.hacker.adjective()]
			let body = faker.hacker.phrase()
			let date = format(faker.date.future(), 'YYYY-MM-DD')

			files.push(
				new Promise((resolve, reject) => {
					fs.writeFile(
						fileName,
						`---
title: ${title.toTitleCase()}
date: ${date}
tags: ${JSON.stringify(tags)}
---

${body}`,
						error => {
							if (error) reject(error)
							resolve()
						}
					)
				})
			)
		}

		Promise.all(files).then(() =>
			console.log(`${answers.count} written to current directory.`)
		)
	})
}

// faker.fake("{{hacker.adjective}} {{hacker.noun}} {{hacker.verb}}")

module.exports = { generate }
