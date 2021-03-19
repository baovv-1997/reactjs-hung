import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on SEND_INVITE actions
function* getCompanyList() {
  try {
    const response = yield call(() => API.get(ROUTES.API_GET_LIST_COMPANY));

    if (response.ok) {
      const { data } = response.data;

      // In case: request success
      yield put({
        type: 'device/getListCompanySuccess',
        data,
      });
    } else {
      // In case: request failed
      yield put({
        type: 'device/getListCompanyFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'device/getListCompanyFailed', error });
  }
}

function* getCompanySaga() {
  yield takeLatest('device/getListCompany', getCompanyList);
}

export default getCompanySaga;
