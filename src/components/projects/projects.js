import mymovie from '/img/mymovies.jpg'
import pokedex from '/img/pokdex.jpg'
import newsify from '/img/newsify.jpg'

export default function projects() {
    let projectsEl = document.createElement("ul");
    projectsEl.className = "projects"
    projectsEl.id = "projects"

    projectsEl.innerHTML = `
            <ul class="carousel">
                
                <li class="projects__item">
                <div class="projects__imgcontainer">
                    <a href="https://ayamymovie.netlify.app/">
                        <img src="${mymovie}" alt="mymovieProject" class="projects__img">
                    </a>
                </div>

                <section class="projects__info">
                    <h2 class="projects__info-headline">Tech stack</h2>
                    <section class="projects__info-details">
                        <div class="projects__info-stacks">
                        <h3>Technologies</h3>
                        <p>HTML, CSS, JAVASCRIPT</p>
                        </div>
                        <div class="projects__info-stacks">
                        <h3>Frameworks</h3>
                        <p>VS Code</p>
                        </div>
                        <div class="projects__info-stacks">
                        <h3>Tools</h3>
                        <p>GIT</p>
                        </div>
                        <div class="projects__info-stacks">
                        <h3>Software stack</h3>
                        <p></p>
                        </div>
                    </section>
                    <p class="projects__info-text">This project focuses on list view and detail view using URL parameters (query strings). </p>
                </section>
            </li>
            
            <li class="projects__item">
            <div class="projects__imgcontainer">
                    <a href="https://rts-cmk-wu13.github.io/pokedex-ayachristia/">
                        <img src="${pokedex}" alt="" class="projects__img">
                    </a>
                </div>
                <section class="projects__info">
                    <h2 class="projects__info-headline">Tech stack</h2>
                    <section class="projects__info-details">
                        <div class="projects__info-stacks">
                        <h3>Technologies</h3>
                        <p>HTML, CSS, JAVASCRIPT</p>
                        </div>
                        <div class="projects__info-stacks">
                        <h3>Frameworks</h3>
                        <p>VS Code</p>
                        </div>
                        <div class="projects__info-stacks">
                        <h3>Tools</h3>
                        <p>GIT</p>
                        </div>
                        <div class="projects__info-stacks">
                        <h3>Software stack</h3>
                        <p></p>
                        </div>
                    </section>
                    <p class="projects__info-text">This project focuses on list view and detail view using URL parameters (query strings). </p>
                </section>
            </li>

            <li class="projects__item">
                <div class="projects__imgcontainer">
                    <a href="https://ayanewsify.netlify.app/">
                        <img src="${newsify}" alt="newYorkTimes" class="projects__img">
                    </a>
                </div>
                <section class="projects__info">
                    <h2 class="projects__info-headline">Tech stack</h2>
                    <section class="projects__info-details">
                        <div class="projects__info-stacks">
                        <h3>Technologies</h3>
                        <p>HTML, SASS, JAVASCRIPT</p>
                        </div>
                        <div class="projects__info-stacks">
                        <h3>Frameworks</h3>
                        <p>VS Code</p>
                        </div>
                        <div class="projects__info-stacks">
                        <h3>Tools</h3>
                        <p>GIT, VITE, NETLIFY</p>
                        </div>
                        <div class="projects__info-stacks">
                        <h3>Software stack</h3>
                        <p>Node.js</p>
                        </div>
                    </section>
                    <p class="projects__info-text">Automation, css modularization, animations, storage of data and uptimization of user experience. MOBILE first project, ongoing project</p>
                </section>
            </li>

            </ul>
            
            
        `

    return projectsEl
}