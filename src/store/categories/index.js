const initialState = {
	category: 'electronics',
}

function categoryReducer(state = initialState, action) {

	let { type, payload } = action;

	switch (type) {
		case 'CHANGE':
			return {...state, category: payload};
		case 'RESET':
			return initialState;
		default:
			return state;
	}

}

export const setCategory = (name) => {
	return {
		type: 'CHANGE',
		payload: name,
	}
}

export const clearCategory = () => {
	return {
		type: 'RESET',
	}
}

export default categoryReducer;