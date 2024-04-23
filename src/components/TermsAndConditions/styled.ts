import styled, { css } from 'styled-components';

export const TermsContainer = styled.div`
  overflow: auto;
  padding: 20px 15px;
  box-sizing: border-box;
  max-width: 90vw;
  max-height: 90vh;
  color: #3e3e3e;

  @media (min-width: 1024px) {
    max-width: 960px;
  }
`;

export const Header = styled.div`
  max-width: 80%;
  margin-right: auto;
`;

export const Title = styled.h4`
  margin: 0 0 15px;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 25px;
  }

  @media (min-width: 1024px) {
    font-size: 30px;
  }
`;

export const Body = styled.div`
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: #cccccc;
  padding: 10px 0;
  p,
  ol {
    font-family: 'Roboto', Sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    margin-top: 14.4px;
    margin-bottom: 0;

    li {
      margin-bottom: 5px;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  padding-bottom: 0px;

  button {
    color: #3e3e3e;
    border: 1px solid #3e3e3e;
    width: 162px;
    text-transform: capitalize;
    font-size: 16px;
    line-height: 25px;
    padding: 5px 15px;
    border-radius: 4px;
    background-color: transparent;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: #3e3e3e;
      border-color: #3e3e3e;
      color: #fff;
    }
  }
`;
