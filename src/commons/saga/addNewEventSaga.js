import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on SEND_INVITE actions
function* addNewEvent(action) {
  try {
    const response = yield call(() =>
      API.post(ROUTES.GET_EVENT_LIST, JSON.stringify(action.payload))
    );

    if (response.ok) {
      const { data } = response.data;

      // In case: request success
      yield put({
        type: 'commons/addNewEventSuccess',
        data,
        total: response?.data?.total,
        perPage: response?.data?.per_page,
      });
    } else {
      // In case: request failed
      yield put({
        type: 'commons/addNewEventFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'commons/addNewEventFailed', error });
  }
}

function* addNewEventSaga() {
  yield takeLatest('commons/addNewEvent', addNewEvent);
}

export default addNewEventSaga;
