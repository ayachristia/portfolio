import githubLogo from '/img/github-512.webp'

export default function navigation() {
    const navEl = document.createElement("section");
    navEl.classList.add("navigation");
    navEl.innerHTML = `
      <div class="navigation__burgerBtn">
        <span class="material-symbols-outlined">
    menu
    </span>
    </div>
      
   
    
    <section class="navigation__burger hiddenMenu">
        <nav class="navigation__burger-list">
            <a href="#heroEl" class="navigation__navitem"><span class="dot"></span>Home</a>
            <a href="#about" class="navigation__navitem"><span class="dot"></span>About me</a>
            <a href="#projects" class="navigation__navitem"><span class="dot"></span>Projects</a>
        </nav>

        <div class="navigation__socials">
            <a href="https://github.com/ayachristia"><img src="${githubLogo}" alt="github" class="navigation__github"></a>
            
            <a href="http://linkedin.com/in/aya-christiansen-53148482"><i class="fa fa-linkedin navigation__linkedIn"></i></a>
        </div>
        
        <div class="navigation__contact">
        <a href="mailto:ayachristia@gmail.com">ayachristia@gmail.com</a>
        </div>

        <button class="navigation__burger-close" aria-label="closeMenuButton">X</button>
    </section>
    <div class="overlay hiddenOverlay"></div>
    `;
    /*burger event to open nav list*/
    const burgerBtn = navEl.querySelector(".navigation__burgerBtn");
    const overlay = navEl.querySelector(".overlay");
    const navBurger = navEl.querySelector(".navigation__burger");
    const burgerCloseBtn = navEl.querySelector(".navigation__burger-close");
    const navItems = navEl.querySelectorAll(".navigation__navitem")
    console.log(navItems);

    function closeBurgermenu() {
        navBurger.classList.add("hiddenMenu");
        overlay.classList.add("hiddenOverlay");
        burgerBtn.setAttribute("aria-expanded", false);
    }
    function openBurgermenu() {
        navBurger.classList.remove("hiddenMenu");
        overlay.classList.remove("hiddenOverlay");
        burgerBtn.setAttribute("aria-expanded", true);
    }

    navItems.forEach((item) => {
        item.addEventListener('click', () => {
            setTimeout(() => {
                closeBurgermenu()
            }, 390);
        })
    })

    burgerBtn.addEventListener("click", function () {
        openBurgermenu()
    });

    burgerCloseBtn.addEventListener("click", function () {
        closeBurgermenu()
    });

    overlay.addEventListener('click', () => {
        closeBurgermenu()
    })

    return navEl;
}
