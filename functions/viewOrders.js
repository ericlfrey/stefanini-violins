import { getAllOrders } from '../api/orderData';
import viewOrdersPage from '../pages/viewOrdersPage';
import clearDOM from '../utils/clearDOM';

const viewOrders = () => {
  clearDOM();
  getAllOrders().then((orders) => {
    viewOrdersPage(orders);
  });
};

export default viewOrders;
