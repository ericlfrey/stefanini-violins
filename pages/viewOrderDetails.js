import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const viewOrderDetails = () => {
  clearDOM();
  const domString = `
    <h1>View Order Details</h1>
  `;
  renderToDOM('#main', domString);
};

export default viewOrderDetails;
