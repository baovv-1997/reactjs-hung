import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';
import * as CompanyAction from '../redux';

// worker Saga: will be fired on SIGN_IN actions
function* getCardInformation(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_TEST_SOLAR_MONITORING_STATUS_CARD, action.payload)
    );

    if (response.ok) {
      const { data } = response;
      // In case: signup request success
      yield put({
        type: CompanyAction.getCardInformationSuccess,
        data,
      });
    } else {
      // In case: signup request failed
      yield put({
        type: CompanyAction.getCardInformationFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: CompanyAction.getCardInformationFailed });
  }
}

/*
  Starts signupAccount on each dispatched `SIGN_IN` action.
*/
function* getCardInformationSaga() {
  yield takeLatest(CompanyAction.getCardInformation, getCardInformation);
}

export default getCardInformationSaga;
