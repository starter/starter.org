const html = require('nanohtml')
const xoo = require('xoo')
const css = require('sheetify')

const bind = xoo({
  title: 'main',
  clicks: 0,
  handleClick: function () {
    this.clicks++
    console.log(this.clicks)
  }
})

module.exports = bind(view)

const style = css`
  :host {
    text-align: center
  }
  :host > img {
    height: 100vh
  }
`

function view (state) {
  return html`
    <main id="main" class=${style}>
      <img onclick=${this.handleClick} src="/assets/bonfire.svg" alt="digital bonfire">
    </main>
  `
}
