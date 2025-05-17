
export default function hero() {
    const heroEl = document.createElement("section");
    heroEl.className = "heroEl"
    heroEl.id = "heroEl"

    heroEl.innerHTML = `
    <h1 class="heroEl__headline">
        <span class="heroEl__frontdev heroEl__frontdev--front">frontend</span>
        <span class="heroEl__frontdev heroEl__frontdev--dev">developer</span>
    </h1>

    <p class="heroEl__about">
        Hello! I'm <b>Aya</b>. An aspiring Frontend Developer currently studying fulltime, with 1+ years of experience.
    </p>

    <div class="heroEl__browserFlex">

        <table class="heroEl__focus">
            <tr>
                <th>1st</th>
                <th>10+</th>
                <th>10k+</th>
            </tr>
            <tr>
                <td>Year of studies</td>
                <td>School projects</td>
                <td>Hours worked</td>
            </tr>
        </table>
    
        
    </div>

    
    <a href="#about" class="arrowdown">
            <button class="arrowdown__button">
            <span class="material-symbols-outlined arrowdown__icon">
        
        keyboard_arrow_down

        </span>
        </button>
    </a>
    `

    return heroEl;
}