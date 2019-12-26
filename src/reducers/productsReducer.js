import {FETCH_PRODUCTS, FILTER_PRODUCTS} from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [...action.payload];
    case FILTER_PRODUCTS:
      return action.payload.products.filter((product) => {
        return action.payload.categories.indexOf(product.category) >= 0;
      });
    default:
      return state;
  }
}
