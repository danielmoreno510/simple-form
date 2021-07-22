import {all} from 'redux-saga/effects';

import createUserSaga from './createUserSaga';

export default function* rootSaga() {
  yield all([createUserSaga()]);
}