import { patchItem, postItem } from '../api/itemData';
import viewOrderDetails from '../pages/viewOrderDetails';

const submitItem = (firebaseKey) => {
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
      viewOrderDetails(firebaseKey);
    });
  });
};

export default submitItem;
