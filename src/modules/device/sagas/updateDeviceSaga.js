import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on SEND_INVITE actions
function* updateDevice(action) {
  try {
    const response = yield call(() =>
      API.put(
        ROUTES.UPDATE_DEVICE(action.payload.id),
        JSON.stringify(action.payload)
      )
    );

    if (response.ok) {
      const { data } = response;

      // In case: request success
      yield put({
        type: 'device/updateDeviceSuccess',
        data,
      });
    } else {
      // In case: request failed
      yield put({
        type: 'device/updateDeviceFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'device/updateDeviceFailed', error });
  }
}

function* updateDeviceSaga() {
  yield takeLatest('device/updateDevice', updateDevice);
}

export default updateDeviceSaga;
