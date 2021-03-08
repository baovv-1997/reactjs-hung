// import libs
import { all } from 'redux-saga/effects';
// sign in
import singInSaga from 'modules/accounts/sagas/signInSaga';
import signUpSaga from 'modules/accounts/sagas/signUpSaga';
import getListCompanySaga from 'modules/accounts/sagas/getListCompanySaga';
import getListAreaSaga from 'modules/accounts/sagas/getListAreaSaga';
import getListInverterSaga from 'modules/accounts/sagas/getListInverterSaga';

export default function* RootSagas() {
  yield all([
    singInSaga(),
    signUpSaga(),
    getListCompanySaga(),
    getListAreaSaga(),
    getListInverterSaga(),
  ]);
}
