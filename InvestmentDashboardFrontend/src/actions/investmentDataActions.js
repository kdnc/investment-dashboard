import {
  LOAD_INVESTMENT_DATA, LOAD_INVESTMENT_DATA_FAILED, LOAD_INVESTMENT_DATA_LOADING,
  LOAD_INVESTMENT_DATA_SUCCESS
} from './actionTypes';

/**
 * Action creator for loading investment data
 * @param {object} pagingData - paging information to be used when loading investments data
 * @return {object} action object
 */
export function loadInvestmentData(pagingData) {
  return {
    type: LOAD_INVESTMENT_DATA,
    payload: pagingData
  }
}

/**
 * Action creator for marking investment data is loading
 * @return {object} action object
 */
export function loadingInvestmentData() {
  return {
    type: LOAD_INVESTMENT_DATA_LOADING,
    payload: {
      loading: true
    }
  }
}

/**
 * Action creator for marking investment data is loaded
 * @param {object} investmentData - loaded investment data
 * @return {object} action object
 */
export function loadInvestmentDataSuccess(investmentData) {
  return {
    type: LOAD_INVESTMENT_DATA_SUCCESS,
    payload: {...investmentData, loading: false}
  }
}

/**
 * Action creator for marking investment data loading failed
 * @return {object} action object
 */
export function loadInvestmentDataFailed() {
  return {
    type: LOAD_INVESTMENT_DATA_FAILED,
    payload: {
      loading: false
    }
  }
}


