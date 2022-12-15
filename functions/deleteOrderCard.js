import { deleteItem, getItemsByOrderId } from '../api/itemData';
import { deleteOrder } from '../api/orderData';
import viewOrders from './viewOrders';

const deleteOrderCard = (firebaseKey) => {
  getItemsByOrderId(firebaseKey).then((arr) => {
    arr.forEach((item) => deleteItem(item.firebaseKey));
  }).then(() => {
    deleteOrder(firebaseKey).then(viewOrders);
  });
};

export default deleteOrderCard;
