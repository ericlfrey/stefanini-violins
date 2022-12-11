import { deleteOrder } from '../api/orderData';
import viewOrders from '../functions/viewOrders';

const domEvents = () => {
  document.querySelector('#main').addEventListener('click', (e) => {
    if (e.target.id.includes('deleteOrder')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteOrder(firebaseKey).then(viewOrders);
    }
  });
};

export default domEvents;
