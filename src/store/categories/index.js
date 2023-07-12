import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
// const initialState = {
// 	categories: [
// 		{
// 		"_id": "5f0cdc15acac790017fc26ce",
// 		"name": "food",
// 		"description": "Products for consumption",
// 		"__v": 0
// 		},
// 		{
// 		"_id": "5f0cdc25acac790017fc26cf",
// 		"name": "electronics",
// 		"description": "Making your life easier, one volt at a time",
// 		"__v": 0
// 		},
// 		{
// 		"_id": "61610741c271dc0018f3cfe0",
// 		"name": "games",
// 		"description": "Fun for the whole family",
// 		"__v": 0
// 		},
// 		{
// 		"_id": "627d6d7cd16f1800183d9660",
// 		"name": "weapons",
// 		"description": "Very dangerous!",
// 		"__v": 0
// 		}
// 		],
// 	activeCategory: '',

// }

const categorySlice = createSlice({
	name: 'category',
	initialState: {categories: [], activeCategory: ''},
	reducers: {
		initiateFromAPI: (state, action) => {
			return {
				...state,
				categories: action.payload,
			};
		},
		setCategory: (state, action) => {
			return {
				...state, 
				activeCategory: action.payload };
			},
		reset: (state) => ({categories: state.categories, activeCategory: ''}),
	}
});

export const { initiateFromAPI, setCategory, reset } = categorySlice.actions;
export default categorySlice.reducer;

export const getCategories = () => async dispatch => {

	const response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
	dispatch(initiateFromAPI(response.data.results));

};
