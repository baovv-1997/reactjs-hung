import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';
import * as DashboardAction from '../redux';

function* getListCompany(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_GET_LIST_COMPANY, action.payload)
    );
    if (response.ok) {
      const { data } = response;
      // In case: get card measure success
      console.log(data);
      yield put({
        type: DashboardAction.getListCompanySuccess,
        data,
      });
    } else {
      // In case: get card measure failed
      yield put({
        type: DashboardAction.getListCompanyFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: DashboardAction.getListCompanyFailed,
      error,
    });
  }
}

function* getListCompanySaga() {
  yield takeLatest(
    DashboardAction.getListCompany,
    getListCompany
  );
}

export default getListCompanySaga;
