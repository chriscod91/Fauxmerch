/**
 * Reducer:
 * also an arrow function that receives the state and the action
 * must return a state or a new state
 *  
 */
const cartReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            // do something 
            let copy = [...state, action.payload];
           // copy.state(action.payload);
            return copy;

        case "REMOVE_FROM_CART":
            //do something
            return state;

        default:
            return state;
    }
};

export default cartReducer;