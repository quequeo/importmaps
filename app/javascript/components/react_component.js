import React from 'react'
import ReactDOM from 'react-dom'

const Hello = props => (
  React.createElement('div', null, `Hello ${props.name}`)
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    React.createElement(Hello, {name: 'Rails 7'}, null),
    document.getElementById('react-example'),
  )
})