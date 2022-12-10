import renderToDOM from '../utils/renderToDOM';

const image = (divId, src, alt, id) => {
  const domString = `
    <img src=${src} alt="${alt}" id=${id}>
  `;
  renderToDOM(divId, domString);
};

export default image;
