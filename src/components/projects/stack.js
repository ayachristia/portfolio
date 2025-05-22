import html from '/img/html.png'
import css from '/img/css.png'
import js from '/img/javascript.png'
import node from '/img/nodejs.png'
import react from '/img/react.png'
import sqlite from '/img/sqLite.png'

export default function stack() {
    const stackContainer = document.createElement('section')
    stackContainer.className = "stack"
    stackContainer.id = "component__stack"
    stackContainer.innerHTML = `
    <div class="stack__item">
        <div class="stack__imgcontainer">
            <img src="${html}" alt="" class="stack__html">
        </div>
        <h3>
            Html
        </h3>
    </div>
    <div class="stack__item">
        <div class="stack__imgcontainer">
            <img src="${css}" alt="" class="stack__css">
        </div>
        <h3>
            Css
        </h3>
    </div>
    <div class="stack__item">
        <div class="stack__imgcontainer">
            <img src="${js}" alt="" class="stack__js">
        </div>
        <h3>
            Javascript
        </h3>
    </div>
    <div class="stack__item">
        <div class="stack__imgcontainer">
            <img src="${node}" alt="" class="stack__node">
        </div>
        <h3>
            Node.js
        </h3>
    </div>
    <div class="stack__item">
        <div class="stack__imgcontainer">
            <img src="${react}" alt="" class="stack__react">
        </div>
        <h3>
            React
        </h3>
    </div>
    <div class="stack__item">
        <div class="stack__imgcontainer">
            <img src="${sqlite}" alt="" class="stack__sqLite">
        </div>
        <h3>
            sqlite
        </h3>
    </div>
   
    `

    return stackContainer;
}