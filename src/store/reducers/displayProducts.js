import * as actions from "../actions";
import {getDisplayedIds} from "../../selectors/utils";

const initialState = {
	allIds: [],
	displayedIds: [],
	itemsOnPage: 5,
	currentPage: 1,
};

const displayProductsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.FETCH_PRODUCTS: {
			const ids = action.payload.map(item => item.id);
			return {
				...state,
				allIds: ids,
				displayedIds: getDisplayedIds(ids, state.itemsOnPage, state.currentPage)
			}
		}

		case actions.CHANGE_PAGE: {
			return {
				...state,
				currentPage: action.payload,
				displayedIds: getDisplayedIds(state.allIds, state.itemsOnPage, action.payload)
			}
		}

		case actions.FILTER_PRODUCTS: {
			const {products, value} = action.payload;
			let ids = products.filter(item => item.name.includes(value));
			ids = ids.map(item => item.id);
			return {
				...state,
				currentPage: 1,
				allIds: [...ids],
				displayedIds: getDisplayedIds(ids, state.itemsOnPage, 1)
			}
		}
		default:
			return state;
	}
};

export default displayProductsReducer;