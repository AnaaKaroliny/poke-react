import styled from "styled-components";

// export const CardDetail = styled.div`
//   background-color: #729f92;

//   width: 50px;
//   height: 50px;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   img {

// `;

export const CardDetail = styled.section`
  width: 80%;
  height: 80%;
  border-radius: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #729f92;

  img {
    width: 45%;
    margin-left: 29.35rem;
    position: absolute;
  }
`;

export const Moves = styled.div`
  width: 14rem;
  height: 20rem;
  border-radius: 8px;
  background-color: #ffff;
  margin-top: 150px;
  margin-left: 350px;
  position: absolute;
`;

export const BaseStat = styled.div`
  width: 16rem;
  height: 30rem;
  border-radius: 8px;
  background-color: #ffff;
  margin-right: 200px;
  position: absolute;
`;

export const Photos = styled.div`
  width: 14rem;
  height: 30rem;
  border-radius: 8px;
  background-color: transparent;
  margin-right: 750px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  gap: 53px 20px;

  background-color: #5d5d5d;
  h1 {
    color: #ffff;
    margin-right: 1100px;

    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 72px;
  }
`;

export const Div1 = styled.div`
  background-color: #ffff;
  height: 50%;
  border-radius: 8px;
`;

export const Div2 = styled.div`
  background-color: #ffff;
  border-radius: 8px;
  height: 50%;
  margin-top: 10px;
`;

export const Detalhes = styled.div`
  background-color: #ffff;
  border-radius: 8px;
  width: 25rem;
  height: 8rem;
  margin-top: -300px;
  margin-left: 520px;
  margin-bottom: 45px;
  position: absolute;
`;
