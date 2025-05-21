
import carousel from './carousel';
import stack from './stack';
const components = [carousel, stack]
import projectsHeader from './header';
import scroll from './projectslider';

export default function projects() {
    let projectsEl = document.createElement("section");
    projectsEl.className = "projects"
    projectsEl.id = "projects"
    //set ProjectsEl to flex-direction column or grid column 1fr



    projectsEl.append(projectsHeader())

    //projectsEl context container
    const projectsContext = document.createElement('section')
    projectsContext.className = "projects__contextContainer"
    // projectsContext.append()
    //projects section navigation element, append to the context container
    const projectsNavigation = document.createElement('section')
    projectsNavigation.className = "projects__navigation"
    projectsNavigation.innerHTML = `
    <button class="projects__navItem" data-nav="projects">
    <span class="material-symbols-outlined" data-nav="projects">
    code
    </span>
    <br>
    Projects
    </button>
    <button class="projects__navItem" data-nav="stack">
    <span class="material-symbols-outlined" data-nav="stack">
    stacks
    </span>
    <br>
    Tech Stach
    </button>
   
    `
    //projects context focus for carousel and tech stack
    const projectsFocus = document.createElement('section')
    projectsFocus.className = 'projects__focus';
    projectsFocus.append(scroll())
    projectsFocus.append(stack())

    //appending navigation tabs and focus from import to context container
    projectsContext.append(projectsNavigation)
    projectsContext.append(projectsFocus)

    //------------------functionality for navigation tabs and context focus
    //collecting navigation tabs
    const projectNavTabs = projectsNavigation.querySelectorAll('.projects__navItem')
    console.log(projectNavTabs);
    //hide and show focus elements - functions
    function showElement(element) {
        element.classList.remove("hidden");
    }
    function hideElement(element) {
        element.classList.add("hidden");
    }
    //show first navtabs focus element in projects context focus
    const focusElements = projectsFocus.children;
    Array.from(focusElements).forEach((element, index) => {
        if (index !== 0) {
            hideElement(element)
        }
    })
    projectNavTabs.forEach((navItem) => {
        navItem.addEventListener('click', (event) => {
            const btnFocus = event.target.dataset.nav;
            const clickedFocus = projectsFocus.querySelector(`#component__${btnFocus}`)
            Array.from(focusElements).forEach((element) => {
                hideElement(element)
            })
            showElement(clickedFocus)
        })
    })


    //appending components to the projectsEl section
    projectsEl.append(projectsContext)



    return projectsEl
}