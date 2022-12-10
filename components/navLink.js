import renderToDOM from '../utils/renderToDOM';

const navLink = (divId, linkText, id, funcName) => {
  const domString = `
  <a class="nav-link" href="#" id=${id}>${linkText}</a>
  `;
  renderToDOM(divId, domString);
  document.querySelector(`#${id}`).addEventListener('click', funcName);
};

export default navLink;
