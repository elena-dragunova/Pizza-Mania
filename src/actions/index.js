import {FETCH_PRODUCTS, FILTER_PRODUCTS} from './types'
import products from '../api/products'

export const fetchProducts = () => async dispatch => {
  const response = await products.get('/products');

  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const filterProducts = (products, categories) => dispatch => {
  dispatch({ type: FILTER_PRODUCTS, payload: { products, categories } })
};
