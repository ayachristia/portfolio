import portrait from '/img/d276c4a2-9717-47e0-bb56-6de859df40f8.jpg';


export default function about() {
    let aboutEl = document.createElement("section");
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
            <div class="about__svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="100 95 300 310" 
      <defs>
      <clipPath id="shapeClip">
      <path xmlns="http://www.w3.org/2000/svg" style="fill: rgb(216, 216, 216); stroke: rgb(0, 0, 0);" d="M 173.70266666666666 105.88166666666666 C 213.04866666666666 100 274.56233333333336 100 315.9731666666667 105.65916666666668 C 357.384 111.31833333333334 378.692 122.63666666666667 389.346 136.5355 C 400 150.43433333333334 400 166.91366666666667 395.11133333333333 194.58783333333335 C 390.2226666666667 222.26200000000003 380.44533333333334 261.13100000000003 368.90066666666667 303.44283333333334 C 357.356 345.7546666666667 344.04400000000004 391.50933333333336 320.4986666666667 402.1383333333333 C 296.9533333333333 412.7673333333334 263.17466666666667 388.2706666666666 233.369 361.76983333333334 C 203.5633333333333 335.269 177.73066666666668 306.764 156.16466666666665 279.4683333333333 C 134.59866666666667 252.1726666666667 117.29933333333334 226.08633333333333 108.64966666666668 202.25816666666665 C 100 178.42999999999998 100 156.85999999999999 108.58916666666666 140.19333333333333 C 117.17833333333333 123.52666666666666 134.35666666666665 111.76333333333332 173.70266666666666 105.88166666666666" xmlns:bx="https://boxy-svg.com" bx:d="M 151.535 100 U 336.076 100 U 400 133.955 U 400 183.393 U 370.668 300 U 330.732 437.264 U 229.396 363.774 U 151.898 278.259 U 100 200 U 100 135.29 Z 1@2596d82a"/>
        </clipPath>
      </defs>
      <image 
      href="${portrait}" 
      clip-path="url(#shapeClip)" 
      x="80"
      y="95"
      width="400"
      height="410"
      preserveAspectRatio="xMidYMid slice"
    />
    </svg>
        </div>
               <div class="about__imgcontainer">
                <img src="${portrait}" alt="portrait" class="about__img">
            </div> 
            </section>
    </section>
            
            

            <a href="#projects" class="arrowdown">
            <button class=" arrowdown__button">
            <span class="material-symbols-outlined arrowdown__icon">
        
        keyboard_arrow_down

        </span>
        </button>
    </a>
        `

    return aboutEl
}