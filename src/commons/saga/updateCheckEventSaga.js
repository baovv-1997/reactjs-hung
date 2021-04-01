import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';
import * as CommonAction from '../redux';

// worker Saga: will be fired on SEND_INVITE actions
function* updateCheckEvent(action) {
  try {
    const response = yield call(() =>
      API.post(ROUTES.CHECK_UPDATE_EVENT, JSON.stringify(action.payload))
    );

    if (response.ok) {
      const { data } = response;
      // In case: request success
      yield put({
        type: CommonAction.updateCheckEventSuccess,
        data,
      });
    } else {
      // In case: request failed
      yield put({
        type: CommonAction.updateCheckEventFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: CommonAction.updateCheckEventFailed, error });
  }
}

function* updateCheckEventSaga() {
  yield takeLatest(CommonAction.updateCheckEvent, updateCheckEvent);
}

export default updateCheckEventSaga;
