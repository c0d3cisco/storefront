import inventory from '../../store/inventory.json'
import { useDispatch } from 'react-redux'
import { setCategory, clearCategory } from '../../store/categories'

function Category() {

	const dispatch = useDispatch()

	return (
		<>
			{Object.keys(inventory.products).map((item, index) => {
				item = item[0].toUpperCase() + item.slice(1);
				return (
					<div
						key={`categoryID-${index}`}
						onClick={() => dispatch(setCategory(item))}
					>
						{item}
					</div>)
			})}
			<div
				key={`categoryID-reset`}
				onClick={() => dispatch(clearCategory())}
			>
				Clear Selection
			</div>
		</>
	)
}

export default Category