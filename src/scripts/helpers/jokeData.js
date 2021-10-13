import axios from 'axios';
// import { getPunchlineButton, getAnotherJokeButton } from './components/buttons';

const endpoint = 'https://v2.jokeapi.dev/joke/Programming?safe-mode&type=twopart';

const getJoke = async () => {
  const jokeCall = await axios.get(endpoint);

  return jokeCall.data;
};

export default getJoke;
