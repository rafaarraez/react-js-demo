export const addToCart = ({productId, productName}) => ({
    type: 'ADD_TO_CART',
    data: {
        productId,
        productName
    }
});

export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    productId
});

export const clearCart = () => ({
    type: 'CLEAR_CART'
});