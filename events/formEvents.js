import editOrder from '../functions/editOrder';
import submitItem from '../functions/submitItem';
import submitOrder from '../functions/submitOrder';

const formEvents = () => {
  document.querySelector('#formContainer').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id === 'createOrderForm') {
      submitOrder();
    }
    if (e.target.id.includes('updateOrderForm')) {
      editOrder(e);
    }
    if (e.target.id.includes('createItemForm')) {
      const [, firebaseKey] = e.target.id.split('--');
      submitItem(firebaseKey);
    }
  });
};

export default formEvents;
