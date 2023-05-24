import {
  BtnSubmit,
  ButtonClose,
  CartWrapper,
  IconClose,
  ProductCurrency,
  ProductDescr,
  ProductImage,
  ProductPrice,
  ProductRemoveBtn,
  ProductTitle,
  ProductsItem,
  ProductsList,
} from "./Cart.styled";

import PropTypes from "prop-types";
import sprite from "../../assets/icons/sprite.svg";

const Cart = ({ isOpen, closeCart, products, removeFromCart }) => {
  return (
    <CartWrapper isOpen={isOpen}>
      <ButtonClose type="button" onClick={closeCart}>
        <svg>
          <use href={sprite + "#icon-cross"}></use>
        </svg>
      </ButtonClose>
      <ProductsList>
        {products.map(
          ({ id, url, model, price, currency, sale, quantity, sum }) => (
            <ProductsItem key={id}>
              <ProductImage src={url} alt={model} />
              <ProductDescr>
                <ProductTitle>{model}</ProductTitle>
                <ProductPrice>{price}</ProductPrice>
                <ProductCurrency>{currency}</ProductCurrency>
              </ProductDescr>
              <div>
                <ProductTitle>Quantity: {quantity}</ProductTitle>
                <ProductTitle>Sum: {sum}</ProductTitle>
              </div>
              <ProductRemoveBtn
                type="button"
                onClick={() => {
                  removeFromCart(id);
                }}
              >
                <svg>
                  <use href={sprite + "#icon-bin2"}></use>
                </svg>
              </ProductRemoveBtn>
            </ProductsItem>
          )
        )}
      </ProductsList>
      {products.length > 0 && <BtnSubmit type="button">Submit</BtnSubmit>}
    </CartWrapper>
  );
};

Cart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
