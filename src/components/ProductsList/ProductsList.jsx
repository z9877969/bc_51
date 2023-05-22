import "./ProductsList.css";

import ProductsListItem from "../ProductsListItem/ProductsListItem";
import PropTypes from "prop-types";

const ProductsList = ({ productsList }) => {
  return (
    <ul className="products">
      {productsList.map((el) => (
        <ProductsListItem
          key={el.id}
          //   id={el.id}
          //   url={el.url}
          //   model={el.model}
          //   price={el.price}
          //   currency={el.currency}
          {...el}
        />
      ))}
    </ul>
  );
};

ProductsList.propTypes = {
  productsList: PropTypes.array.isRequired,
};

export default ProductsList;
