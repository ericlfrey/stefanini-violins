import button from '../components/button';
import input from '../components/input';
import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const createItemPage = (obj = {}) => {
  clearDOM();
  const domString = `
    <h1>${obj.firebaseKey ? 'Edit Item Page' : 'Create Item Page'}</h1>
    <div id="createItemFormContainer"></div>
  `;
  renderToDOM('#formContainer', domString);
  let formString = '';
  formString += `
  <form id="${obj.firebaseKey ? `updateItemForm--${obj.firebaseKey}` : 'createItemForm'}">
  <div class="mb-3" id="createItemNameDiv"></div>
  <div class="mb-3" id="createItemPriceDiv"></div>
  <div id="createItemFormBtn"></div>
</form>
  `;
  // divId, type, inputClass, placeholder, id, required, label, value
  renderToDOM('#createItemFormContainer', formString);
  input('#createItemNameDiv', 'text', 'form-control', 'Name', 'createItemName', 'required', true, `${obj.name ? `${obj.name}` : ''}`);
  input('#createItemPriceDiv', 'phone', 'form-control', 'Customer Phone', 'createItemPrice', 'required', true, `${obj.phone ? `${obj.phone}` : ''}`);
  button('#createItemFormBtn', 'submit', 'btn btn-primary', '', 'Submit', '');
};

export default createItemPage;
