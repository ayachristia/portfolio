import './styles/style.scss';
import layout from './layout';
import navigation from './components/navigation/navigation.js';
import hero from './components/hero/hero.js';
import splash from './components/splash/splash.js';
import test from './components/test';
import about from './components/about/about.js';
import projects from './components/projects/projects.js';

// window.addEventListener('load', () => {
//     setTimeout(() => {
//         layout();
//     }, 3000);


// });
layout()
document.querySelector('header').append(navigation())
document.querySelector('main').append(hero())
document.querySelector('main').appendChild(about())
document.querySelector('main').appendChild(projects())

// splash()
// test()



