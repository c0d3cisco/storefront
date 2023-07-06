import { useSelector } from "react-redux";

function Products() {
	const { category } = useSelector(state => state.category)

	return (
		<div>Product: {category}</div>
	)
}

export default Products