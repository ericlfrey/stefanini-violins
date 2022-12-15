import { getItemsByOrderId, getSingleItem, patchItem } from '../api/itemData';
import { getSingleOrder } from '../api/orderData';
import viewOrderDetails from '../pages/viewOrderDetails';

const editItem = (e) => {
  const [, firebaseKey] = e.target.id.split('--');
  const payload = {
    itemName: document.querySelector('#createItemName').value,
    price: document.querySelector('#createItemPrice').value,
    firebaseKey
  };
  patchItem(payload).then(() => {
    getSingleItem(firebaseKey).then((item) => {
      getSingleOrder(item.orderId).then((obj) => {
        getItemsByOrderId(obj.firebaseKey).then((arr) => {
          viewOrderDetails(obj.firebaseKey, arr);
        });
      });
    });
  });
};

export default editItem;
