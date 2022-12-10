import renderToDOM from '../utils/renderToDOM';

const viewRevenuePage = () => {
  const domString = `
    <h1>View Revenue Page</h1>
  `;
  renderToDOM('#main', domString);
};

export default viewRevenuePage;
