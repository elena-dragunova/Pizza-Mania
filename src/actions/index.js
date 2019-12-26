import { FETCH_PRODUCTS } from './types';
import products from '../api/products'

export const fetchProducts = () => async dispatch => {
  const response = await products.get('/products');

  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};
