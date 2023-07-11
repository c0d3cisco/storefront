import axios from 'axios';


const initialState = {
	categories: [
		{
		"_id": "5f0cdc15acac790017fc26ce",
		"name": "food",
		"description": "Products for consumption",
		"__v": 0
		},
		{
		"_id": "5f0cdc25acac790017fc26cf",
		"name": "electronics",
		"description": "Making your life easier, one volt at a time",
		"__v": 0
		},
		{
		"_id": "61610741c271dc0018f3cfe0",
		"name": "games",
		"description": "Fun for the whole family",
		"__v": 0
		},
		{
		"_id": "627d6d7cd16f1800183d9660",
		"name": "weapons",
		"description": "Very dangerous!",
		"__v": 0
		}
		],
	activeCategory: '',

}

function categoryReducer(state = initialState, action) {

	let { type, payload } = action;

	switch (type) {
		case 'GET_CATEGORIES':
			return {
				...state,
				categories: payload,
			};
		case 'CHANGE':
			return {
				...state, 
				activeCategory: payload };
		case 'RESET':
			return initialState;
		default:
			return state;
	}
}

export const getCategories = () => async dispatch => {
	const response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
	dispatch({
		type: 'GET_CATEGORIES',
		payload: response.data.results,
	});
};


export default categoryReducer;