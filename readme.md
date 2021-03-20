# ns ✨

Personal helper CLI utility for all the things. 🤙🏻

## Installation

    $ npm install @nosweat/ns -g

or

    $ yarn global add @nosweat/ns

## Usage

### `ns`

    ns

displays this help:

    Usage: ns [options] [command]

    Options:

      -V, --version  output the version number
      -h, --help     output usage information

    Commands:

       password [options]  Simple word-based password generator

### `ns password`

    ns password -h

displays this help:

    Usage: password [options]

    Simple word-based password generator

    Options:

    -w, --words <number_of_words>  Generates a simple password using the specified number of random words
    -t, --times <number_of_times>  Specify number of passwords to generate. Defaults to 1.
    --cool                         Use the dictionary of cool words to generate passwords 😎.
    -h, --help                     output usage information

### `ns md5`

    ns md5 supersecretpassword

generates the following message in the console (and copies it to the clipboard):

    bbb2c5e63d2ef893106fdd0d797aa97a

## Upgrade to the latest version

`npm update -g @nosweat/ns`

## License

(The MIT License)

Copyright (c) 2018 Cody Barr &lt;cody.barr@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
