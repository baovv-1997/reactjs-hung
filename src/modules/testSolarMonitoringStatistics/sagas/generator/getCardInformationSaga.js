import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../../apis';
import * as GeneratorAction from '../../redux';

// worker Saga: will be fired on SIGN_IN actions
function* getCardInformationStatisticsGenerator(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_TEST_SOLAR_MONITORING_STATISTICS_CARD, action.payload)
    );

    if (response.ok) {
      const { data } = response;
      // In case: signup request success
      yield put({
        type: GeneratorAction.getCardInformationStatisticsGeneratorSuccess,
        data,
      });
    } else {
      // In case: signup request failed
      yield put({
        type: GeneratorAction.getCardInformationStatisticsGeneratorFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: GeneratorAction.getCardInformationStatisticsGeneratorFailed,
    });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* getCardInformationStatisticsGeneratorSaga() {
  yield takeLatest(
    GeneratorAction.getCardInformationStatisticsGenerator,
    getCardInformationStatisticsGenerator
  );
}

export default getCardInformationStatisticsGeneratorSaga;
