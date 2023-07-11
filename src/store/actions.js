export const setCategory = (name) => {
	return {
		type: 'CHANGE',
		payload: name,
	}
}

export const addProduct = (product) => {
	return {
		type: 'CART_ADD',
		payload: product,
	}
}

export const removeProduct = (product) => {
	return {
		type: 'CART_DELETE',
		payload: product,
	}
}

export const clearCategory = () => {
	return {
		type: 'RESET',
	}
}