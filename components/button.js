import renderToDOM from '../utils/renderToDOM';

const button = (divId, type, className, id, text, funcName) => {
  const btnString = `
  <button type=${type} class="${className}" id=${id}>${text}</button>
  `;
  renderToDOM(divId, btnString);
  if (id) {
    document.querySelector(`#${id}`).addEventListener('click', funcName);
  }
};

export default button;
