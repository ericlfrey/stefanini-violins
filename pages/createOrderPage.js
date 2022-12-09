import renderToDOM from '../utils/renderToDOM';

const createOrderPage = () => {
  const domString = `
    <h1>Create Order Page</h1>
  `;
  renderToDOM('#main', domString);
};

export default createOrderPage;
