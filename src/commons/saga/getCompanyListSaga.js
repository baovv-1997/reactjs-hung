import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on SEND_INVITE actions
function* getCompanyList(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.API_GET_LIST_COMPANY, action.payload)
    );

    if (response.ok) {
      const { data } = response.data;

      // In case: request success
      yield put({
        type: 'commons/getCompanyListSuccess',
        data,
      });
    } else {
      // In case: request failed
      yield put({
        type: 'commons/getCompanyListFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'commons/getCompanyListFailed', error });
  }
}

function* getCompanyListSaga() {
  yield takeLatest('commons/getCompanyList', getCompanyList);
}

export default getCompanyListSaga;
