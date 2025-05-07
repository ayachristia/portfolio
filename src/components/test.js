export default function test() {
    let divEl = document.createElement("div");
    const body = document.querySelector('body')
    divEl.className = "divEl"

    divEl.innerHTML = `
    <button>Open the modal</button>
    <dialog>
        <h2>A standard modal</h2>
        <button>Close the modal</button>
    </dialog>
    
        <!-- <section class="divEl__header">
            <section class="divEl__item mini">
            <h1 class="divEl__headline">Welcome to</h1>
            </section>
            <section class="divEl__item big">
            <h1 class="divEl__headline">Newsify</h1>
            </section> 
        </section> -->
        `

    const dialog = divEl.querySelector('dialog')
    const showDialog = divEl.querySelector('button')
    const closeDialog = divEl.querySelector('dialog button')

    showDialog.addEventListener('click', () => {
        dialog.showModal()
    })
    closeDialog.addEventListener('click', () => {
        dialog.close()
    })

    body.append(divEl)
    return body
}