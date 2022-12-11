import { patchOrder } from '../api/orderData';
import submitOrder from '../functions/submitOrder';
import viewOrders from '../functions/viewOrders';

const formEvents = () => {
  document.querySelector('#formContainer').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id === 'createOrderForm') {
      submitOrder(e);
    }
    if (e.target.id.includes('updateOrderForm')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#createOrderName').value,
        phone: document.querySelector('#createOrderPhone').value,
        email: document.querySelector('#createOrderEmail').value,
        orderType: document.querySelector('#createOrderSelect').value,
        statusOpen: true,
        firebaseKey
      };
      patchOrder(payload).then(viewOrders);
    }
  });
};

export default formEvents;
