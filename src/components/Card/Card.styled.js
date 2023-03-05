import styled from "styled-components";
import { getColors } from "../../utils/ReturnCardColor";
import { Colors } from "../../utils/ReturnColors";

export const ImagePoke = styled.img`
  width: 14rem;
  margin-top: -20px;
  margin-right: 35px;
  position: absolute;
`;

export const Pokemon = styled.img`
  height: 11.5rem;
  width: 11.5rem;
  margin-top: -70px;
  margin-left: 20px;

  position: relative;
`;

export const BG = styled.div`
  background-color: ${(props) => Colors(props.types)} #0f0f;
`;

export const Container = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 26rem;
  height: 13.12rem;
  border-radius: 12px;
  background-color: #729f92;

  div {
    display: flex;
    width: 100%;
  }
`;

export const DivDireita = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  gap: 20px;

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 10px;
    position: relative;

    width: 146px;
    height: 38px;
    margin-left: 25px;

    background: #ffffff;
    border-radius: 8px;
    border: none;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;

    color: #0f0f0f;
  }
`;

export const DiviEsquerda = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  button {
    display: flex;
    margin-left: 20px;

    margin-top: 50px;
    position: relative;

    font-size: 16px;
    line-height: 24px;

    background-color: transparent;
    border: none;

    text-decoration-line: underline;

    color: #ffffff;
    cursor: pointer;
  }
`;

export const ButtonExcluir = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;

  width: 146px;
  height: 38px;

  background: #ff6262;
  border-radius: 8px;
  cursor: pointer;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffff;
  margin-left: 23px;

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    color: #ffffff;
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;

    color: #ffffff;

    ::first-letter {
      text-transform: uppercase;
    }
  }

  h3 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    width: 99px;
    height: 31px;
    left: 23px;
    top: 89px;

    border: 1px dashed rgba(255, 255, 255, 0.47);
    border-radius: 8px;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;

    color: #ffffff;
  }
`;

export const DivH3 = styled.div`
  gap: 8px;

  display: flex;
  flex-direction: row;
  background: ${(props) => getColors(props.types)} #0f0f;
`;
