import { call, put, takeLatest } from 'redux-saga/effects';
import { ROUTES, API } from '../../../apis';
import * as DashboardAction from '../redux';

function* getPositionSearchMain(action) {
    try {
        const response = yield call(() =>
            API.get(ROUTES.API_GET_LIST_POSITION, action.payload)
        );
        if (response.ok) {
            const { data } = response;
            // In case: get card measure success
            yield put({
                type: DashboardAction.getPositionSearchMainSuccess,
                data,
            });
        } else {
            // In case: get card measure failed
            yield put({
                type: DashboardAction.getPositionSearchMainFailed,
            });
        }
    } catch (error) {
        // in case: server error
        yield put({
            type: DashboardAction.getPositionSearchMainFailed,
            error,
        });
    }
}

function* getCompanySearchMain(action) {
    try {
        const response = yield call(() =>
            API.get(ROUTES.API_GET_LIST_COMPANY, action.payload)
        );
        if (response.ok) {
            const { data } = response;
            // In case: get card measure success
            yield put({
                type: DashboardAction.getCompanySearchMainSuccess,
                data,
            });
        } else {
            // In case: get card measure failed
            yield put({
                type: DashboardAction.getCompanySearchMainFailed,
            });
        }
    } catch (error) {
        // in case: server error
        yield put({
            type: DashboardAction.getCompanySearchMainFailed,
            error,
        });
    }
}

function* getSearchMainSaga() {
    yield takeLatest(
        DashboardAction.getPositionSearchMain,
        getPositionSearchMain
    );
    yield takeLatest(
        DashboardAction.getCompanySearchMain,
        getCompanySearchMain
    );
}

export default getSearchMainSaga;
