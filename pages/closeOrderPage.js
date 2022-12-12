import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const closeOrderPage = () => {
  clearDOM();
  const domString = `
    <h1>Close Order Page</h1>
  `;
  renderToDOM('#formContainer', domString);
};

export default closeOrderPage;
