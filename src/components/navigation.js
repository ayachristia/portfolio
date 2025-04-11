// --------------------second try
export default function navigation() {
    const navEl = document.createElement("section");
    navEl.classList.add("navigation");
    navEl.innerHTML = `
      <div class="navigation__burgerBtn">
        <span class="material-symbols-outlined">
    menu
    </span>
    </div>
      
    <section class="navigation__primary">
    <div class="navigation__logo"><a href="index.html">TOP</a></div>
    <nav class="navigation__navlist">
        <a href="index.html" class="navigation__navitem">Skills</a>
        <a href="#" class="navigation__navitem">Projects</a>
        <a href="#" class="navigation__navitem">About</a>
    </nav>
    <div class="navigation__socials">
    <a href="#"><span class="material-symbols-outlined">mail</span></a>
    <a href="http://linkedin.com/in/aya-christiansen-53148482"><i class="fa fa-linkedin"></i></a>
    </div>
    </section>
    
    <section class="navigation__burger hidden">
        <div class="navigation__logo">AC</div>
        <nav class="navigation__burger-list">
          <a href="#" class="navigation__navitem">Home</a>
        <a href="#" class="navigation__navitem">Projects</a>
        <a href="#" class="navigation__navitem">Cv</a>
        </nav>
        <div class="navigation__socials">
    <a href="#"><span class="material-symbols-outlined">mail</span></a>

        <a href="http://linkedin.com/in/aya-christiansen-53148482"><i class="fa fa-linkedin"></i></a>
        </div>
        <button class="navigation__burger-close" aria-label="closeMenuButton">X</button>
    </section>
    <div class="overlay hidden"></div>
    `;

    //events
    /*burger event to open nav list*/
    const burgerBtn = navEl.querySelector(".navigation__burgerBtn");
    const overlay = navEl.querySelector(".overlay");
    const navBurger = navEl.querySelector(".navigation__burger");

    burgerBtn.addEventListener("click", function () {
        navBurger.classList.remove("hidden");
        overlay.classList.remove("hidden");

        // burgerBtn.setAttribute("aria-expanded", true);
    });

    const burgerCloseBtn = navEl.querySelector(".navigation__burger-close");
    burgerCloseBtn.addEventListener("click", function () {
        navBurger.classList.add("hidden");
        overlay.classList.add("hidden");
        // burgerBtn.setAttribute("aria-expanded", false);
    });

    return navEl;
}
