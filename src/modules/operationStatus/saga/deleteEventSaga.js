import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on SEND_INVITE actions
function* deleteEvent(action) {
  try {
    const response = yield call(() =>
      API.delete(ROUTES.DELETE_EVENT(action.payload))
    );

    if (response.ok) {
      const { data } = response.data;

      // In case: request success
      yield put({
        type: 'operationStatus/deleteEventSuccess',
        data,
        total: response?.data?.total,
        perPage: response?.data?.per_page,
      });
    } else {
      // In case: request failed
      yield put({
        type: 'operationStatus/deleteEventFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'operationStatus/deleteEventFailed', error });
  }
}

function* deleteEventSaga() {
  yield takeLatest('operationStatus/deleteEvent', deleteEvent);
}

export default deleteEventSaga;
