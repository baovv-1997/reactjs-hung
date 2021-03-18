import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on SEND_INVITE actions
function* getEventList(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.GET_EVENT_LIST, action.payload)
    );

    if (response.ok) {
      const { data } = response.data;

      // In case: request success
      yield put({
        type: 'operationStatus/getEventListSuccess',
        data,
        total: response?.data?.total,
        perPage: response?.data?.per_page,
      });
    } else {
      // In case: request failed
      yield put({
        type: 'operationStatus/getEventListFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'operationStatus/getEventListFailed', error });
  }
}

function* getEventListSaga() {
  yield takeLatest('operationStatus/getEventList', getEventList);
}

export default getEventListSaga;
