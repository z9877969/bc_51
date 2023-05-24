import PropTypes from "prop-types";
import clsx from "clsx";
import noImage from "../../assets/img/no-image.png";
import s from "./ProductsListItem.module.css";

const ProductsListItem = (props) => {
  const { id, url = noImage, model, price, currency, sale, addToCart } = props;
  return (
    <li className={s.item}>
      <div className={s.imageWrapper}>
        <p className={clsx(s.sale, sale && s.active)}>Акція</p>

        <img className={s.image} src={url} alt={model} />
      </div>
      <div className={s.descr}>
        <h3 className={s.model}>{model}</h3>
        {price ? (
          <>
            <span className={s.price}>{price}</span>
            <span className={s.currency}>{currency}</span>
          </>
        ) : (
          <span className={s.currency}>Немає в наявності</span>
        )}
      </div>
      <button
        className={s.btnBuy}
        type="button"
        disabled={!price}
        onClick={(e) => {
          price &&
            addToCart({
              id,
              url: url ? url : noImage,
              model,
              price,
              currency,
              sale,
            });
        }}
      >
        Купити
      </button>
    </li>
  );
};

ProductsListItem.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string,
  model: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  currency: PropTypes.string.isRequired,
  sale: PropTypes.bool,
  addToCart: PropTypes.func.isRequired,
};

export default ProductsListItem;
