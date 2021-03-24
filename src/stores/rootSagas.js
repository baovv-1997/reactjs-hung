// import libs
import { all } from 'redux-saga/effects';
// sign in
import singInSaga from 'modules/accounts/sagas/signInSaga';
import signUpSaga from 'modules/accounts/sagas/signUpSaga';
import getListCompanySaga from 'modules/accounts/sagas/getListCompanySaga';
import getListAreaSaga from 'modules/accounts/sagas/getListAreaSaga';
import getListInverterSaga from 'modules/accounts/sagas/getListInverterSaga';
import getCompanySaga from 'modules/device/sagas/getCompanySaga';
import getDeviceListSaga from 'modules/device/sagas/getDeviceListSaga';
import getListPositionSaga from 'modules/device/sagas/getListPositionSaga';
import getDeivceDetailSaga from 'modules/device/sagas/getDeivceDetailSaga';
import updateDeviceSaga from 'modules/device/sagas/updateDeviceSaga';
import addDeviceSaga from 'modules/device/sagas/addDeviceSaga';
import getAccountListSaga from 'modules/accounts/sagas/getAccountListSaga';
import updateAccountSaga from 'modules/accounts/sagas/updateAccountSaga';

import getListStatusCompanySaga from 'modules/statusCompany/sagas/getListCompanySaga';
import getListDeviceTestDashboardSaga from 'modules/testDashboard/saga/getListDeviceSaga';
import getListDeviceTestSolarDashboardSaga from 'modules/solarDashboard/saga/getListDeviceSaga';
import getListCompanyInverterSaga from 'modules/main/saga/getListCompanyInverterSaga';
import getListPositionMainSaga from 'modules/main/saga/getListPositionSaga';
import getListCompanyMainSaga from 'modules/main/saga/getListCompanySaga';
import getListDeviceSaga from 'modules/operationStatus/saga/getListDeviceSaga';
import getEventListSaga from 'modules/operationStatus/saga/getEventListSaga';
import deleteEventSaga from 'modules/operationStatus/saga/deleteEventSaga';
import addNewEventSaga from 'modules/operationStatus/saga/addNewEventSaga';

import updateEventSaga from 'modules/operationStatus/saga/updateEventSaga';
import getDataChartSaga from 'modules/operationStatus/saga/getDataChartSaga';
import deleteAccountSaga from 'modules/accounts/sagas/deleteAccountSaga';
import getTrendChartSaga from 'modules/operationStatus/saga/getTrendChartSaga';

export default function* RootSagas() {
  yield all([
    singInSaga(),
    signUpSaga(),
    getListCompanySaga(),
    getListAreaSaga(),
    getListInverterSaga(),
    getListStatusCompanySaga(),
    getCompanySaga(),
    getDeviceListSaga(),
    getListPositionSaga(),
    getDeivceDetailSaga(),
    updateDeviceSaga(),
    addDeviceSaga(),
    getAccountListSaga(),
    updateAccountSaga(),
    getListDeviceTestDashboardSaga(),
    getListDeviceTestSolarDashboardSaga(),
    getListCompanyInverterSaga(),
    getListPositionMainSaga(),
    getListCompanyMainSaga(),
    getListDeviceSaga(),
    getEventListSaga(),
    deleteEventSaga(),
    addNewEventSaga(),
    updateEventSaga(),
    getDataChartSaga(),
    deleteAccountSaga(),
    getTrendChartSaga(),
  ]);
}
