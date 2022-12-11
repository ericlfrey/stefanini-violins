import button from '../components/button';
import input from '../components/input';
import select from '../components/select';
import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const createOrderPage = (obj = {}) => {
  clearDOM();
  const domString = `
    <h1>${obj.firebaseKey ? 'Edit Order Page' : 'Create Order Page'}</h1>
    <div id="createOrderFormContainer"></div>
  `;
  renderToDOM('#formContainer', domString);
  let formString = '';
  formString += `
  <form id="${obj.firebaseKey ? `updateOrderForm--${obj.firebaseKey}` : 'createOrderForm'}">
  <div class="mb-3" id="createOrderNameDiv"></div>
  <div class="mb-3" id="createOrderPhoneDiv"></div>
  <div class="mb-3" id="createOrderEmailDiv"></div>
  <div class="mb-3" id="createOrderSelectDiv"></div>
  <div id="createOrderFormBtn"></div>
</form>
  `;
  // divId, type, inputClass, placeholder, id, required, label, value
  renderToDOM('#createOrderFormContainer', formString);
  input('#createOrderNameDiv', 'text', 'form-control', 'Name', 'createOrderName', 'required', true, `${obj.name ? `${obj.name}` : ''}`);
  input('#createOrderPhoneDiv', 'phone', 'form-control', 'Customer Phone', 'createOrderPhone', 'required', true, `${obj.phone ? `${obj.phone}` : ''}`);
  input('#createOrderEmailDiv', 'email', 'form-control', 'Customer Email', 'createOrderEmail', 'required', true, `${obj.email ? `${obj.email}` : ''}`);
  select('#createOrderSelectDiv', 'form-select', 'createOrderSelect', 'required', ['In Person', 'Phone'], true, 'Order Type');
  if (obj.orderType) {
    document.querySelector('#createOrderSelect').value = obj.orderType;
  }
  button('#createOrderFormBtn', 'submit', 'btn btn-primary', '', 'Submit', '');
};

export default createOrderPage;
