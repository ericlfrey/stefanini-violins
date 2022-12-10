import button from '../components/button';
import input from '../components/input';
import select from '../components/select';
import submitOrder from '../functions/submitOrder';
import renderToDOM from '../utils/renderToDOM';

const createOrderPage = (obj = {}) => {
  const domString = `
    <h1>${obj.firebaseKey ? 'Edit Order Page' : 'Create Order Page'}</h1>
    <div id="createOrderFormContainer"></div>
  `;
  renderToDOM('#formContainer', domString);
  let formString = '';
  formString += `
  <form id="createOrderForm">
  <div class="mb-3" id="createOrderNameDiv"></div>
  <div class="mb-3" id="createOrderPhoneDiv"></div>
  <div class="mb-3" id="createOrderEmailDiv"></div>
  <div class="mb-3" id="createOrderSelectDiv"></div>
  <div id="createOrderFormBtn"></div>
</form>
  `;
  // divId, type, inputClass, placeholder, id, required, label, value
  renderToDOM('#createOrderFormContainer', formString);
  input('#createOrderNameDiv', 'text', 'form-control', 'Name', 'createOrderName', 'required', true, `${obj.firebaseKey ? `${obj.name}` : ''}`);
  input('#createOrderPhoneDiv', 'phone', 'form-control', 'Customer Phone', 'createOrderPhone', 'required', true, `${obj.fireBaseKey ? `${obj.phone}` : ''}`);
  input('#createOrderEmailDiv', 'email', 'form-control', 'Customer Email', 'createOrderEmail', 'required', true, `${obj.fireBaseKey ? `${obj.email}` : ''}`);
  select('#createOrderSelectDiv', 'form-select', 'createOrderSelect', 'required', ['In Person', 'Phone'], true, 'Order Type');
  button('#createOrderFormBtn', 'submit', 'btn btn-primary', '', 'Submit', '');

  document.querySelector('#createOrderForm').addEventListener('submit', submitOrder);
};

export default createOrderPage;
