export default function projects() {
    let projectsEl = document.createElement("div");
    projectsEl.className = "projects"
    projectsEl.id = "projects"

    projectsEl.innerHTML = `
            <section class="projects__item">
            <div class="projects__imgcontainer">
                    <a href="#">
                        <img src="src/img/mymovies.jpg" alt="mymovieProject" class="projects__img">
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
            </section>
            
            <section class="projects__item">
            <div class="projects__imgcontainer">
                    <a href="https://rts-cmk-wu13.github.io/pokedex-ayachristia/">
                        <img src="src/img/pokdex.jpg" alt="" class="projects__img">
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
            </section>

            <section class="projects__item">
                <div class="projects__imgcontainer">
                    <a href="https://strong-biscuit-7b11c5.netlify.app/">
                        <img src="src/img/newsify.jpg" alt="newYorkTimes" class="projects__img">
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
                    <p class="projects__info-text">Automation, css modularization, animations, storage of data and uptimization of user experience.</p>
                </section>
            </section>
            
        `

    return projectsEl
}