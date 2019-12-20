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
    text-align: center;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  :host > div {
    width: 50vw;
  }
  :host a {
    color: #ea1d5c;
    text-decoration: underline;
  }
`

function view (state) {
  return html`
    <main id="main" class=${style}>
      <div>
        <img onclick=${this.handleClick} src="/assets/logo.svg" alt="digital bonfire">
        <a class="f1" href="mailto:hello@starter.org">hello@starter.org</a>
      </div>
    </main>
  `
}
