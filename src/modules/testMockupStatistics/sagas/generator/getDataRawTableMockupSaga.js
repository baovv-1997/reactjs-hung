import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../../apis';
import * as CompanyAction from '../../redux';

// worker Saga: will be fired on SIGN_IN actions
function* getDataRawTableMockupStatisticGenerator(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_TEST_MOCKUP_STATISTIC_GENERATOR_RAM, action.payload)
    );

    if (response.ok) {
      const { data } = response;
      // In case: signup request success
      yield put({
        type: CompanyAction.getDataRawTableMockupStatisticGeneratorSuccess,
        data,
        params: action.payload,
      });
    } else {
      // In case: signup request failed
      yield put({
        type: CompanyAction.getDataRawTableMockupStatisticGeneratorFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: CompanyAction.getDataRawTableMockupStatisticGeneratorFailed,
    });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* getDataRawTableMockupStatisticGeneratorSaga() {
  yield takeLatest(
    CompanyAction.getDataRawTableMockupStatisticGenerator,
    getDataRawTableMockupStatisticGenerator
  );
}

export default getDataRawTableMockupStatisticGeneratorSaga;
