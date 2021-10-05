import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import startApp from './helpers/startApp';

const init = () => {
  document.querySelector('#app').innerHTML = `
  `;
  startApp();
};

init();
