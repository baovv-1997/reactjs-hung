import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';
import * as DashboardAction from '../redux';

function* getListCompanyInverters(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.GET_DASHBOARD, action.payload)
    );
    if (response.ok) {
      const { data } = response;
      // In case: get card measure success
      yield put({
        type: DashboardAction.getListCompanyInvertersSuccess,
        data,
      });
    } else {
      // In case: get card measure failed
      yield put({
        type: DashboardAction.getListCompanyInvertersFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: DashboardAction.getListCompanyInvertersFailed,
      error,
    });
  }
}

function* getListCompanyInverterSaga() {
  yield takeLatest(
    DashboardAction.getListCompanyInverters,
    getListCompanyInverters
  );
}

export default getListCompanyInverterSaga;
