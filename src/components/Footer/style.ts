import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
`;

export const Texto = styled.p`
  line-height: 1.8em;
  letter-spacing: 1px;

  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  color: #fff;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #bb6159;
  font-weight: 549;

  &:hover {
    color: #000;
    /* color: #303f9f; */
    transition: 0.3s ease all;
  }
`;
