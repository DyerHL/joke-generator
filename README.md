# Joke Generator [![Netlify Status](https://api.netlify.com/api/v1/badges/3f8371cf-9f76-4d10-9a09-7dd3deb3a848/deploy-status)](https://app.netlify.com/sites/joke-generator-webpack-hld/deploys)

## About the User
- The user of this app wants to get a random joke related to web development. 

## Features
- The user can click a "Get a Joke" button and will be given a joke setup.
- The user can then click the "Get Punchline" button and will be given the punchline for the joke.
- The user can click the "Get Another Joke" button to receive a new joke setup. 

## Code Snippet 
```javascript
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

```
## ScreenShots

![image](https://user-images.githubusercontent.com/86806913/136116812-c5ded1be-6905-472d-843c-f4749108a21c.png)

## Relevent Links
- [View App](https://joke-generator-webpack-hld.netlify.app)
- [View the mock](https://www.figma.com/file/dUTnw5fZfWCB2RCRJpS7Af/JJ-Wireframe-JS?node-id=0%3A1)

## Author
[Halie Dyer](https://github.com/DyerHL)



