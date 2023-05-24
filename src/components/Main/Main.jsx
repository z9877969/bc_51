import "./Main.css";

import ProductsFilter from "../ProductsFilter/ProductsFilter";
import ProductsList from "../ProductsList/ProductsList";
import PropTypes from "prop-types";
import productsList from "../../data/products.json";

const mainStyles = {
  minWidth: "900px",
  display: "flex",
  justifyContent: "center",
  columnGap: "20px",
  margin: "0 auto",
};

const Main = ({ addToCart }) => {
  return (
    <main style={mainStyles}>
      <ProductsFilter />
      <ProductsList productsList={productsList} addToCart={addToCart} />
    </main>
  );
};

Main.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Main;
