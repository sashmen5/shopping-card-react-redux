import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import products from "./reducers/productsReducer";
import displayProducts from "./reducers/displayProducts";
import formEditReducer from "./reducers/formEdit";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
	products,
	formEditReducer,
	displayProducts
});


export default createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk))
);