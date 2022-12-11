import renderToDOM from '../utils/renderToDOM';

const input = (divId, type, inputClass, placeholder, id, required, label, value) => {
  const domString = label === true ? `
    <label for=${id} class="form-label">${placeholder}</label>
    <input type=${type} placeholder="${placeholder}" class="${inputClass}" id=${id} ${required} value="${value}">
  `
    : `
    <input type=${type} placeholder=${placeholder} class="${inputClass}" id=${id} ${required}/>
  `;
  renderToDOM(divId, domString);
};

export default input;
