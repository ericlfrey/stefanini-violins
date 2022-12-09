import loginButton from '../components/buttons/loginButton';
import renderToDOM from '../utils/renderToDOM';

const loginPage = () => {
  const domString = `
    <h1>Welcome to Stefanini Violins!</h1>
    <div id="loginBtn"></div>
  `;
  renderToDOM('#app', domString);
  loginButton();
};

export default loginPage;
