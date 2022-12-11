import renderToDOM from '../utils/renderToDOM';

const viewOrdersPage = (arr) => {
  const domString = `
    <h1>View Orders Page</h1>
    <div id="orderCards"></div>
  `;
  renderToDOM('#main', domString);
  let cardString = '';
  arr.forEach((item) => {
    cardString += `
  <div class="card">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${item.statusOpen === true ? 'OPEN' : 'CLOSED'}</h6>
    <p class="card-text">${item.phone}</p>
    <p class="card-text">${item.email}</p>
    <p class="card-text">${item.orderType}</p>
    <a href="#" class="card-link" id="orderDetails--${item.firebaseKey}">Details</a>
    <a href="#" class="card-link" id="orderEdit--${item.firebaseKey}">Edit</a>
    <a href="#" class="card-link" id="deleteOrder--${item.firebaseKey}">Delete</a>
  </div>
</div>
  `;
  });
  renderToDOM('#orderCards', cardString);
};

export default viewOrdersPage;
