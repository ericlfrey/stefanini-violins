import button from '../components/button';
import createOrder from '../functions/createOrder';
import viewOrders from '../functions/viewOrders';
import viewRevenue from '../functions/viewRevenue';
import renderToDOM from '../utils/renderToDOM';

const welcomePage = (user) => {
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
  button('#viewOrdersBtnDiv', 'btn btn-success welcome-pg-btn', 'viewOrdersBtn', 'View Orders', viewOrders);
  // CREATE ORDER
  button('#createOrderBtnDiv', 'btn btn-info welcome-pg-btn', 'createOrderBtn', 'Create Order', createOrder);
  // VIEW REVENUE
  button('#viewRevenueBtnDiv', 'btn btn-warning welcome-pg-btn', 'viewRevenueBtn', 'View Revenue', viewRevenue);
};

export default welcomePage;
