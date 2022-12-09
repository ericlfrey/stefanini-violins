import { getAllOrders } from '../api/orderData';
import viewOrdersPage from '../pages/viewOrdersPage';
import clearDOM from '../utils/clearDOM';

const viewOrders = () => {
  console.warn('poop');
  clearDOM();
  viewOrdersPage();
  getAllOrders().then((order) => {
    console.warn(order);
  });
};

export default viewOrders;
