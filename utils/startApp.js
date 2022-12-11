import logoutButton from '../components/buttons/logoutButton';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import welcomePage from '../pages/welcomePage';
import domBuilder from './domBuilder';

const startApp = (user) => {
  domBuilder();
  navBar(user);
  logoutButton();
  welcomePage(user);
  domEvents();
  formEvents();
};

export default startApp;
