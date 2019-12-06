import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

//contexts
import { ProductContext } from "./contexts/ProductContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  //step1 create function
  const addItem = item => {
    // add the given item to the cart
    setCart([...cart, item]);
  };

  return (
	<div className="App">
	{/* step3 wrapped components with provider */}
      <ProductContext.Provider value={{ products, addItem }}>
        <Navigation cart={cart} />

        {/* Routes */}
        <Route
		<Route exact path="/" component={Products} />
        />

        <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
      </ProductContext.Provider>
    </div>
  );
}

export default App;
