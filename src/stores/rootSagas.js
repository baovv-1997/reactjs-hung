// import libs
import { all } from 'redux-saga/effects';
// sign in
import singInSaga from '../modules/accounts/saga/signInSaga';

export default function* RootSagas() {
  yield all([singInSaga()]);
}
