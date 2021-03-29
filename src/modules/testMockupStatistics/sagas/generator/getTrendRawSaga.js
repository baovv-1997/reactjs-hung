import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../../apis';
import * as CompanyAction from '../../redux';

// worker Saga: will be fired on SIGN_IN actions
function* getDataTestMKRawTableGenerator(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_TEST_MOCKUP_STATISTIC_GENERATOR_RAM, action.payload)
    );

    if (response.ok) {
      const { data } = response;
      // In case: signup request success
      yield put({
        type: CompanyAction.getDataTestMKRawTableGeneratorSuccess,
        data,
        params: action.payload,
      });
    } else {
      // In case: signup request failed
      yield put({
        type: CompanyAction.getDataTestMKRawTableGeneratorFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: CompanyAction.getDataTestMKRawTableGeneratorFailed });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* getDataTestMKRawTableGeneratorSaga() {
  yield takeLatest(
    CompanyAction.getDataTestMKRawTableGenerator,
    getDataTestMKRawTableGenerator
  );
}

export default getDataTestMKRawTableGeneratorSaga;
