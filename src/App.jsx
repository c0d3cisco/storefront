import Cart from "./Component/Cart";
import Category from "./Component/Categories";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Products from "./Component/Products";
import { Box } from "@mui/material";
import { Provider } from "react-redux";
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <Category />
        <Box sx={{ position: "relative" }}>
          <Cart sx={{ position: "absolute", top: 0, right: 0, zIndex: 1500 }} />
          <Products sx={{ position: "absolute", zIndex: 0 }} />
        </Box>
        <Footer />
      </Box>
    </Provider>
  );
}

export default App;
