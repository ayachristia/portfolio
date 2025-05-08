import portrait from '/img/d276c4a2-9717-47e0-bb56-6de859df40f8.jpg';


export default function about() {
    let aboutEl = document.createElement("div");
    aboutEl.className = "about"
    aboutEl.id = "about"

    aboutEl.innerHTML = `
    <section class="about__content">
        <section class="about__textbox">
                <h1 class="about__name">Hi, Im Aya</h1>
                <p class="about__text">
                <span class="about__text--modifier1"><span class="about__text--modifier2">I am currently</span> studying to become a Front End Developer, building and maintaining user interfaces for web applications.</span>
                <span class="about__text--modifier2">Transforming ideas</span> & UI/UX designs into responsive, interactive interfaces is both challenging and rewarding. 
                <span class="about__text--modifier3">- you could call it the work of a digital wizard. It's a skillset that continues to inspire me as I expand my knowledge and capabilities.</span>
                 

                </p>
            </section>
            <section class="about__right">
         
               <div class="about__imgcontainer">
                <img src="${portrait}" alt="portrait" class="about__img">
            </div> 
            </section>
    </section>
            
            

            <a href="#projects">
        <button class="heroEl__arrowdown">
        <span class="material-symbols-outlined heroEl__arrowIcon">
        
        keyboard_arrow_down

        </span>
        </button>
    </a>
        `

    return aboutEl
}