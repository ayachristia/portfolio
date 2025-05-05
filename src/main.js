import './styles/style.scss';
import layout from './layout';
import navigation from './components/navigation';
import hero from './components/hero';
import splash from './components/splash';
import test from './components/test';

// window.addEventListener('load', () => {
//     setTimeout(() => {
//         layout();
//     }, 3000);


// });
layout()
document.querySelector('header').append(navigation())
document.querySelector('main').append(hero())
// splash() 
// test()



