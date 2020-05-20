import React from 'react';
import { Link } from 'react-router-dom';
import {
    StyledNavItems,
    StyledNavbar,
    StyledNavBrand,
    StyledLink,
} from '../styled/Navbar';
import { Accent } from '../styled/Random';

export default function Navbar() {
    return (
        <StyledNavbar>
            <StyledNavBrand className="nav__brand">
                <Link to="/">
                    Learn.Build.<Accent>Type.</Accent>
                </Link>
            </StyledNavBrand>
            <StyledNavItems>
                <li>
                    <StyledLink to="/">Home</StyledLink>
                </li>
                <li>
                    <StyledLink to="/highScores">High Scores</StyledLink>
                </li>
            </StyledNavItems>
        </StyledNavbar>
    );
}
