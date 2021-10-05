import { getAnotherJokeButton } from './helpers/components/buttons';
import { getJoke, showPunchline, showJoke } from './helpers/jokeData';

const domEvents = () => {
  document.querySelector('#buttonsContainer').addEventListener('click', (e) => {
    // CLICK EVENT FOR GET A JOKE BUTTON
    if (e.target.id.includes('Joke')) {
      document.querySelector('#punchlineContainer').innerHTML = `
      `;
      getJoke().then(showJoke);
    }
    // CLICK EVENT FOR GET PUNCHLINE BUTTON
    if (e.target.id.includes('getPunchline')) {
      getJoke().then(showPunchline);
      getAnotherJokeButton();
    }
  });
};

export default domEvents;
