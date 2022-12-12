import viewOrders from '../functions/viewOrders';
import viewRevenue from '../functions/viewRevenue';
import createOrderPage from '../pages/createOrderPage';
import welcomePage from '../pages/welcomePage';
import renderToDom from '../utils/renderToDOM';
import image from './image';
import navLink from './navLink';
import searchBar from './searchBar';

const navBar = (user) => {
  const domString = `
  <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <span id="logoContainer"></span>
      <ul class="navbar-nav">
        <li class="nav-item" id="navViewOrders"></li>
        <li class="nav-item" id="navCreateOrder"></li>
        <li class="nav-item" id="navViewRevenue"></li>
        <li class="nav-item" id="navSearch"></li>
        <li class="nav-item" id="logoutBtn"></li>
      </ul>
    </div>
  </div>
</nav>
  `;
  renderToDom('#navBar', domString);
  // LOGO
  navLink('#logoContainer', '', 'logoLink', () => welcomePage(user));
  image('#logoLink', 'https://i9.skinnerinc.com/unsafe/261/1034261_view%2003_03.jpg', 'Hip Hop Pizza and Wangs Logo', 'logo');
  // VIEW ORDERS
  navLink('#navViewOrders', 'View Orders', 'navViewOrdersLink', viewOrders);
  // CREATE ORDER
  navLink('#navCreateOrder', 'Create Orders', 'navCreateOrderLink', createOrderPage);
  // REVENUE
  navLink('#navViewRevenue', 'View Revenue', 'navViewRevenueLink', viewRevenue);
  // SEARCH BAR
  searchBar();
};

export default navBar;
