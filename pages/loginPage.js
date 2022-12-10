import loginButton from '../components/buttons/loginButton';
import image from '../components/image';
import renderToDOM from '../utils/renderToDOM';

const loginPage = () => {
  const domString = `
    <h1>Welcome to Stefanini Violins!</h1>
    <div id="loginImage"></div>
    <div id="loginBtn"></div>
  `;
  renderToDOM('#app', domString);
  loginButton();
  image('#loginImage', 'https://i9.skinnerinc.com/unsafe/261/1034261_view%2003_03.jpg', 'Violin Scroll', 'loginLogo');
};

export default loginPage;
