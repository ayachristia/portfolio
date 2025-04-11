import './styles/style.scss';
import layout from './layout';
import navigation from './components/navigation';
import hero from './components/hero';
layout()
document.querySelector('header').append(navigation())
document.querySelector('main').append(hero("Front End Developer", "A junior developers path to greatness...", "Aya christiansen"))


