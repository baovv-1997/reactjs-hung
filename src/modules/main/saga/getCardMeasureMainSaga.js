import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';
import * as DashboardAction from '../redux';

function* getCardMeasureMain(action) {
    try {
        const response = yield call(() =>
            API.get(ROUTES.GET_DASHBOARD, action.payload)
        );
        if (response.ok) {
            const { data } = response;
            // In case: get card measure success
            yield put({
                type: DashboardAction.getCardMeasureMainSuccess,
                data,
            });
        } else {
            // In case: get card measure failed
            yield put({
                type: DashboardAction.getCardMeasureMainFailed,
            });
        }
    } catch (error) {
        // in case: server error
        yield put({
            type: DashboardAction.getCardMeasureMainFailed,
            error,
        });
    }
}

function* getCardMeasureMainSaga() {
    yield takeLatest(
        DashboardAction.getCardMeasureMain,
        getCardMeasureMain
    );
}

export default getCardMeasureMainSaga;
