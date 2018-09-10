const _ = require('morphable')

// global state

const state = _({
  title: 'starter'
})

_.observe(() => document.title = state.title)

document.body = require('./views')(state)
