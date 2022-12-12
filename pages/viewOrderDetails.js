import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';
import { getSingleOrder } from '../api/orderData';
import button from '../components/button';
import createItemPage from './createItemPage';
import closeOrderPage from './closeOrderPage';

const viewOrderDetails = (e) => {
  clearDOM();
  const [, firebaseKey] = e.target.id.split('--');
  getSingleOrder(firebaseKey).then((obj) => {
    const domString = `
    <h1>Total: $${obj.total}</h1>
    <div id="itemCardsContainer"></div>
    <div id="orderDetailsPageBtns">
      <span id="addItemBtnContainer"></span>
      <span id="goToPaymentBtnContainer"></span>
    </div>
  `;
    renderToDOM('#main', domString);
    button('#addItemBtnContainer', 'button', 'btn btn-success', 'addItemBtn', 'Add Item', createItemPage);
    button('#goToPaymentBtnContainer', 'button', 'btn btn-primary', 'goToPaymentBtn', 'Go To Payment', closeOrderPage);
  });
};

export default viewOrderDetails;
