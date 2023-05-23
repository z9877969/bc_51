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

import sprite from "../../assets/icons/sprite.svg";

const Cart = () => {
  const isOpen = true;
  return (
    <CartWrapper isOpen={isOpen}>
      <ButtonClose type="button">
        <svg>
          <use href={sprite + "#icon-cross"}></use>
        </svg>
        {/* <IconClose>
          <use href={sprite + "#icon-cross"}></use>
        </IconClose> */}
      </ButtonClose>
      <ProductsList>
        <ProductsItem>
          <ProductImage
            src="https://content1.rozetka.com.ua/goods/images/big/238782224.jpg"
            alt=""
          />
          <ProductDescr>
            <ProductTitle>ZTE RedMagic</ProductTitle>
            <ProductPrice>11999</ProductPrice>
            <ProductCurrency>UAH</ProductCurrency>
          </ProductDescr>
          <ProductRemoveBtn type="button">
            <svg>
              <use href={sprite + "#icon-bin2"}></use>
            </svg>
          </ProductRemoveBtn>
        </ProductsItem>
      </ProductsList>
      <BtnSubmit type="button">Submit</BtnSubmit>
    </CartWrapper>
  );
};

export default Cart;
