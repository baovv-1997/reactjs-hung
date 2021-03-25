import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../../apis';
import * as GeneratorAction from '../../redux';

// worker Saga: will be fired on SIGN_IN actions
function* getCardInformationStatisticsOperation(action) {
  try {
    const response = yield call(() =>
      API.get(
        ROUTES.API_TEST_SOLAR_MONITORING_STATISTICS_OPERATION_CARD,
        action.payload
      )
    );

    if (response.ok) {
      const { data } = response;
      // In case: signup request success
      yield put({
        type: GeneratorAction.getCardInformationStatisticsOperationSuccess,
        data,
      });
    } else {
      // In case: signup request failed
      yield put({
        type: GeneratorAction.getCardInformationStatisticsOperationFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: GeneratorAction.getCardInformationStatisticsOperationFailed,
    });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* getCardInformationStatisticsOperationSaga() {
  yield takeLatest(
    GeneratorAction.getCardInformationStatisticsOperation,
    getCardInformationStatisticsOperation
  );
}

export default getCardInformationStatisticsOperationSaga;
