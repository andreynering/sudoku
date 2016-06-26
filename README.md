## Sudoku

A simple web sudoku game made with [ReactJS][reactjs] and [Redux][redux].
[Play online here][play].

See the [VueJS version here][vuejssudoku].

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
[play]: http://sudoku.js.org/
[vuejssudoku]: https://github.com/andreynering/vuejs-sudoku
[webpack]: https://webpack.github.io/
[localstorage]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[less]: http://lesscss.org/
[lesscleancss]: https://github.com/less/less-plugin-clean-css
