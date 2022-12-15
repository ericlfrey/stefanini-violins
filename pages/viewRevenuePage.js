import { getRevenueDetails } from '../api/revenueData';
import clearDOM from '../utils/clearDOM';
import currency from '../utils/currency';
import renderToDOM from '../utils/renderToDOM';

const viewRevenuePage = () => {
  clearDOM();
  getRevenueDetails().then((obj) => {
    if (obj.combinedRevenue) {
      const domString = `
    <h1 class="mb-5">Revenue</h1>
    <h1 class="mb-5">Total Revenue: ${currency(obj.combinedRevenue)}</h1>
    <p>Date Range:</p>
    <p>Dates</p>
    <hr>
    <p>Total Tips: ${currency(obj.totalTips)}</p>
    <p>Total Walk-In Orders: ${obj.walkInOrders}</p>
    <p>Total Call-In Orders: ${obj.callInOrders}</p>
    <hr>
    <ul style="list-style-type:none;">Payment Types:
      <li>Cash- ${obj.cashOrders}</li>
      <li>Check- ${obj.checkOrders}</li>
      <li>Credit- ${obj.creditOrders}</li>
      <li>Debit- ${obj.debitOrders}</li>
      <li>Mobile- ${obj.mobileOrders}</li>
    </ul>
  `;
      renderToDOM('#main', domString);
    } else {
      const domString = `
      <h1 class="mb-5">No Revenue to Date</h1>
      `;
      renderToDOM('#main', domString);
    }
  });
};

export default viewRevenuePage;
