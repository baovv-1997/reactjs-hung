import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';
import * as TestDashboardAction from '../redux';

function* getListDeviceTestDashboard(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.GET_DASHBOARD_TEST_MOCKUP, action.payload)
    );

    if (response.ok) {
      const { data } = response;
      // In case: get card measure success
      yield put({
        type: TestDashboardAction.getListDeviceTestDashboardSuccess,
        data,
      });
    } else {
      // In case: get card measure failed
      yield put({
        type: TestDashboardAction.getListDeviceTestDashboardFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: TestDashboardAction.getListDeviceTestDashboardFailed,
      error,
    });
  }
}

function* getListDeviceTestDashboardSaga() {
  yield takeLatest(
    TestDashboardAction.getListDeviceTestDashboard,
    getListDeviceTestDashboard
  );
}

export default getListDeviceTestDashboardSaga;
