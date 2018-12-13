const defaultState = {
    products: []
};

export const cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                products: [
                    ...state.products,
                    {
                        ...action.data
                    }
                ]
            };

        case 'REMOVE_FROM_CART':
            const newProducts = state.products.filter(product => product.productId !== action.productId);
            return {
                ...state,
                products: newProducts
            };

        case 'CLEAR_CART':
            return defaultState;

        default:
            return state;
    }
};