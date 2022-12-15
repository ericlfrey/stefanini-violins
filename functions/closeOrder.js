import { getOrderTotal, getSingleOrder } from '../api/orderData';

const closeOrder = (e) => {
  const [, firebasekey] = e.target.id.split('--');
  getSingleOrder(firebasekey).then((obj) => {
    console.warn(obj);
    getOrderTotal(firebasekey).then((total) => {
      const payload = {
        date: new Date().toLocaleString('en-US'),
        orderId: obj.firebaseKey,
        orderType: obj.orderType,
        paymentType: document.querySelector('#paymentSelect').value,
        tip: document.querySelector('#tipInput').value,
        total
      };
      console.warn(payload);
    });
  });
};

export default closeOrder;
