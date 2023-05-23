import PropTypes from "prop-types";
import clsx from "clsx";
import noImage from "../../assets/img/no-image.png";
import s from "./ProductsListItem.module.css";

const bool = false;

console.log(clsx("class-1", "class-2", bool && "class-3"));

const ProductsListItem = (props) => {
  const { id, url = noImage, model, price, currency, sale } = props;
  return (
    <li className={s.item}>
      <div className={s.imageWrapper}>
        {/* <p className={`${s.sale}  ${sale ? s.active : ""}`}>Акція</p> */}
        <p className={clsx(s.sale, sale && s.active)}>Акція</p>
        {/* true && "qwe" && "null" && 24 */}
        <img className={s.image} src={url} alt={model} />
      </div>
      <div className={s.descr}>
        <h3 className={s.model}>{model}</h3>
        <span className={s.price}>{price}</span>
        <span className={s.currency}>{currency}</span>
      </div>
      <button className={s.btnBuy} type="button">
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
};

export default ProductsListItem;
