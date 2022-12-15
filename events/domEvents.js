import { getItemsByOrderId, getSingleItem } from '../api/itemData';
import { deleteOrder, getSingleOrder } from '../api/orderData';
import deleteItemCard from '../functions/deleteItemCard';
import viewOrders from '../functions/viewOrders';
import createItemPage from '../pages/createItemPage';
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
      getItemsByOrderId(firebaseKey).then((arr) => {
        viewOrderDetails(firebaseKey, arr);
      });
    }
    if (e.target.id.includes('itemEdit')) {
      getSingleItem(firebaseKey).then(createItemPage);
    }
    if (e.target.id.includes('deleteItem')) {
      deleteItemCard(firebaseKey);
    }
  });
};

export default domEvents;
