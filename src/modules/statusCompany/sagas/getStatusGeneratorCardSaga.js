import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';

function* getStatusGeneratorCard(action) {
  try {
    const response = yield call(() =>
      API.get(ROUTES.STATUS_GENERATOR_CARD_INFO, action.payload)
    );

    if (response.ok) {
      const { data } = response;

      yield put({ type: 'statusCompany/getStatusGeneratorCardSuccess', data });
    } else {
      yield put({
        type: 'statusCompany/getStatusGeneratorCardFailed',
      });
    }
  } catch (error) {
    // in case: server error
    yield put({ type: 'statusCompany/getStatusGeneratorCardFailed' });
  }
}

function* getStatusGeneratorCardSaga() {
  yield takeLatest(
    'statusCompany/getStatusGeneratorCard',
    getStatusGeneratorCard
  );
}

export default getStatusGeneratorCardSaga;
