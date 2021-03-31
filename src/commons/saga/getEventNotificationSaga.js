import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from 'apis';
import * as CommonAction from '../redux';

// worker Saga: will be fired on SEND_INVITE actions
function* getEventNotification(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.GET_EVENT_NOTIFICATION, action.payload)
    );

    if (response.ok) {
      const { data } = response;
      // In case: request success
      yield put({
        type: CommonAction.getEventNotificationSuccess,
        data,
      });
    } else {
      // In case: request failed
      yield put({
        type: CommonAction.getEventNotificationFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: CommonAction.getEventNotificationFailed, error });
  }
}

function* getEventNotificationSaga() {
  yield takeLatest(CommonAction.getEventNotification, getEventNotification);
}

export default getEventNotificationSaga;
