import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  height: 70px;
  font-size: 24px;
  font-weight: 700;
  width: 100%;
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonHome = styled.button`
  position: absolute;
  right: 0;
  margin-right: 30px;
  border: none;

  padding: 0 4px;

  width: 287px;
  height: 74px;

  background: #33a4f5;
  border-radius: 8px;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  cursor: pointer;

  color: #ffffff;
`;

export const ButtonPokedex = styled.button`
  text-decoration: underline;
  border: none;
  background-color: transparent;

  color: #1a1a1a;

  position: absolute;
  left: 0;
  margin-left: 30px;
  cursor: pointer;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
`;

export const ButtonExcluir = styled.button`
  position: absolute;
  right: 0;
  margin-right: 30px;
  border: none;

  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  position: absolute;
  width: 226px;
  height: 57px;

  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffff;

  background: #ff6262;
  border-radius: 8px;
  cursor: pointer;
`;
