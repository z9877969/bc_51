import styled from "styled-components";

const setTextDecoration = ({ isDone }) => {
  return isDone && "text-decoration: line-through;";
};

export const Item = styled.li`
  padding: 10px;
  background-color: green;
  /* background-color: rgb(48, 142, 144); */
  color: rgb(61, 56, 10);
  border: 1px solid rgb(6, 32, 6);
  border-radius: 8px;

  ${(props) => {
    console.log("props :>> ", props);
  }}
`;

export const ItemDate = styled.p`
  padding: 5px;

  ${setTextDecoration}
`;

export const ItemTitle = styled.h3`
  padding: 5px;
  ${setTextDecoration}
`;

export const ItemPriority = styled.p`
  padding: 5px;
  ${setTextDecoration}
`;

export const ItemDescr = styled.p`
  padding: 5px;
  ${setTextDecoration}
`;

export const BtnRemove = styled.button`
  display: block;
  width: 45%;
  padding: 6px 25px;
  margin: 0 auto;
  background-color: rgb(233, 227, 228);
  cursor: pointer;
  border: none;
  border-radius: 8px;

  &:active {
    transform: scale(0.95);
  }
`;
