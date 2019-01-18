import {call, put, takeLatest} from 'redux-saga/effects'
import {LOAD_INVESTMENT_DATA} from './../actions/actionTypes'
import {loadInvestments} from '../services/InvestmentApi';
import {
  loadingInvestmentData, loadInvestmentDataFailed,
  loadInvestmentDataSuccess
} from '../actions/investmentDataActions';

/**
 * Run the saga to load investment data
 * @param {object} action - Dispatched action
 */
export function* loadInvestmentData(action) {
  try {
    yield put(loadingInvestmentData());
    const investmentData = yield call(loadInvestments, action.payload.pageSize, action.payload.pageNum, action.payload.sortOptions);
    yield put(loadInvestmentDataSuccess(investmentData));
  } catch (error) {
    yield put(loadInvestmentDataFailed());
  }
}

/**
 * Watch for LOAD_INVESTMENT_DATA action to run the saga
 */
export function* investmentDataSaga() {
  yield takeLatest(LOAD_INVESTMENT_DATA, loadInvestmentData);
}