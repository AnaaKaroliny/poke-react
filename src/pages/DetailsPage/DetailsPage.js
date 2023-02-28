import React from "react";
import Header from "../../components/Header/Header";
import {
  Container,
  CardDetail,
  Moves,
  BaseStat,
  Photos,
  Div1,
  Div2,
  Detalhes,
} from "./DetailsPage.styled";
import poke from "../../assets/poke.png";
import Card from "../../components/Card/Card";

export default function DetailsPage() {
  return (
    <>
      <Header />
      <Container>
        <h1>Detalhes</h1>
        <CardDetail>
          <img src={poke} alt="" />
          <Photos>
            <Div1>3</Div1>
            <Div2>4</Div2>
          </Photos>

          <BaseStat>2</BaseStat>
          <Moves>1</Moves>
          <Detalhes>0</Detalhes>
        </CardDetail>
      </Container>
    </>
  );
}
