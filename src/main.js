import './styles/style.scss';
import layout from './layout';
import navigation from './components/navigation/navigation.js';
import hero from './components/hero/hero.js';
import splash from './components/splash/splash.js';
import about from './components/about/about.js';
import projects from './components/projects/projects.js';
import scroll from './components/projects/projectslider.js';

// window.addEventListener('load', () => {
//     setTimeout(() => {
//         layout();
//     }, 3000);
console.log(projects);
window.onload = function () {
    // Force scroll to top on page refresh
    if (performance.navigation.type === 1) { // 1 indicates refresh
        window.scrollTo(0, 0);
    }

    // Also handle fragment removal
    if (window.location.hash) {
        // Remove the fragment
        history.pushState("", document.title, window.location.pathname + window.location.search);
        // Ensure scroll to top
        window.scrollTo(0, 0);
    }
};
// });
layout()
// splash()



document.querySelector('header').append(navigation())
document.querySelector('main').append(hero())
document.querySelector('main').append(about())
document.querySelector('main').append(projects())
// document.querySelector('main').appendChild(scroll())

// test()



