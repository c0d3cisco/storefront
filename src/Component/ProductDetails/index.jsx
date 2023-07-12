import { Box, Card, CardMedia, CardContent, Typography, Button, CardActions } from "@mui/material";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


function ProductDetails() {
	const { id } = useParams()
	console.log('id', id)
	const product = useSelector(state => state.product)
	console.log('product', product)
	const item = product.find((item) => item._id === id)
	console.log('item', item)

	return (
		<Box>
			<Card sx={{ minHeight: 345 }}>
				<CardMedia
					sx={{ height: 300 }}
					image={`https://source.unsplash.com/random?${item.name}`}
					title={item.name}
				/>
				<CardContent>
					<Typography style={{ display: 'flex', justifyContent: 'space-between' }} gutterBottom variant="h5" component="div">
						<span>{item.name[0].toUpperCase() + item.name.slice(1)}</span>
						<span>${item.price}</span>
					</Typography>
					<Typography style={{ display: 'flex', justifyContent: 'space-between' }} variant="body2" color="text.secondary">
						<span>
							{`This is the coolest item we have. ${item.inStock ? `There are ${item.inStock} item${item.inStock > 1 ? 's' : ''}` : 'This item is out of Stock'}`}
						</span>
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						size="small"
						component={Link}
						to={`/storefront/`}
					>BACK HOME</Button>
				</CardActions>
			</Card>
		</Box>
	)
}

export default ProductDetails