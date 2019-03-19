export const normalizeData = (products) => {
	let result = [];
	for (const item of products) {
		switch (item.type) {
			case 1:
				result.push({...item.fedex});
				break;
			case 2:
				result = [...result, ...item.ups];
				break;
			case 3:
				result.push({...item});
				break;
			default: break;
		}
	}

	return result;
};
