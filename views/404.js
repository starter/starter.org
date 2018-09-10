const html = require('nanohtml')
const xoo = require('xoo')

const bind = xoo({
  title: '404 route not found'
})

module.exports = bind(view)

function view (state) {
  return html`
    <main id="404">
      <header>
        <h1>${state.title}${state.location}</h1>
        <h2>${this.title}</h2>
      </header>
      <a class="pt2" href="/">Back to main.</a>
    </main>
  `
}
