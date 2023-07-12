import { Provider } from "react-redux";
import store from './store';
import StorefrontApp from "./Component/Storefront";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import CartPage from "./Component/CartPage";
import ProductDetails from "./Component/ProductDetails";



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/storefront/" element={<StorefrontApp />} />
        <Route path="/storefront/cart" element={<CartPage/> } />
        <Route path="/storefront/product/:id" element={<ProductDetails />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </Provider>
  );
}

export default App;
