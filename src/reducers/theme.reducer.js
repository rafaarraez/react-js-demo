const defaultState = {
    primary: '#ffffff',
    secondary: '#FF6C0F',
    text: '#333333'
};

const themeReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default themeReducer;