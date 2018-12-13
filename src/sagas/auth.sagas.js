import {call, put} from "redux-saga/effects";
import {loginFailed, loginPut} from "../actions/auth.actions";
import {loginRequest} from "../services/auth.service";

export function *loginFetch(action) {
    try {
        const response = yield call(loginRequest, action.data);
        const { username } = response.data.data;

        yield put(loginPut({
            username
        }));
        action.setSubmitting(false);

    } catch (error) {
        if (error.response) {
            const responseBody = error.response.data;
            yield put(loginFailed({ errorMsg: responseBody.message}));
        } else {
            yield put(loginFailed({ errorMsg: 'Error al iniciar sesion. Por favor, vuelva a intentarlo mas tarde'}))
        }
        action.setSubmitting(false);
    }
}