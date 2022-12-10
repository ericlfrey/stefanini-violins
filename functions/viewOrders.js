import { getAllOrders } from '../api/orderData';
import viewOrdersPage from '../pages/viewOrdersPage';
import clearDOM from '../utils/clearDOM';

const viewOrders = () => {
  clearDOM();
  getAllOrders().then(viewOrdersPage);
};

export default viewOrders;
