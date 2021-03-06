import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 992px;
  margin: auto;
  width: 100%;
  min-width: 320px;

  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 100px;
`;

export const Iframe = styled.div`
  @media (max-width: 768px) {
    width: 99.5%;
  }
`;

export const ContainerExterno = styled.div`
  background-color: #bb6159;
  /* width: 180%; */
  background-size: contain;
  padding-bottom: 70px;
  font-family: "Open Sans", sans-serif;
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 40px;
  margin-bottom: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
  @media (max-width: 480px) {
    font-size: 27px;
  }
`;

export const ListaServicos = styled.div``;

export const ItemServico = styled.div`
  text-align: center;
  margin: 0 10px;
`;

export const Link = styled.a`
  width: 120px;
  background-color: #0075a2;
  border-radius: 30px;
  height: 50px;
  text-align: center;
  margin-top: 20px;
  line-height: 50px;
  padding: 10px 10px;
  text-decoration: none;
  color: black;
  font-size: 14px;
  font-weight: 700;

  &:hover {
    background-color: #ffe1dd;
    transition: 0.3s ease all;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #fff;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const Image = styled.img`
  height: 270px;
  width: 290px;
  border-radius: 50%;
  border: 5px solid white;
  margin: auto;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 210px;
    width: 230px;
  }
  @media (max-width: 480px) {
    height: 160px;
    width: 180px;
  }
`;
