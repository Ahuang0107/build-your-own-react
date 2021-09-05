import React from "./react";
import {useState} from "./react-dom";

/** @jsx React.createElement */
export default function Counter() {
    const [state, setState] = useState(1)
    return (
        <h1 onClick={() => setState(c => c + 1)}>
            Count: {state}
        </h1>
    )
}
