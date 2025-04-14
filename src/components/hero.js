import portrait from '../img/moi.jpg';

export default function hero() {
    const heroEl = document.createElement("div");
    heroEl.className = "heroEl"

    heroEl.innerHTML = `
    <h1 class="heroEl__headline">
        <span class="heroEl__frontdev heroEl__frontdev--front">frontend</span>
        <span class="heroEl__frontdev heroEl__frontdev--dev">developer</span>
    </h1>

    <p class="heroEl__about">
        Hello! I'm Aya. An aspiring Frontend Developer currently studying fulltime at Roskilde Technical school with 1+ years of experience in building dynamic, scalable and responsive web solutions.
    </p>

    <table class="heroEl__focus">
        <tr>
            <th>2nd</th>
            <th>10+</th>
            <th>10k+</th>
        </tr>
        <tr>
            <td>Year of studies</td>
            <td>School projects</td>
            <td>Hours worked</td>
        </tr>
    </table>

    <div class="heroEl__imgcontainer">
        <img src="${portrait}" alt="portrait of Aya" class="heroEl__portrait">
    </div>
    
    
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