const html = require('nanohtml')
const xoo = require('xoo')
const css = require('sheetify')
css('tachyons')

const bind = xoo({
  location: window.location.pathname,
  get route () {
    switch (this.location) {
      case '/':
      case '/index.html':
        return require('./main')
      default:
        return require('./404')
    }
  }
})

module.exports = bind(view)

function view (state) {
  return html`
    <body class="baskerville">
      ${this.route(state)}
    </body>
  `
}
