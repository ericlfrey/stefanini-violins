import { getAllOrders } from '../api/orderData';
import viewOrdersPage from '../pages/viewOrdersPage';
import clearDOM from '../utils/clearDOM';

const viewOrders = () => {
  clearDOM();
  getAllOrders().then((order) => {
    console.warn(order);
    viewOrdersPage();
  });
};

export default viewOrders;
