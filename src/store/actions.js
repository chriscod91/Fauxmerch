/**
 * Actions:
 * an action is a arrow function that returns an object
 * the object should contain he type (of action), may contain payload (data)
 */

export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product,
    };
};

