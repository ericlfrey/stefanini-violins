import button from '../components/button';
import viewOrders from '../functions/viewOrders';
import viewRevenue from '../functions/viewRevenue';
import clearDOM from '../utils/clearDOM';
import renderToDOM from '../utils/renderToDOM';
import createOrderPage from './createOrderPage';

const welcomePage = (user) => {
  clearDOM();
  const domString = `
  <div id="welcomePage">
    <h1>Welcome, ${user.displayName}</h1>
    <div id="welcomePageButtons">
      <div id="viewOrdersBtnDiv"></div>
      <div id="createOrderBtnDiv"></div>
      <div id="viewRevenueBtnDiv"></div>
    </div>
  </div>
  `;
  renderToDOM('#main', domString);
  // VIEW ORDERS
  button('#viewOrdersBtnDiv', 'button', 'btn btn-success welcome-pg-btn', 'viewOrdersBtn', 'View Orders', viewOrders);
  // CREATE ORDER
  button('#createOrderBtnDiv', 'button', 'btn btn-info welcome-pg-btn', 'createOrderBtn', 'Create Order', createOrderPage);
  // VIEW REVENUE
  button('#viewRevenueBtnDiv', 'button', 'btn btn-warning welcome-pg-btn', 'viewRevenueBtn', 'View Revenue', viewRevenue);
};

export default welcomePage;
