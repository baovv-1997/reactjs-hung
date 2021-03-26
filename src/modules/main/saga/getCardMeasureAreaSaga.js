import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';
import * as DashboardAction from '../redux';

function* getCardMeasureArea(action) {
    try {
        const response = yield call(() =>
            API.get(ROUTES.GET_DASHBOARD, action.payload)
        );
        if (response.ok) {
            const { data } = response;
            // In case: get card measure success
            yield put({
                type: DashboardAction.getCardMeasureAreaSuccess,
                data,
            });
        } else {
            // In case: get card measure failed
            yield put({
                type: DashboardAction.getCardMeasureAreaFailed,
            });
        }
    } catch (error) {
        // in case: server error
        yield put({
            type: DashboardAction.getCardMeasureAreaFailed,
            error,
        });
    }
}

function* getCardMeasureAreaSaga() {
    yield takeLatest(
        DashboardAction.getCardMeasureArea,
        getCardMeasureArea
    );
}

export default getCardMeasureAreaSaga;
