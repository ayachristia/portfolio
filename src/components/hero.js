export default function hero(profession, headline, person) {
    const heroEl = document.createElement("div");
    heroEl.className = "heroEl"

    heroEl.innerHTML = `
    <h1 class="heroEl__headline">
        <span class="heroEl__intro">${profession}</span>
        <span class="heroEl__person">${person}</span>
        ${headline}
    </h1>
    
    <a href="#highlight">
        <button class="heroEl__arrowdown">
        <span class="material-symbols-outlined">
                arrow_drop_down
            </span>
        </button>
    </a>
    `

    return heroEl;
}