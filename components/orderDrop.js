import { getClosedOrders, getOpenOrders } from '../api/orderData';
import viewOrders from '../functions/viewOrders';
import viewOrdersPage from '../pages/viewOrdersPage';
import renderToDOM from '../utils/renderToDOM';

const orderDrop = () => {
  const domString = `
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Filter Orders</a>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item" id="dropLinkOpen" href="#">Open Orders</a></li>
    <li><a class="dropdown-item" id="dropLinkClosed" href="#">Closed Orders</a></li>
    <li><a class="dropdown-item" id="dropLinkAll" href="#">All Orders</a></li>
  </ul>
  `;
  renderToDOM('#navOrderDrop', domString);
  document.querySelector('#navOrderDrop').addEventListener('click', (e) => {
    if (e.target.id === 'dropLinkOpen') {
      getOpenOrders().then(viewOrdersPage);
    }
    if (e.target.id === 'dropLinkClosed') {
      getClosedOrders().then(viewOrdersPage);
    }
    if (e.target.id === 'dropLinkAll') {
      viewOrders();
    }
  });
};

export default orderDrop;
