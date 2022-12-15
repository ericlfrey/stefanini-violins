import { getSingleOrder, patchOrder } from '../api/orderData';
import submitRevenue from './submitRevenue';

const closeOrder = (e) => {
  const [, firebaseKey] = e.target.id.split('--');
  getSingleOrder(firebaseKey).then(() => {
    const payload = {
      statusOpen: false,
      firebaseKey
    };
    patchOrder(payload).then(() => {
      submitRevenue(firebaseKey);
    });
  });
};

export default closeOrder;
