import inventory from '../../store/inventory.json'
import { useDispatch } from 'react-redux'
import { setCategory, clearCategory } from '../../store/categories'
import { Box, Divider } from '@mui/material'

function Category() {

	const dispatch = useDispatch()

	return (
		<>
			<h3>Browse our Categories</h3>
			<Box sx={{ display: 'flex' }}>
				{Object.keys(inventory.products).map((item) => {
					item = item.toUpperCase()
					return (
						<div key={`categoryID-${item}`}>
							<div
								style={{ padding: '0 10px' }}
								onClick={() => dispatch(setCategory(item))}
							>
								{item}
							</div>
							<Divider orientation="vertical" flexItem />
						</div>
					)
				})}
				<div
					key={`categoryID-reset`}
					style={{ padding: '0 10px' }}
					onClick={() => dispatch(clearCategory())}
				>
					X
				</div>
			</Box>
		</>
	)
}

export default Category