import { deleteItem, getItemsByOrderId, getSingleItem } from '../api/itemData';
import { getSingleOrder } from '../api/orderData';
import viewOrderDetails from '../pages/viewOrderDetails';

const deleteItemCard = (firebaseKey) => {
  getSingleItem(firebaseKey).then((item) => {
    getSingleOrder(item.orderId).then((order) => {
      deleteItem(firebaseKey).then(() => {
        getItemsByOrderId(order.firebaseKey).then((arr) => {
          viewOrderDetails(order.firebaseKey, arr);
        });
      });
    });
  });
};

export default deleteItemCard;
