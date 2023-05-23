import ProductsListItem from "../ProductsListItem/ProductsListItem";
import PropTypes from "prop-types";
import s from "./ProductsList.module.css";

const ProductsList = ({ productsList }) => {
  return (
    <ul className={s.products}>
      {productsList.map((el) => (
        <ProductsListItem
          key={el.id}
          id={el.id}
          url={el.url}
          model={el.model}
          price={el.price}
          currency={el.currency}
          sale={el.sale}
        />
      ))}
    </ul>
  );
};

ProductsList.propTypes = {
  productsList: PropTypes.array.isRequired,
};

export default ProductsList;
