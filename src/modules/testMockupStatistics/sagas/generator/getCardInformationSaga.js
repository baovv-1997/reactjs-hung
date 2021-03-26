import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../../apis';
import * as GeneratorAction from '../../redux';

// worker Saga: will be fired on SIGN_IN actions
function* getCardTestMKStatisticsGenerator(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_TEST_MOCKUP_STATISTIC_GENERATOR_CARD, action.payload)
    );

    if (response.ok) {
      const { data } = response;
      // In case: signup request success
      yield put({
        type: GeneratorAction.getCardTestMKStatisticsGeneratorSuccess,
        data,
      });
    } else {
      // In case: signup request failed
      yield put({
        type: GeneratorAction.getCardTestMKStatisticsGeneratorFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: GeneratorAction.getCardTestMKStatisticsGeneratorFailed,
    });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* getCardTestMKStatisticsGeneratorSaga() {
  yield takeLatest(
    GeneratorAction.getCardTestMKStatisticsGenerator,
    getCardTestMKStatisticsGenerator
  );
}

export default getCardTestMKStatisticsGeneratorSaga;
