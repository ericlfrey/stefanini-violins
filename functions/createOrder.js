import createOrderPage from '../pages/createOrderPage';
import clearDOM from '../utils/clearDOM';

const createOrder = () => {
  clearDOM();
  createOrderPage();
};

export default createOrder;
