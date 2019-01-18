import * as TYPES from '../actions/actionTypes';

const initialState = {
  pages: 0,
  rows: [],
  loading: false
};

/**
 * Reducer for the investments data
 * @param {object} state - State for the investment reducer
 * @param {object} action - Dispatched action object
 * @return {object} reducer state
 */
function investmentsReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.LOAD_INVESTMENT_DATA_LOADING:
      return { ...state, ...action.payload };
    case TYPES.LOAD_INVESTMENT_DATA_SUCCESS:
      return { ...state, ...action.payload };
    case TYPES.LOAD_INVESTMENT_DATA_FAILED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default investmentsReducer;