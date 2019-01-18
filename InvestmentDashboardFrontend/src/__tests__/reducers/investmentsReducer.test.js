import investmentsReducer from '../../reducers/investmentsReducer';
import {
  LOAD_INVESTMENT_DATA_FAILED, LOAD_INVESTMENT_DATA_LOADING,
  LOAD_INVESTMENT_DATA_SUCCESS
} from '../../actions/actionTypes';

describe('Investment Reducer', () => {
  it('should return the initial state', () => {
    const expectedState = {
      pages: 0,
      rows: [],
      loading: false
    };
    expect(investmentsReducer(undefined, {})).toEqual(expectedState);
  });

  it('should handle LOAD_INVESTMENT_DATA_LOADING', () => {
    const expectedState = {
      pages: 0,
      rows: [],
      loading: true
    };
    const currentState = {
      pages: 0,
      rows: [],
      loading: false
    };
    const action = {
      type: LOAD_INVESTMENT_DATA_LOADING,
      payload: {
        loading: true
      }
    };
    expect(investmentsReducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle LOAD_INVESTMENT_DATA_SUCCESS', () => {
    const investmentData = {
      pages: 0,
      rows: [
        {
          id: 999,
          investmentName: "Investment 999",
          commitmentDate: "2021-01-09T00:00:00+00:00",
          marketValue: 5626
        },
        {
          id: 998,
          investmentName: "Investment 998",
          commitmentDate: "2020-04-18T00:00:00+00:00",
          marketValue: 5474
        },
      ],
    };
    const expectedState = {
      ...investmentData,
      loading: false
    };
    const currentState = {
      pages: 0,
      rows: [],
      loading: true
    };
    const action = {
      type: LOAD_INVESTMENT_DATA_SUCCESS,
      payload: {
        ...investmentData,
        loading: false
      }
    };
    expect(investmentsReducer(currentState, action)).toEqual(expectedState);
  });


  it('should handle LOAD_INVESTMENT_DATA_FAILED', () => {
    const expectedState = {
      pages: 0,
      rows: [],
      loading: false
    };
    const currentState = {
      pages: 0,
      rows: [],
      loading: true
    };
    const action = {
      type: LOAD_INVESTMENT_DATA_FAILED,
      payload: {
        loading: false
      }
    };
    expect(investmentsReducer(currentState, action)).toEqual(expectedState);
  });
});