import {all, fork, takeLatest} from "redux-saga/effects";
import {loginFetch} from "./auth.sagas";

export function *sagas() {
    yield all([
        fork(takeLatest, 'LOGIN/FETCH', loginFetch),
    ])
}