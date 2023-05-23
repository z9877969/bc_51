import "./Main.css";

import ProductsFilter from "../ProductsFilter/ProductsFilter";
import ProductsList from "../ProductsList/ProductsList";
import productsList from "../../data/products.json";

const mainStyles = {
  minWidth: "900px",
  display: "flex",
  justifyContent: "center",
  columnGap: "20px",
  margin: "0 auto",
};

const Main = () => {
  return (
    <main style={mainStyles}>
      <ProductsFilter />
      <ProductsList productsList={productsList} />
    </main>
  );
};

export default Main;
