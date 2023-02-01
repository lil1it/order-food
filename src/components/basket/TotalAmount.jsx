import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const TotalAmount = ({ price, onClose, onOrder }) => {
  const orderButton =
    price > 0 ? <Button onClick={onOrder}>Order</Button> : null;
  const fixedPrice = price.toFixed(2);
  return (
    <Container>
      <Infocontainer>
        <Label>Total amount</Label>
        <Price>${fixedPrice}</Price>
      </Infocontainer>
      <ActionButttonsContainer>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        {orderButton}
      </ActionButttonsContainer>
    </Container>
  );
};

export default TotalAmount;

const Label = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
`;

const Price = styled.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #8a2b06;
`;

const Infocontainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ActionButttonsContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
const Container = styled.div`
  padding-top: 30px;
  padding-right: 1rem;
`;
