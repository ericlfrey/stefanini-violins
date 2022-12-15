import { getItemsByOrderId, patchItem, postItem } from '../api/itemData';
import viewOrderDetails from '../pages/viewOrderDetails';

const submitItem = (e) => {
  const [, firebaseKey] = e.target.id.split('--');
  const payload = {
    itemName: document.querySelector('#createItemName').value,
    price: document.querySelector('#createItemPrice').value,
    orderId: firebaseKey
  };
  postItem(payload).then(({ name }) => {
    const patchPayload = {
      firebaseKey: name
    };
    patchItem(patchPayload).then(() => {
      getItemsByOrderId(firebaseKey).then((arr) => {
        viewOrderDetails(firebaseKey, arr);
      });
    });
  });
};

export default submitItem;
