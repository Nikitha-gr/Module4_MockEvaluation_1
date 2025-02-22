import { FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS } from "./actions";

const initState = { products: [], loading: true };

export const productReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_LOADING:
            return { ...state, loading: true };

        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload, loading: false };

        default:
            return state;
    }
}