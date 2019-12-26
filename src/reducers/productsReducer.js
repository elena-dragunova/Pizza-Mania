import _ from 'lodash';
import { FETCH_PRODUCTS } from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {...state, ..._.mapKeys(action.payload, 'id')};
    default:
      return state;
  }
}
