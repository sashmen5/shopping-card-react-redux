import { createSelector } from 'reselect';

const productsSelector = state => state.products;
const displayedIdsSelector = state => state.displayProducts.displayedIds;

export const displayedProductsSelector = createSelector(
	productsSelector,
	displayedIdsSelector,
	(products, ids) => {
		const result = [];
		ids.forEach(id => {
			const product = products.find(item => item.id === id);
			result.push({...product});
		});
		
		debugger;
		return result;
	}
)


export const getProductsToDisplay = (displayIds, products) => {
	const result = [];
	displayIds.forEach(id => {
		const product = products.find(item => item.id === id);
		result.push({...product});
	});

	return result;
};

export const getDisplayedIds = (ids, itemsOnPage, currentPage) => {
	const maxIndex = currentPage * itemsOnPage;
	const minIndex = maxIndex - itemsOnPage;
	return ids.slice(minIndex, maxIndex);
};
