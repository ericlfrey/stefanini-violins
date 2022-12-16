import { getAllOrders } from '../api/orderData';
import viewOrdersPage from '../pages/viewOrdersPage';

const search = (e) => {
  const searchBar = document.querySelector('#searchBar');
  if (e.keyCode === 13) {
    const searchValue = searchBar.value.toLowerCase();
    getAllOrders().then((arr) => {
      const filteredArr = arr.filter((item) => item.name.toLowerCase().includes(searchValue) || item.phone.includes(searchValue));
      viewOrdersPage(filteredArr);
    });
    searchBar.value = '';
  }
};

export default search;
