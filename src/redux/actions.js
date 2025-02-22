import axios from "axios";

export const FETCH_PRODUCTS_LOADING = "FETCH_PRODUCTS_LOADING";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const fetchProductsLoading = () => ({
    type: "FETCH_PRODUCTS_LOADING",
});

export const fetchProductsSuccess = (products) => ({
    type: "FETCH_PRODUCTS_SUCCESS",
    payload: products,
});

export const fetchProductsFailure = (error) => ({
    type: "FETCH_PRODUCTS_FAILURE",
    payload : error,
});

export const fetchProducts = () => {
    return (
        async (dispatch) => {
            dispatch(fetchProductsLoading());
            try {
                const response = await axios.get("https://fakestoreapi.com/products");
                //console.log(response.data);
                dispatch(fetchProductsSuccess(response.data));
            }
            catch (error) {
                dispatch(fetchProductsFailure(error.message))
            }
        }
    )
}
