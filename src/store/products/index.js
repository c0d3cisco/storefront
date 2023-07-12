import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
// const initialState = [
// 	{
// 		"_id": "620333730913520018fa1d2a",
// 		"name": "Stickies",
// 		"category": "office",
// 		"inStock": 2071,
// 		"price": 10,
// 		"__v": 0
// 	},
// 	{
// 		"_id": "636ac522d8f00a001859460d",
// 		"name": "Pizza",
// 		"category": "food",
// 		"inStock": 852,
// 		"price": 1.99,
// 		"__v": 0
// 	},
// 	{
// 		"_id": "636ac528d8f00a001859460f",
// 		"name": "Cookies",
// 		"category": "food",
// 		"inStock": 99963,
// 		"price": 2.38,
// 		"__v": 0
// 	},
// 	{
// 		"_id": "636ac534d8f00a0018594611",
// 		"name": "Plasma TV",
// 		"category": "electronics",
// 		"inStock": 5928,
// 		"price": 1000,
// 		"__v": 0
// 	},
// 	{
// 		"_id": "636ac547d8f00a0018594615",
// 		"name": "iPad",
// 		"category": "electronics",
// 		"inStock": 10000,
// 		"price": 1000,
// 		"__v": 0
// 	},
// 	{
// 		"_id": "636ac5c7d8f00a0018594617",
// 		"name": "Fancy Pants",
// 		"category": "clothes",
// 		"inStock": 878,
// 		"price": 1000,
// 		"__v": 0
// 	},
// 	{
// 		"_id": "636ac5cdd8f00a0018594619",
// 		"name": "Green Jeans",
// 		"category": "clothes",
// 		"inStock": 82,
// 		"price": 1000,
// 		"__v": 0
// 	},
// 	{
// 		"_id": "636ac5fdd8f00a001859461c",
// 		"name": "Monopoly",
// 		"category": "games",
// 		"inStock": 890,
// 		"price": 1000,
// 		"__v": 0
// 	},
// 	{
// 		"_id": "636ac607d8f00a001859461e",
// 		"name": "Smash Bros",
// 		"category": "games",
// 		"inStock": 440,
// 		"price": 1000,
// 		"__v": 0
// 	},
// 	{
// 		"_id": "636ac617d8f00a0018594620",
// 		"name": "Samurai Sword",
// 		"category": "weapons",
// 		"inStock": 9389,
// 		"price": 1000,
// 		"__v": 0
// 	},
// 	{
// 		"_id": "636ac657d8f00a0018594622",
// 		"name": "Knife",
// 		"category": "weapons",
// 		"inStock": 5994,
// 		"price": 10,
// 		"__v": 0
// 	},
// 	{
// 		"_id": "642c496f817e9b00140439ff",
// 		"name": "camera",
// 		"category": "electronics",
// 		"price": 109.99,
// 		"inStock": 2148,
// 		"__v": 0
// 	},
// 	{
// 		"_id": "642c71a8817e9b0014043a13",
// 		"name": "TV",
// 		"category": "electronics",
// 		"price": 1099.99,
// 		"inStock": 2169,
// 		"__v": 0
// 	},
// 	{
// 		"_id": "642c71c7817e9b0014043a15",
// 		"name": "Banana",
// 		"category": "food",
// 		"price": 0.99,
// 		"inStock": 730,
// 		"__v": 0
// 	}
// ]

const productSlice = createSlice({
	name: 'product',
	initialState: [],
	reducers: {
		getProducts: (state, action) => action.payload,
		// function that takes in the reduced product and returns the state with the updated product
		adjustStateStock: (state, action) => state.map(product => {
			if (product._id === action.payload._id) {
				// console.log(action.payload)
				return action.payload;
			}
			return product;
		})
		
	}
})

export const { getProducts, adjustStateStock } = productSlice.actions;
export default productSlice.reducer;


export const getProductsAPI = (activeCategory) => async dispatch => {
	const response = await axios.get(`https://api-js401.herokuapp.com/api/v1/products?category=${activeCategory}`);
	dispatch(getProducts(response.data.results));
}

export const reduceProduct = (product) => async (dispatch) => {
	try {
		
		let reducedProduct = { ...product, inStock: product.inStock - 1 }
		console.log(reducedProduct);
		const response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, reducedProduct);
		dispatch(adjustStateStock(response.data));
	} catch (error) {
		console.error(error);
	}
}

export const returnProduct = (product) => async (dispatch, getState) => {
	try {
		const state = getState().product; // Accessing the internal state
		console.log(state);
    let reducedProduct = state.find(item => item._id === product._id);
		reducedProduct = { ...reducedProduct, inStock: reducedProduct.inStock + 1 };
		const response = await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, reducedProduct);
		dispatch(adjustStateStock(response.data));
	} catch (error) {
		console.error(error);
	}
}
