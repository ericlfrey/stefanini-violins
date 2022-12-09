import renderToDOM from '../utils/renderToDOM';

const viewOrdersPage = () => {
  const domString = `
    <h1>View Orders Page</h1>
  `;
  renderToDOM('#main', domString);
};

export default viewOrdersPage;
