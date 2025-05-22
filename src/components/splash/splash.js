export default function splash() {

    const introEl = document.createElement('div')
    const body = document.querySelector('body')
    introEl.className = 'intro'

    introEl.innerHTML = `
        <h1 class="intro__text">
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

    let introItem = introEl.querySelectorAll('.intro__item')

    window.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            introItem.forEach((Item, index) => {
                setTimeout(() => {
                    //sender hvert bogstav ned til bottom 0
                    Item.classList.add('active')
                }, (index + 1) * 80)
            }, 1250)

            // setTimeout(() => {
            //     // introItem.forEach((Item, index) => {
            //     //     setTimeout(() => {
            //     //         Item.classList.remove('active')
            //     //     }, (index + 1) * 120)
            //     // })
            //     introContainer.classList.add('fade')

            // }, 1000);

            setTimeout(() => {
                introEl.style.bottom = '-100vh'
                introEl.classList.add('fade')
            }, 1300)

        })
    })
    return body;
}