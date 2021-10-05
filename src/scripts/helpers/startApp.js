import domBuilder from './domBuilder';
import { getJokeButton } from './components/buttons';
import domEvents from '../domEvents';

const startApp = () => {
  domBuilder();
  getJokeButton();
  domEvents();
};

export default startApp;
