import { useSelector } from "react-redux";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import products from '../../store/inventory.json'


function Products() {
	const { category } = useSelector(state => state.category)

	let product = products?.products[category.toLowerCase()]?.inventory;

	return (
		<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
			<Grid container spacing={6}>
				<Grid item xs={12}>
					Product:
				</Grid>
				{Array.isArray(product) ? (
					product.map((item) => (
						<Grid item xs={12} sm={6} md={4} key={`productID-${item.itemName}`}>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									sx={{ height: 140 }}
									image={item.itemImage}
									title={item.itemName}
								/>
								<CardContent>
									<Typography style={{display:'flex', justifyContent:'space-between'}} gutterBottom variant="h5" component="div">
										<div>{item.itemName[0].toUpperCase()+item.itemName.slice(1)}</div>
										<div>${item.itemPrice}</div>
									</Typography>
									<Typography variant="body2" color="text.secondary">
										{item.itemDescription}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))
				) : (
					<Grid item xs={12}>
						<p>No products found</p>
					</Grid>
				)}
			</Grid>
		</Box>
	)
}

export default Products
