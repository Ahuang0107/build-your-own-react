import React from './react.js'
import ReactDOM from "./react-dom.js";
/** @jsx React.createElement */

const updateValue = e => {
    rerender(e.target.value)
}

const rerender = value => {
    const element = (
        <div>
            <input onInput={updateValue} value={value} />
            <h2>Hello {value}</h2>
        </div>
    )
    ReactDOM.render(element, container)
}
const container = document.getElementById("root")
rerender("World")
