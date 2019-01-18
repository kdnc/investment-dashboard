import * as actions from '../../actions/investmentDataActions';
import * as types from '../../actions/actionTypes';

describe('Investment Actions', () => {
  it('should create an action to load investment data', () => {
    const pagingData = {
      pageSize: 5,
      pageNum: 1,
      sortOptions: 'investmentName_asc,commitmentDate_desc'
    };
    const expectedAction = {
      type: types.LOAD_INVESTMENT_DATA,
      payload: pagingData
    };
    expect(actions.loadInvestmentData(pagingData)).toEqual(expectedAction);
  });

  it('should create an action to mark loading investment data', () => {
    const expectedAction = {
      type: types.LOAD_INVESTMENT_DATA_LOADING,
      payload: { loading: true }
    };
    expect(actions.loadingInvestmentData()).toEqual(expectedAction);
  });

  it('should create an action to mark investment is loaded', () => {
    const investmentData = {
      pages: 2,
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
      sortOptions: 'investmentName_asc,commitmentDate_desc'
    };
    const expectedAction = {
      type: types.LOAD_INVESTMENT_DATA_SUCCESS,
      payload: { ...investmentData, loading: false }
    };
    expect(actions.loadInvestmentDataSuccess(investmentData)).toEqual(expectedAction);
  });

  it('should create an action to mark investment data loading is failed', () => {
    const expectedAction = {
      type: types.LOAD_INVESTMENT_DATA_FAILED,
      payload: { loading: false }
    };
    expect(actions.loadInvestmentDataFailed()).toEqual(expectedAction);
  });

});