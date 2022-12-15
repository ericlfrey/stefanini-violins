import closeOrder from '../functions/closeOrder';
import editItem from '../functions/editItem';
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
      submitItem(e);
    }
    if (e.target.id.includes('updateItemForm')) {
      editItem(e);
    }
    if (e.target.id.includes('paymentForm')) {
      closeOrder(e);
    }
  });
};

export default formEvents;
