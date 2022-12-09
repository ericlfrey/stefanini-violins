import { getAllRevenue } from '../api/revenueData';
import viewRevenuePage from '../pages/viewRevenuePage';
import clearDOM from '../utils/clearDOM';

const viewRevenue = () => {
  clearDOM();
  getAllRevenue().then((revenue) => {
    console.warn(revenue);
    viewRevenuePage();
  });
};

export default viewRevenue;
