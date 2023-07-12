
import { Card, TextField, Button } from "@mui/material"
import { useSelector } from "react-redux"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function CartPage() {

	const [value, setValue] = useState(null);

	const cart = useSelector(state => state.cart);
	let totalCart = 0;

	return (
		<Card sx={{ width: '85vw', margin: '1em auto 0 auto', padding: '16px' }}>
			<div style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }}>
				<h2>Order Summary</h2>
				<table>
					<thead>
						<tr>
							<th>Item</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{cart.map((item, idx) => {
							totalCart += item.price;
							return (
								<tr key={`cartID-${idx}`}>
									<td>{item.name}</td>
									<td>${item.price}</td>
								</tr>
							)
						})}
						<tr key={`cartID-total`}>
							<td>Total</td>
							<td>${totalCart}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<hr />
			<form>
				<div style={{ display: 'flex', justifyContent: 'space-around', margin: 'auto' }}>
					<div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>

						<h4>Billing Address</h4>
						<TextField id="full_name-basic" label="Full Name" variant="standard" />
						<TextField id="address-basic" label="Address" variant="standard" />
						<TextField id="city-basic" label="City" variant="standard" />
						<TextField id="outlined-basic" label="State" variant="standard" />
						<TextField id="outlined-basic" label="Zip" variant="standard" />
					</div>
					<div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
						<div>
							<h4>Payment Details </h4>
							<p>Not for real use</p>
						</div>
						<TextField id="credit_card-basic" label="Credit Card #" variant="standard" />
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatePicker inputVariant="standard" label="Exp Date" value={value} onChange={(newValue) => setValue(newValue)} />
						</LocalizationProvider>
						<TextField id="cvv-basic" label="CVV" variant="standard" />
					</div>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '24px' }}>
				<Button variant="contained" type="submit">Submit Order</Button>
				</div>
			</form>
		</Card>
	)
}

export default CartPage