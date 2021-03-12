import { call, put, takeLatest } from 'redux-saga/effects';
import moment from 'moment';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on SEND_INVITE actions
function* addDevice(action) {
  console.log(action.payload);
  const {
    azimuthAngle,
    color,
    companySelected,
    currentType,
    incidenceAngle,
    manager,
    maxPower,
    name,
    phoneManager,
    positionSelected,
    startDate,
  } = action.payload;
  try {
    const response = yield call(() =>
      API.post(
        ROUTES.API_GET_LIST_DEVICE,
        JSON.stringify({
          install_date: moment(startDate).format('YYYY-MM-DD'),
          type: currentType,
          name,
          manager,
          manager_phone: phoneManager,
          max_power: parseInt(maxPower, 10),
          pos_id: positionSelected.value,
          com_id: companySelected.value,
          incidence_angle: incidenceAngle,
          azimuth_angle: azimuthAngle,
          color,
        })
      )
    );
    console.log(response);
    if (response.ok) {
      const { data } = response;

      // In case: request success
      yield put({
        type: 'device/addDeviceSuccess',
        data,
      });
    } else {
      const { errors } = response.data;
      // In case: request failed
      yield put({
        type: 'device/addDeviceFailed',
        errors,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'device/addDeviceFailed', error });
  }
}

function* addDeviceSaga() {
  yield takeLatest('device/addDevice', addDevice);
}

export default addDeviceSaga;
