import styled from "styled-components";

interface IContainerProps {
  isAdmin: boolean;
  variant?: 'primary' | 'secondary' | 'error'
}

export const Container = styled.li<IContainerProps>`


  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;

    max-width: 220px;
    background-color: var(--color-transparent);

    border-radius: 20px;
    padding: 14px;

    color: var(--color-white);
    text-decoration: none;
  }

  img {
    width: 185px;
    height: 275px;
    border-radius: 20px;
  }

  p:first-of-type {
    margin-top: 18px;
    font-weight: bold;
  }
`;
