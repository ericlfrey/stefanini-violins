import { getAllItems } from '../api/itemData';
import createOrderPage from '../pages/createOrderPage';
import clearDOM from '../utils/clearDOM';

const createOrder = () => {
  clearDOM();
  getAllItems().then((items) => {
    console.warn(items);
    createOrderPage();
  });
};

export default createOrder;
