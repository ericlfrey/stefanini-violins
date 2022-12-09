import search from '../functions/search';
import renderToDOM from '../utils/renderToDOM';

const searchBar = () => {
  const domString = `
    <input type="text" class="form-control" placeholder="Search Orders" id="searchBar"></input>
  `;
  renderToDOM('#navSearch', domString);
  document.querySelector('#searchBar').addEventListener('keyup', search);
};

export default searchBar;
