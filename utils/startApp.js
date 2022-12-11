import logoutButton from '../components/buttons/logoutButton';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import welcomePage from '../pages/welcomePage';
import domBuilder from './domBuilder';

const startApp = (user) => {
  domBuilder();
  navBar(user);
  logoutButton();
  welcomePage(user);
  domEvents();
};

export default startApp;
