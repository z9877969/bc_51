import PropTypes from "prop-types";
import noImage from "../../assets/img/no-image.png";

console.log("noImage :>> ", noImage);

const ProductsListItem = ({ id, url = noImage, model, price, currency }) => {
  return (
    <li className="products__item">
      <div className="products__image-wrapper">
        <p className="products__sale">Акція</p>
        <img className="products__image" src={url} alt={model} />
      </div>
      <div className="products__descr">
        <h3 className="products__model">{model}</h3>
        <span className="products__price">{price}</span>
        <span className="products__currency">{currency}</span>
      </div>
      <button className="products__btn-buy" type="button">
        Купити
      </button>
    </li>
  );
};

// ProductsListItem.defaultProps = {
//   url: noImage,
// };

ProductsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string,
  model: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  currency: PropTypes.string.isRequired,
};

export default ProductsListItem;
