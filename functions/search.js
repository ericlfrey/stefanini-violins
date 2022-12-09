const search = (e) => {
  const searchBar = document.querySelector('#searchBar');
  if (e.keyCode === 13) {
    const searchValue = searchBar.value.toLowerCase();
    console.warn(searchValue);
    searchBar.value = '';
  }
};

export default search;
