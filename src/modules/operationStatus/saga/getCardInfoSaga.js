import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on SEND_INVITE actions
function* getCardInfo(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.STATUS_OPERATOR_CARD_INFOR, action.payload)
    );

    if (response.ok) {
      const { data } = response;

      // In case: request success
      yield put({
        type: 'operationStatus/getCardInfoSuccess',
        data,
      });
    } else {
      // In case: request failed
      yield put({
        type: 'operationStatus/getCardInfoFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'operationStatus/getCardInfoFailed', error });
  }
}

function* getCardInfoSaga() {
  yield takeLatest('operationStatus/getCardInfo', getCardInfo);
}

export default getCardInfoSaga;
