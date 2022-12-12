import { deleteOrder, getSingleOrder } from '../api/orderData';
import viewOrders from '../functions/viewOrders';
import createOrderPage from '../pages/createOrderPage';
import viewOrderDetails from '../pages/viewOrderDetails';

const domEvents = () => {
  document.querySelector('#main').addEventListener('click', (e) => {
    const [, firebaseKey] = e.target.id.split('--');
    if (e.target.id.includes('deleteOrder')) {
      deleteOrder(firebaseKey).then(viewOrders);
    }
    if (e.target.id.includes('orderEdit')) {
      getSingleOrder(firebaseKey).then((order) => {
        createOrderPage(order);
      });
    }
    if (e.target.id.includes('orderDetails')) {
      viewOrderDetails(e);
    }
  });
};

export default domEvents;
