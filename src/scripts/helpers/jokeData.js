import axios from 'axios';
import { getPunchlineButton, getAnotherJokeButton } from './components/buttons';

const endpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';

const getJoke = async () => {
  const jokeCall = await axios.get(endpoint);

  return jokeCall.data;
};

const showJoke = (joke) => {
  document.querySelector('#jokesContainer').innerHTML = `
    <h3>${joke.setup}</h3>
    `;
  getPunchlineButton();
};

// const getPunchline = async (id) => {
//   const jokeCall = await axios.get(id);
//   const punchline = await axios.get(id);
//   return ({
//     punchline,
//     ...jokeCall
//   });
// };

const showPunchline = (joke) => {
  document.querySelector('#punchlineContainer').innerHTML = `
    <h1>${joke.delivery}</h1>
    `;
  getAnotherJokeButton();
};

export {
  getJoke,
  showJoke,
  // getPunchline,
  showPunchline
};
