import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on SEND_INVITE actions
function* getListDevice(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_GET_LIST_DEVICE, action.payload)
    );

    if (response.ok) {
      const { data } = response;

      // In case: request success
      yield put({
        type: 'device/getListDeviceSuccess',
        data,
      });
    } else {
      // In case: request failed
      yield put({
        type: 'device/getListDeviceFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'device/getListDeviceFailed', error });
  }
}

function* getListDeviceSaga() {
  yield takeLatest('device/getListDevice', getListDevice);
}

export default getListDeviceSaga;
