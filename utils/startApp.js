import renderToDOM from './renderToDOM';

const startApp = (user) => {
  const domString = `
  <h1>Welcome, ${user.displayName}</h1>
  `;
  renderToDOM('#app', domString);
};

export default startApp;
