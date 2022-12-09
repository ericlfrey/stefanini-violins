import renderToDOM from '../utils/renderToDOM';

const button = (divId, className, id, text, funcName) => {
  const btnString = `
  <button type="button" class="btn btn-${className}" id=${id}>${text}</button>
  `;
  renderToDOM(divId, btnString);
  document.querySelector(`#${id}`).addEventListener('click', funcName);
};

export default button;
