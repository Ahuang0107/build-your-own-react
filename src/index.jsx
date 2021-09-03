import React from './react.js'
import ReactDOM from "./react-dom.js";

/** @jsx React.createElement */

let subElement = (
    <div>before change</div>
)
const update = () => {
    subElement = (
        <div>after change</div>
    )
    element = <App name="foo"/>
    ReactDOM.render(element, container)
}
const container = document.getElementById("root")

function App(props) {
    return (
        <div>
            <button onClick={update}>Click</button>
            {subElement}
        </div>
    )
}

let element = <App name="foo"/>
ReactDOM.render(element, container)
