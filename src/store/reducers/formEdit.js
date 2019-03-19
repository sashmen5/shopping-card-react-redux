import * as actions from '../actions';
const initialState = {
	startEdit: false,
	product: {
		description: '',
		name: '',
		url: '',
		price: '',
		id: ''
	}
};

const formEditReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.SELECT_EDIT_ID: {
			return {
				...state,
				product: {...action.payload}
			}
		}

		case actions.CHANGE_INPUT_VALUE: {
			return {
				...state,
				product: {
					...state.product,
					[action.payload.key]: action.payload.value
				}
			}
		}

		default:
			return state;
	}
};

export default formEditReducer;