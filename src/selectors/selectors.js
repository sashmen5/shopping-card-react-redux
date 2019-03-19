export const getProductsToDisplay = (displayIds, products) => {
	const result = [];
	displayIds.forEach(id => {
		const product = products.find(item => item.id === id);
		result.push({...product});
	});

	return result;
};
