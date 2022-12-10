import { patchOrder, postOrder } from '../api/orderData';
import viewOrders from './viewOrders';

const submitOrder = () => {
  const payload = {
    name: document.querySelector('#createOrderName').value,
    phone: document.querySelector('#createOrderPhone').value,
    email: document.querySelector('#createOrderEmail').value,
    orderType: document.querySelector('#createOrderSelect').value,
    statusOpen: true,
    items: ''
  };
  postOrder(payload).then(({ name }) => {
    const patchPayload = {
      firebaseKey: name
    };
    patchOrder(patchPayload).then(viewOrders);
  });
};

export default submitOrder;
