import React from './react.js'
import ReactDOM from "./react-dom.js";

/** @jsx React.createElement */
const element = (
    <div id="foo" className={'foo'}>
        <a>level-01 bar</a>
        <b>level-01 foz</b>
        <c>
            <div id="foo" className={'foo'}>
                <a>level-02 bar</a>
                <b>level-02 foz</b>
                <c>
                    <div id="foo" className={'foo'}>
                        <a>level-03 bar</a>
                        <b>level-03 foz</b>
                    </div>
                </c>
            </div>
        </c>
    </div>
)
const container = document.getElementById("root")
ReactDOM.render(element, container)
