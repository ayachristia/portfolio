
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

        <section class="heroEl__focus">
            <div class="heroEl__stats">
                <h1 class="heroEl__stats--headline">1st</h1>
                <p class="heroEl__stats--text">Year of studies</p>
            </div>
            <div class="heroEl__stats">
                <h1 class="heroEl__stats--headline">10+</h1>
                <p class="heroEl__stats--text">School Projects</p>
            </div>
            <div class="heroEl__stats">
                <h1 class="heroEl__stats--headline">10k+</h1>
                <p class="heroEl__stats--text">Hours Worked</p>
            </div>
        </section>
    
        
    </div>

    
    <a href="#about" class="arrowdown">
            <button class="arrowdown__button">
            <span class="material-symbols-outlined arrowdown__icon">
        
        keyboard_arrow_down

        </span>
        </button>
    </a>
    `

    console.log(heroEl.querySelector('.heroEl__about'))
    return heroEl;
}