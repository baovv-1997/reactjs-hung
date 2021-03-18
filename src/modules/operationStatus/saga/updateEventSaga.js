import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on SEND_INVITE actions
function* updateEvent(action) {
  try {
    const response = yield call(() =>
      API.put(
        ROUTES.UPDATE_EVENT(action.payload.id),
        JSON.stringify(action.payload)
      )
    );

    if (response.ok) {
      const { data } = response.data;

      // In case: request success
      yield put({
        type: 'operationStatus/updateEventSuccess',
        data,
      });
    } else {
      // In case: request failed
      yield put({
        type: 'operationStatus/updateEventFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'operationStatus/updateEventFailed', error });
  }
}

function* updateEventSaga() {
  yield takeLatest('operationStatus/updateEvent', updateEvent);
}

export default updateEventSaga;
