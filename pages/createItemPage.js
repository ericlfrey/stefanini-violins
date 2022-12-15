import button from '../components/button';
import input from '../components/input';
import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const createItemPage = (obj = {}) => {
  clearDOM();
  const domString = `
    <h1>${obj.orderId ? 'Edit Item' : 'Create New Item'}</h1>
    <div id="createItemFormContainer"></div>
  `;
  renderToDOM('#formContainer', domString);
  let formString = '';
  formString += `
  <form id="${obj.orderId ? `updateItemForm--${obj.firebaseKey}` : `createItemForm--${obj.firebaseKey}`}">
  <div class="mb-3" id="createItemNameDiv"></div>
  <div class="mb-3" id="createItemPriceDiv"></div>
  <div id="createItemFormBtn"></div>
</form>
  `;
  // divId, type, inputClass, placeholder, id, required, label, value
  renderToDOM('#createItemFormContainer', formString);
  input('#createItemNameDiv', 'text', 'form-control', 'Item Name', 'createItemName', 'required', true, `${obj.itemName ? `${obj.itemName}` : ''}`);
  input('#createItemPriceDiv', 'phone', 'form-control', 'Item Price', 'createItemPrice', 'required', true, `${obj.price ? `${obj.price}` : ''}`);
  button('#createItemFormBtn', 'submit', 'btn btn-primary', '', 'Submit', '');
};

export default createItemPage;
