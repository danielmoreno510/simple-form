import { takeLatest, put, call } from "redux-saga/effects";

import { putCreateUser } from "../../actions";
import { FETCH_CREATE_USER } from "../../actions/types";
import { createUser } from "../../../services/api/userService";
import { handleHttpError } from "../../../services/httpUtils";

export function* fetchCreateUser({user}: any) {
  const context = "fetchCreateUser saga";
  try {
    yield call(createUser, user);

    yield put(putCreateUser('User created successfully'));
  } catch (error) {
    yield put(putCreateUser('Error creating user'));
    handleHttpError(error, context, error.description);
  }
}

export default function* watchFetchCreateUser() {
  yield takeLatest(FETCH_CREATE_USER, fetchCreateUser);
}