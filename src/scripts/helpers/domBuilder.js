const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
   <div id="jokesContainer"></div>
   <div id="punchlineContainer"></div>
   <div id="buttonsContainer"></div>
   `;
};

export default domBuilder;
