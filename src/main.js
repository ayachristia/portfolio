import './styles/style.scss';
import layout from './layout';
import navigation from './components/navigation/navigation.js';
import hero from './components/hero/hero.js';
import splash from './components/splash/splash.js';
import about from './components/about/about.js';
import projects from './components/projects/projects.js';


window.onload = function () {
    if (performance.navigation.type === 1) {
        window.scrollTo(0, 0);
    }

    if (window.location.hash) {
        history.pushState("", document.title, window.location.pathname + window.location.search);
        window.scrollTo(0, 0);
    }
};
layout()
splash()



document.querySelector('body').append(navigation())
document.querySelector('main').append(hero())
document.querySelector('main').append(about())
document.querySelector('main').append(projects())




