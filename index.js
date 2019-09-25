#!/usr/bin/env node

const program = require('commander')

const { password } = require('./commands/password')

program
	.version('1.0.0')
	.description('Personal helper utility for all the things.')

program
	.command('password')
	.description('Simple word-based password generator')
	.option(
		'-w, --words <number_of_words>',
		'Generates a simple password using the specified number of random words'
	)
	.option(
		'-t, --times <number_of_times>',
		'Specify number of passwords to generate. Defaults to 1.'
	)
	.option(
		'--cool',
		'Use the dictionary of cool words to generate passwords 😎.'
	)
	.action(function(opts) {
		const missing_msg = `No options provided. Run 'ns password -h' for help info.\n`
		opts.words
			? password(opts.words, opts.times, opts.cool)
			: console.log(missing_msg)
	})

program.parse(process.argv)

if (!process.argv.slice(2).length) {
	program.outputHelp(text => text + '\n')
}
