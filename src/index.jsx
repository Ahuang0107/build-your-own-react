import React from './react.js'

/** @jsx React.createElement */
const element = <h1 title="foo">Hello</h1>
const container = document.getElementById("root")

const node = document.createElement(element.type)
node.title = element.props.title

const text = document.createTextNode("")
text.nodeValue = element.props.children

node.appendChild(text)
container.appendChild(node)
