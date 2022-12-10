import { deleteOrder, getAllOrders } from '../api/orderData';

const domEvents = () => {
  document.querySelector('#main').addEventListener('click', (e) => {
    if (e.target.id.includes('deleteOrder')) {
      const [, firebaseKey] = e.target.id.split('--');
      deleteOrder(firebaseKey).then(() => {
        getAllOrders().then((orders) => {
          console.warn(orders);
        });
      });
    }
  });
};

export default domEvents;
