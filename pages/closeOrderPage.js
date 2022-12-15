import button from '../components/button';
import input from '../components/input';
import select from '../components/select';
import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';

const closeOrderPage = (firebaseKey) => {
  clearDOM();
  const domString = `
    <h1>Payment</h1>
    <div id="paymentFormContainer"></div>
  `;
  renderToDOM('#formContainer', domString);

  const formString = `
  <form id="paymentForm--${firebaseKey}">
    <div id="paymentSelectDiv"></div>
    <div id="tipInputDiv"></div>
    <div id="closeOrderBtnDiv"></div>
  </form>
  `;
  renderToDOM('#paymentFormContainer', formString);

  const options = ['Cash', 'Check', 'Debit', 'Credit', 'Mobile'];
  select('#paymentSelectDiv', 'form-select', 'paymentSelect', 'required', options, true, 'PaymentType');
  input('#tipInputDiv', 'text', 'form-control', 'Tip Amount', 'tipInput', '', true, '');
  button('#closeOrderBtnDiv', 'submit', 'btn btn-success mt-4', '', 'Close Order', '');
};

export default closeOrderPage;
