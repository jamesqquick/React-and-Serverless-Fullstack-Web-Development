import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.nav`
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 20px;
`;

export const StyledNavBrand = styled.div`
    font-size: 24px;
    text-align: left;
    & > a {
        text-decoration: none;
    }
`;

export const StyledNavItems = styled.ul`
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-gap: 20px;
    grid-auto-flow: column;
    align-items: center;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    transition: 200ms;

    &:hover {
        color: var(--accent-color);
    }
`;

export const StyledButtonLink = styled.button`
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    background: none;
    &:hover {
        color: var(--accent-color);
    }
`;
