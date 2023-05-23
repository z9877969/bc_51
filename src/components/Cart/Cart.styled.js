import styled from "@emotion/styled";

export const CartWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  /* right: 0; */
  width: 400px;
  height: 500px;
  background-color: darkslategray;
  overflow-y: scroll;
  padding: 20px 15px 30px;
  z-index: 25;
  transition: transform 0.5s linear;

  ${(props) => console.log(props)}

  ${(props) => (props.isOpen ? "transform: translateX(-100%);" : null)}
`;

const Button = styled.button`
  &:active {
    transform: scale(0.97);
  }
`;

export const ButtonClose = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-left: auto;
  margin-bottom: 20px;
  background-color: lightslategray;
  border: 1px solid #212121;
  border-radius: 50%;

  & svg {
    width: 15px;
    height: 15px;
  }
`;

export const IconClose = styled.svg`
  width: 15px;
  height: 15px;
`;

export const ProductsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 20px;
`;

export const ProductsItem = styled.li`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin: 0;
  padding: 5px;
  height: 100px;
  border: 1px solid #212121;
`;

export const ProductImage = styled.img`
  width: 70px;
  height: 100%;
`;

export const ProductDescr = styled.div`
  margin-left: 20px;
  padding: 10px;
  color: bisque;
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  text-decoration: underline;
`;

const PriceDescr = styled.span`
  color: yellow;
  font-size: 16px;
`;

export const ProductPrice = styled(PriceDescr)`
  font-weight: bold;
`;
export const ProductCurrency = styled(PriceDescr)`
  text-decoration: underline;
`;

export const ProductRemoveBtn = styled(Button)`
  margin-left: auto;
  padding: 10px;
  border: none;
  background-color: burlywood;
  border-radius: 10px;

  & svg {
    width: 30px;
    height: 30px;
    fill: rgb(75, 102, 75);
  }
`;

export const BtnSubmit = styled(Button)`
  background-color: ${({ theme }) => theme.colors.warn};
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  font-size: 24px;
  color: ${(props) => props.theme.colors.success};
`;
