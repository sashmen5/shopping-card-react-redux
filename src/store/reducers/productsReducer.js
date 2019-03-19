import * as actions from '../actions';

const initialState = [];

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.FETCH_PRODUCTS: {
			return [
				...action.payload
			]
		}

		case actions.SAVE_EDITED_PRODUCT: {
			const index = state.findIndex(item => item.id === action.payload.id);
			if (index === -1) {
				return state;
			}

			return [
				...state.slice(0, index),
				{
					...state[index],
					name: action.payload.name,
					description: action.payload.description,
					price: action.payload.price
				},
				...state.slice(index + 1, state.length)
			]
		}
		default:
			return state;
	}
};

export default productsReducer;