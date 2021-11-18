import styled from "styled-components";

export const Cabecalho = styled.header`
  background-color: #bb6159;
  height: 120px;
  display: flex;
  align-items: center;
  color: #fff;
`;

export const Container = styled.div`
  display: flex;
  max-width: 992px;
  margin: auto;
  width: 100%;
  min-width: 320px;
  justify-content: space-between;
`;

export const Title = styled.h1`
  &:hover {
    color: #aaa;
    cursor: pointer;
  }
`;

export const LinkTitle = styled.a`
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #aaa;
  }
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  max-width: 400px;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`;

export const LinkItem = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #aaa;
  }
`;
