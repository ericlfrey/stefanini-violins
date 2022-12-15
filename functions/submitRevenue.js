import { getItemsByOrderId } from '../api/itemData';
import { getOrderTotal, getSingleOrder } from '../api/orderData';
import { patchRevenue, postRevenue } from '../api/revenueData';
import viewOrderDetails from '../pages/viewOrderDetails';

const submitRevenue = (firebaseKey) => {
  getSingleOrder(firebaseKey).then((obj) => {
    getOrderTotal(firebaseKey).then((total) => {
      const payload = {
        date: new Date().toLocaleString('en-US'),
        orderId: obj.firebaseKey,
        orderType: obj.orderType,
        paymentType: document.querySelector('#paymentSelect').value,
        tip: document.querySelector('#tipInput').value,
        total
      };
      postRevenue(payload).then(({ name }) => {
        const patchPayload = {
          firebaseKey: name
        };
        patchRevenue(patchPayload).then(() => {
          getItemsByOrderId(obj.firebaseKey).then((arr) => {
            viewOrderDetails(obj.firebaseKey, arr);
          });
        });
      });
    });
  });
};

export default submitRevenue;
