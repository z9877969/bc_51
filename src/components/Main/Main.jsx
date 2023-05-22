import "./Main.css";

import ProductsFilter from "../ProductsFilter/ProductsFilter";
import ProductsList from "../ProductsList/ProductsList";
import productsList from "../../data/products.json";

const Main = () => {
  return (
    <main className="main__container">
      <ProductsFilter />
      <ProductsList productsList={productsList} />
    </main>
  );
};

export default Main;
