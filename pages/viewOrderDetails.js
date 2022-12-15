import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';
import { getOrderTotal, getSingleOrder } from '../api/orderData';
import button from '../components/button';
import createItemPage from './createItemPage';
import closeOrderPage from './closeOrderPage';
import currency from '../utils/currency';

const viewOrderDetails = (firebaseKey, arr = []) => {
  clearDOM();
  getOrderTotal(firebaseKey).then((orderTotal) => {
    getSingleOrder(firebaseKey).then((obj) => {
      const domString = `
      <h1>Order Name: ${obj.name}</h1>
      <h1>Order Total: ${currency(orderTotal)}</h1>
      <div id="itemCardsContainer"></div>
      <div id="orderDetailsPageBtns">
        <span id="addItemBtnContainer"></span>
        <span id="goToPaymentBtnContainer"></span>
      </div>
    `;
      renderToDOM('#main', domString);
      if (arr.length > 0) {
        let cardString = '';
        arr.forEach((item) => {
          cardString += `
          <div class="card">
          <div class="card-body">
            <h5 class="card-title">${item.itemName}</h5>
            <p class="card-text">${currency(item.price)}</p>
            ${obj.statusOpen ? `
            <a href="#" class="card-link" id="itemEdit--${item.firebaseKey}">Edit</a>
            <a href="#" class="card-link" id="deleteItem--${item.firebaseKey}">Delete</a>` : ''}
          </div>
        </div>
          `;
          renderToDOM('#itemCardsContainer', cardString);
        });
      }
      if (obj.statusOpen) {
        button('#addItemBtnContainer', 'button', 'btn btn-success', 'addItemBtn', 'Add Item', () => {
          createItemPage(obj);
        });
        button('#goToPaymentBtnContainer', 'button', 'btn btn-primary', 'goToPaymentBtn', 'Go To Payment', () => {
          closeOrderPage(firebaseKey);
        });
      }
    });
  });
};

export default viewOrderDetails;
