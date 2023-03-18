import styled, { css } from "styled-components";

export const HeaderStyle = styled.div`
  ${(props) => css`
    width: 100vw;
    height: 70px;
    background: ${props.theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;

    @media only screen and (max-width: 320px) {
    }
    @media only screen and (min-width: 321px) and (max-width: 480px) {
    }
    @media only screen and (min-width: 481px) and (max-width: 768px) {
    }
    @media only screen and (min-width: 769px) and (max-width: 1024px) {
    }
    @media only screen and (min-width: 1025px) and (max-width: 1200px) {
    }
    @media only screen and (min-width: 1201px) {
    }
  `}
`;
