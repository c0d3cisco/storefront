import { IconButton, Paper } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { returnProduct } from "../../store/products"
import { remove } from "../../store/cart";

function Cart() {
	const dispatch = useDispatch()
	const cart = useSelector(state => state.cart)

	const handleDelete = (item) => {
		dispatch(returnProduct(item));
		dispatch(remove(item));
	}

	return (
		<>
			{cart.map((item, idx) => {
				return (
					<Paper elevation={Math.ceil(Math.random() * 24)} style={{width: '8em', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} key={`cartID-${idx}`}>
						<div style={{paddingLeft: '16px'}}>{item.name}</div>
						<IconButton
							aria-label="delete"
							color="primary"
							onClick={() => handleDelete(item)}
						>
							<DeleteIcon />
						</IconButton>
					</Paper>
				)
			})}
		</>
	)
}

export default Cart