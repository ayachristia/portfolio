export default function splash() {

    const introEl = document.createElement('div')
    const body = document.querySelector('body')
    introEl.className = 'intro'

    introEl.innerHTML = `
        <h1 class="intro__header">
            <span class="intro__item">a</span>
            <span class="intro__item">y</span>
            <span class="intro__item">a</span>
            <span class="intro__item">c</span>
            <span class="intro__item">h</span>
            <span class="intro__item">r</span>
            <span class="intro__item">i</span>
            <span class="intro__item">s</span>
            <span class="intro__item">t</span>
            <span class="intro__item">i</span>
            <span class="intro__item">a</span>
        </h1>
    `
    body.appendChild(introEl)

    let introHeader = introEl.querySelector('.intro__header')
    let introSpan = introEl.querySelectorAll('.intro__item')

    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            introSpan.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add('active')
                }, (index + 1) * 125)
            })

            setTimeout(() => {
                introSpan.forEach((span, index) => {
                    setTimeout(() => {
                        span.classList.remove('active')
                        span.classList.add('fade')
                    }, (index + 1) * 120)
                })
            }, 2000);

            setTimeout(() => {
                introEl.style.bottom = '-100vh'
                introEl.classList.add('fadeback')
            }, 2000)

        })
    })
    return body;
}