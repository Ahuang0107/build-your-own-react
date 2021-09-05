import React from "./react.js";
import ReactDOM from "./react-dom.js";
import Counter from "./Counter.jsx";

/** @jsx React.createElement */
export default function App(props) {
    const update = () => {
        ReactDOM.render(
            <App name={'Elane'}/>,
            document.getElementById("root")
        )
    }
    return (
        <div>
            <h1>{props.name}</h1>
            <button onClick={update}>Click</button>
            <Counter/>
        </div>
    )
}
