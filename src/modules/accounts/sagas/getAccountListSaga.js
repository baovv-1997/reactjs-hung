import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from '../../../apis';

import * as AccountAction from '../redux';

function* getAccountList(action) {
  try {
    const { isDetail } = action?.payload;
    let response = {};
    if (!isDetail) {
      response = yield call(() =>
        API.get(ROUTES.ACCOUNTS, { ...action.payload, relation: ['roles'] })
      );
    } else {
      response = yield call(() =>
        API.get(ROUTES.ACCOUNTS, {
          ...action.payload,
          relation: ['devices|position,company'],
        })
      );
    }

    if (response.ok) {
      const { data } = response?.data;
      // In case:  request success
      yield put({
        type: AccountAction.getAccountListSuccess,
        data,
        isDetail,
      });
    } else {
      // In case:  request failed
      yield put({
        type: AccountAction.getAccountListFailed,
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: AccountAction.getAccountListFailed });
  }
}

function* getAccountListSaga() {
  yield takeLatest(AccountAction.getAccountList, getAccountList);
}

export default getAccountListSaga;
