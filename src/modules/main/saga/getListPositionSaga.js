import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';
import * as DashboardAction from '../redux';

function* getListPosition(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_GET_LIST_POSITION, action.payload)
    );
    if (response.ok) {
      const { data } = response;
      // In case: get card measure success
      yield put({
        type: DashboardAction.getListPositionSuccess,
        data,
      });
    } else {
      // In case: get card measure failed
      yield put({
        type: DashboardAction.getListPositionFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: DashboardAction.getListPositionFailed,
      error,
    });
  }
}

function* getListPositionSaga() {
  yield takeLatest(
    DashboardAction.getListPosition,
    getListPosition
  );
}

export default getListPositionSaga;
