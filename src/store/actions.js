import axios from 'axios';
import {normalizeData} from "../selectors/utils";

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const SELECT_EDIT_ID = 'SELECT_EDIT_ID';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SAVE_EDITED_PRODUCT = 'SAVE_EDITED_PRODUCT';

const productsServerUrl = "https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products.json ";

export const fetchProducts = () => {
	return (dispatch) => {
		return axios.get(productsServerUrl)
			.then(response => {
				const normalizedProducts = normalizeData(response.data);
				dispatch(setProductsList(normalizedProducts));
			})
	}
};

export const setProductsList = (products) => {
	return {
		type: FETCH_PRODUCTS,
		payload: products
	}
};

export const changePage = (pageNumber) => {
	return {
		type: CHANGE_PAGE,
		payload: pageNumber
	}
};

export const filterProducts = (value, products) => {
	return {
		type: FILTER_PRODUCTS,
		payload: {
			value,
			products
		}
	}
};


export const changeInputValue = (key, value) => {
	return {
		type: CHANGE_INPUT_VALUE,
		payload: {
			key,
			value
		}
	}
};

export const selectEditId = (product) => {
	return {
		type: SELECT_EDIT_ID,
		payload: product
	}
};

export const saveEditedProduct = (product) => {
	return {
		type: SAVE_EDITED_PRODUCT,
		payload: product
	}
};