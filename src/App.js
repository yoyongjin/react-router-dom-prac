import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          {/* domain.com/welcome => Welcome Component */}
          <Route path="/products" exact>
            <Products />
          </Route>
          {/* domain.com/products => Products Component */}
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
        {/* domain.com/product-detail/~~~  */}
      </main>
    </div>
  );
}

export default App;
