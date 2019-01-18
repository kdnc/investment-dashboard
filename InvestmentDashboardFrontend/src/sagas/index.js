import {investmentDataSaga} from './investmentSaga';

/**
 * Root saga registered for the application
 */
export default function* rootSaga() {
  yield [
    investmentDataSaga()
  ]
}