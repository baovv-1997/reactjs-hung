import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on SEND_INVITE actions
function* getPosList(action) {
  try {
    const response = yield call(() => API.get(ROUTES.GET_POS, action.payload));

    if (response.ok) {
      const { data } = response.data;

      // In case: request success
      yield put({
        type: 'device/getListPositionSuccess',
        data,
      });
    } else {
      // In case: request failed
      yield put({
        type: 'device/getListPositionFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'device/getListPositionFailed', error });
  }
}

function* getListPositionSaga() {
  yield takeLatest('device/getListPosition', getPosList);
}

export default getListPositionSaga;
