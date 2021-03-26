import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on SEND_INVITE actions
function* getListDevice(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_GET_LIST_DEVICE, action.payload)
    );

    if (response.ok) {
      const { data } = response.data;

      // In case: request success
      yield put({
        type: 'commons/getListDeviceSuccess',
        data,
      });
    } else {
      // In case: request failed
      yield put({
        type: 'commons/getListDeviceFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'commons/getListDeviceFailed', error });
  }
}

function* getDevicesListSaga() {
  yield takeLatest('commons/getListDevice', getListDevice);
}

export default getDevicesListSaga;
