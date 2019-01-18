import {LOAD_INVESTMENTS_URL} from './Constants';
import {invokeJsonGet} from './Api';

/**
 * Load investment API request
 * @param {int} pageSize - Data set size to be retrieved
 * @param {int} pageNum - Page number used for retrieving data
 * @param {string} sortOptions - Sorting option to be used
 * @return {Promise} Promise of the API invocation
 */
export function loadInvestments(pageSize, pageNum, sortOptions) {
  const url = `${LOAD_INVESTMENTS_URL}?pageSize=${pageSize}&pageNum=${pageNum}&sortOptions=${sortOptions}`;
  return invokeJsonGet(url);
}