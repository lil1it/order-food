import React from "react";
import styled from "styled-components";
import BackgroundImg from "../../assets/images/summaryBcg.png";
import SummaryInfoCard from "./SummaryInfoCard";

const Summary = () => {
  return (
    <Container>
      <ImgStyle src={BackgroundImg} alt="summary" />
      <SummaryInfoCard />
    </Container>
  );
};

export default Summary;
const Container = styled.div`
  height: 527px;

`;
const ImgStyle = styled.img`
  width: 100%;
  height: 432px;

`;
