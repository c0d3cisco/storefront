import { Box, Button, Divider } from "@mui/material"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Header() {

	const headerCSS = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#f5f5f5',
		margin: '-0.5em -0.5em 0 -0.5em',
		padding: '0 0.5em',
	}

	const cart = useSelector(state => state.cart);

	return (
		<>
			<Box sx={headerCSS}>
			<Button
				size="small"
				component={Link}
				to={`/storefront/`}
			><h1>OUR STORE</h1></Button>
				
				<Button
					component={Link}
					to={`/storefront/cart`}
				>
					Cart {`(${cart.length})`}
				</Button>
			</Box>
			<Divider sx={{ margin: '0 -0.5em 0 -0.5em' }} />
		</>
	)
}

export default Header