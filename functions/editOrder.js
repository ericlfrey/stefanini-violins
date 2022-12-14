import { patchOrder } from '../api/orderData';
import viewOrders from './viewOrders';

const editOrder = (e) => {
  const [, firebaseKey] = e.target.id.split('--');
  const payload = {
    name: document.querySelector('#createOrderName').value,
    phone: document.querySelector('#createOrderPhone').value,
    email: document.querySelector('#createOrderEmail').value,
    orderType: document.querySelector('#createOrderSelect').value,
    firebaseKey
  };
  patchOrder(payload).then(viewOrders);
};

export default editOrder;
