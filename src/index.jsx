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
    element = (
        <div>
            {subElement}
        </div>
    )
    ReactDOM.render(element, container)
}
const container = document.getElementById("root")
let element = (
    <div>
        <button onClick={update}>Click</button>
        {subElement}
    </div>
)
ReactDOM.render(element, container)
