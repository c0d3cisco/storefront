
import { Box } from "@mui/material";
import Category from "../Categories";
import Products from "../Products";
import Cart from "../StorefrontCart";


function StorefrontApp() {
	return (
		<Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Category />
        <Box sx={{ position: "relative" }}>
          <Cart sx={{ position: "fix", top: 0, right: 0, zIndex: 1500 }} />
          <Products sx={{ position: "absolute", zIndex: 0 }} />
        </Box>
      </Box>
	)
}

export default StorefrontApp