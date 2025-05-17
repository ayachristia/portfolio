import html from '/img/html.png'
import css from '/img/css.png'
import js from '/img/javascript.png'
import node from '/img/nodejs.png'
import react from '/img/react.png'

export default function stack() {
    const stackContainer = document.createElement('section')
    stackContainer.className = "stack"
    stackContainer.id = "component__stack"
    stackContainer.innerHTML = `
    <div class="stack__item">
        <div class="stack__imgcontainer">
            <img src="${html}" alt="" class="stack__html">
        </div>
        <h2>
            Html
        </h2>
    </div>
    <div class="stack__item">
        <div class="stack__imgcontainer">
            <img src="${css}" alt="" class="stack__css">
        </div>
        <h2>
            Css
        </h2>
    </div>
    <div class="stack__item">
        <div class="stack__imgcontainer">
            <img src="${js}" alt="" class="stack__js">
        </div>
        <h2>
            Javascript
        </h2>
    </div>
    <div class="stack__item">
        <div class="stack__imgcontainer">
            <img src="${node}" alt="" class="stack__node">
        </div>
        <h2>
            Node.js
        </h2>
    </div>
    <div class="stack__item">
        <div class="stack__imgcontainer">
            <img src="${react}" alt="" class="stack__react">
        </div>
        <h2>
            React
        </h2>
    </div>
   
    `

    return stackContainer;
}