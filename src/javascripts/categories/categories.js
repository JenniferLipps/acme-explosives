import categoryData from '../helpers/data/categoriesData';
import util from '../helpers/util';

const categoryBuilder = (categoryArray) => {
  let domString = '';
  categoryArray.forEach((category) => {
    domString += '<div class="card">';
    domString += '<div class="card-body">';
    domString += `<div>${category.id}</div>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('categoryDiv', domString);
};

const initCategories = () => {
  categoryData.loadCategories()
    .then((resp) => {
      const categoriesFromDb = resp.data.categories;
      const categoryArray = categoriesFromDb;
      categoryBuilder(categoryArray);
    })
    .catch(err => console.error('error on categories', err));
};

export default { initCategories };
