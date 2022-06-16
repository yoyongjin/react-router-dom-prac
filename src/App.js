import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        {/* domain.com/welcome => Welcome Component */}
        <Route path="/products">
          <Products />
        </Route>
        {/* domain.com/products => Products Component */}
      </main>
    </div>
  );
}

export default App;
