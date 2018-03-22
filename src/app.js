import React from 'react'
import ReactDOM from 'react-dom'

import './styles/app.scss'

import App from './components/router/04-params'

import CommentBoxComponent from './components/comment/CommentBoxComponent'

const el = document.getElementById('app')

ReactDOM.render(
  <App></App>,
  el
)

// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(el)
// }, 2000)
