import { Box, Divider } from "@mui/material"

function Header() {

	const headerCSS = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#f5f5f5',
		margin: '-0.5em -0.5em 0 -0.5em',
		padding: '0 0.5em',
	}

	return (
		<>
			<Box sx={headerCSS}>
				<h1>OUR STORE</h1>
				<div>Cart (##)</div>
			</Box>
			<Divider sx={{margin: '0 -0.5em 0 -0.5em'}} />
		</>
	)
}

export default Header