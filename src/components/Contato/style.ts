import styled from "styled-components";

export const ContainerExterno = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 10px;
  @media (max-width: 480px) {
    width: 99%;
  }
`;

export const Container = styled.div`
  flex-direction: row;
  width: 1120px;
  display: flex;
  justify-content: space-between;
`;

export const Rodape = styled.div`
  flex: 1;
  margin: 0 18px 42px;
  text-align: start;
`;

export const Title = styled.h3`
  font-weight: bold;
  line-height: 1em;

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ItemList = styled.li`
  list-style: none;
  text-align: start;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Link = styled.a`
  background-color: #bb6159;
  margin: 0 0 24px;
  padding: 18px 54px;
  border-radius: 2px;
  color: #fff;
  display: inline-block;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  line-height: 1.5em;
  font-family: "Lora", serif;
  font-weight: 400;

  &:hover {
    background-color: #ffe1dd;
    color: #122a57;
    transition: 0.3s ease all;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 9px;
    padding: 10px;
  }
`;

export const Adress = styled.address`
  font-style: normal;
  display: block;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const CabecalhoTable = styled.td`
  font-weight: 400;
  text-align: inherit;
  display: table-cell;
  vertical-align: inherit;
  color: #fff;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const Table = styled.table`
  border-collapse: separate;
  text-indent: initial;
  border-spacing: 2px;
`;

export const InfoTable = styled.th`
  padding: 0 0.5 em;
  display: table-cell;
  vertical-align: inherit;
  color: #fff;
`;

export const Horario = styled.span`
  white-space: nowrap;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
