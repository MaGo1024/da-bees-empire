import styled, { css } from 'styled-components';


export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    background-position: center;
    background-size: cover;
    overflow: hidden;

    &:hover {
      cursor: pointer;
    
      & .background-image {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
    
      & .content {
        opacity: 0.9;
      }

    }
`