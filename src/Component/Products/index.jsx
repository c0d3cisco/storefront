import { useSelector } from "react-redux";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Box, Card, CardMedia, CardContent, Typography, Button, CardActions } from "@mui/material";
// import products from '../../store/inventory.json'
import { useDispatch } from "react-redux";
import { reduceProduct } from "../../store/products";

function Products() {
	const { product, category } = useSelector(state => state)
	const { activeCategory } = category
	const dispatch = useDispatch()

	const handleAddToCart = (item) => {
		// dispatch({ type: 'CART_ADD', payload: item })
		dispatch(reduceProduct(item));
	}

	return (
		<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1 }}>
			<Grid container spacing={6}>
				<Grid spacing={6} item xs={12}>
					Product: {activeCategory}
				</Grid>
				{activeCategory !== 'Deactivated' &&
					product
						.filter((item) => item.category === activeCategory)
						.map((item) => (
							<Grid data-testid={`shownProducts`} item xs={12} sm={6} md={4} key={`productID-${item.name}`}>
								<Card sx={{ maxWidth: 345 }}>
									<CardMedia
										sx={{ height: 140 }}
										image={`https://source.unsplash.com/random?${item.name}`}
										title={item.name}
									/>
									<CardContent>
										<Typography style={{ display: 'flex', justifyContent: 'space-between' }} gutterBottom variant="h5" component="div">
											<span>{item.name[0].toUpperCase() + item.name.slice(1)}</span>
											<span>${item.price}</span>
										</Typography>
										<Typography style={{display: 'flex', justifyContent: 'space-between'}} variant="body2" color="text.secondary">
											<span data-testid="stockDivTest">
													{item.inStock ? item.inStock : 'Out of Stock'}
													</span>
										</Typography>
									</CardContent>
									<CardActions>
										<Button
											size="small"
											disabled={!item.inStock}
											onClick={() => handleAddToCart(item)}
										>ADD TO CART</Button>
										<Button size="small">VIEW DETAILS</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
			</Grid>
		</Box>
	)
}

export default Products
