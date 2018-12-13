const defaultState = {
    isAuthenticated: false,
    username: '',
    redirectUrl: '/',
    error: '',
    errorMsg: '',
    loading: false
};

export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'LOGIN/FETCH':
            return {
                ...state,
                loading: true
            };

        case 'LOGIN/PUT':
            return {
                ...state,
                isAuthenticated: true,
                username: action.data.username,
                loading: false
            };

        case 'LOGIN_FAILED':
            return {
                ...state,
                error: 'error',
                errorMsg: action.error.errorMsg,
                loading: false
            };

        case 'REDIRECT_URL/PUT':
            return {
                ...state,
                redirectUrl: action.redirectUrl
            };

        case 'LOGOUT/PUT':
            return defaultState;

        default:
            return state;
    }
};