export const loginFetch = ({ username, password }, setSubmitting) => ({
    type: 'LOGIN/FETCH',
    setSubmitting,
    data: {
        username,
        password
    }
});

export const loginPut = ({ username }) => ({
    type: 'LOGIN/PUT',
    data: {
        username
    }
});

export const loginFailed = ({ errorMsg }) => ({
    type: 'LOGIN_FAILED',
    error: {
        errorMsg,
    }
});

export const redirectUrlPut = ({ redirectUrl }) => ({
    type: 'REDIRECT_URL/PUT',
    redirectUrl
});

export const logoutPut = () => ({
    type:'LOGOUT/PUT'
});