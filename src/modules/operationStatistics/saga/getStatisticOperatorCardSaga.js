import { call, put, takeLatest } from 'redux-saga/effects';

import { ROUTES, API } from 'apis';

// worker Saga: will be fired on SEND_INVITE actions
function* getStatisticOperatorCard(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.OPERATOR_STATISTICS_CARD, action.payload)
    );

    if (response.ok) {
      const { data } = response;

      // In case: request success
      yield put({
        type: 'statisticsDevelopStatus/getStatisticOperatorCardSuccess',
        data,
      });
    } else {
      // In case: request failed
      yield put({
        type: 'statisticsDevelopStatus/getStatisticOperatorCardFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({
      type: 'statisticsDevelopStatus/getStatisticOperatorCardFailed',
      error,
    });
  }
}

function* getStatisticOperatorChartData() {
  yield takeLatest(
    'statisticsDevelopStatus/getStatisticOperatorCard',
    getStatisticOperatorCard
  );
}

export default getStatisticOperatorChartData;
