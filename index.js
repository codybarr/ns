#!/usr/bin/env node

const program = require('commander')
const { version } = require('./package.json')

const { password } = require('./commands/password')
const { generate } = require('./commands/generate')
const { md5 } = require('./commands/md5')

program
  .version(version)
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
  .action((opts) => {
    const missing_msg = `No options provided. Run 'ns password -h' for help info.\n`
    opts.words
      ? password(opts.words, opts.times, opts.cool)
      : console.log(missing_msg)
  })

program
  .command('generate')
  .description(
    'Generates multiple dummy content files based on user input. Defaults to .md files with YAML frontmatter.'
  )
  .action((_) => {
    generate()
  })

program
  .command('md5')
  .description('Creates an md5 hash of the following parameter')
  .action((opts) => md5(opts))

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp((text) => text + '\n')
}
