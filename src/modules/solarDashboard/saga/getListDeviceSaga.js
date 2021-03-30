import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';
import * as TestSolarDashboardAction from '../redux';

function* getListDeviceTestSolarDashboard(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.GET_DASHBOARD_TEST_SOLAR, action.payload)
    );

    if (response.ok) {
      const { data } = response;
      // In case: get card measure success
      yield put({
        type: TestSolarDashboardAction.getListDeviceTestSolarDashboardSuccess,
        data,
      });
    } else {
      // In case: get card measure failed
      yield put({
        type: TestSolarDashboardAction.getListDeviceTestSolarDashboardFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: TestSolarDashboardAction.getListDeviceTestSolarDashboardFailed,
      error,
    });
  }
}

function* getListDeviceTestSolarDashboardSaga() {
  yield takeLatest(
    TestSolarDashboardAction.getListDeviceTestSolarDashboard,
    getListDeviceTestSolarDashboard
  );
}

export default getListDeviceTestSolarDashboardSaga;
