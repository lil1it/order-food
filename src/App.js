import { useState } from "react";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Summary from "./components/summary/Summary";
import { BasketProvider } from "./store/BasketContext";
import styled from "styled-components";

function App() {
  const [isBasketVisible, setBasketVisible] = useState(false);

  const showBasketHandler = () => {
    setBasketVisible((prevState) => !prevState);
  };

  return (
    <BasketProvider>
      <Header onShowBasket={showBasketHandler}></Header>
      <Content>
        <Summary />
        <Meals /> {isBasketVisible && <Basket onClose={showBasketHandler} />}
      </Content>
    </BasketProvider>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
`;
