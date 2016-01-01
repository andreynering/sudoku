## Sudoku

A simple web sudoku game made with [ReactJS][reactjs] and [Redux][redux].
[Play online here][play].

### Features

- Mobile-friendly
- Uses [LocalStorage][localstorage] to save the current game state

### Building locally

Prerequisites:

- NodeJS
- NPM
- [Webpack][webpack] (installed globally)
- [LESS][less] and the [clean CSS plugin][lesscleancss] (installed globally)

```bash
$ git clone https://github.com/andreynering/sudoku.git
$ cd sudoku
$ npm install
$ npm run buildjs
$ npm run buildcss
```

[reactjs]: https://facebook.github.io/react/
[redux]: http://redux.js.org/
[play]: http://andrey.nering.com.br/sudoku/
[webpack]: https://webpack.github.io/
[localstorage]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[less]: http://lesscss.org/
[lesscleancss]: https://github.com/less/less-plugin-clean-css

---

Copyright 2015-2016 Andrey Nering

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
