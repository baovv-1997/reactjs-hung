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

import getListStatusCompanySaga from 'modules/statusCompany/sagas/getListCompanySaga';

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
  ]);
}
