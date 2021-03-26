import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../../apis';
import * as GeneratorAction from '../../redux';

// worker Saga: will be fired on SIGN_IN actions
function* getCardTestMKStatusOperation(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_TEST_MOCKUP_STATUS_OPERATION_CARD, action.payload)
    );

    if (response.ok) {
      const { data } = response;
      // In case: signup request success
      yield put({
        type: GeneratorAction.getCardTestMKStatusOperationSuccess,
        data,
      });
    } else {
      // In case: signup request failed
      yield put({
        type: GeneratorAction.getCardTestMKStatusOperationFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: GeneratorAction.getCardTestMKStatusOperationFailed,
    });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* getCardTestMKStatusOperationSaga() {
  yield takeLatest(
    GeneratorAction.getCardTestMKStatusOperation,
    getCardTestMKStatusOperation
  );
}

export default getCardTestMKStatusOperationSaga;
