import renderToDOM from '../utils/renderToDOM';

const select = (divId, selectClass, id, required, options, label, text) => {
  let optionString = '';
  const domString = label === true ? `
  <label for=${id} class="form-label">${text}</label>
  <select class="${selectClass}" id=${id} ${required}></select>
  ` : `
  <select class="${selectClass}" id=${id} ${required}></select>
  `;
  renderToDOM(divId, domString);
  options.forEach((item) => {
    optionString += `
    <option value="${item}">${item}</option>
    `;
  });
  renderToDOM(`#${id}`, optionString);
};

export default select;
