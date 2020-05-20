import styled from 'styled-components';

export const StyledTimer = styled.p`
    grid-column: 3;
    font-size: 1.5rem;
`;

export const StyledGame = styled.div`
    height: 75vh;
    max-height: 500px;
    display: grid;
    align-items: center;
    grid-template-rows: 50px 1fr;
    grid-template-columns: minmax(50px, auto) 1fr minmax(50px, auto);
`;

export const StyledCharacter = styled.p`
    font-size: 15rem;
    grid-row: 2;
    grid-column: 1/4;
    text-align: center;
    color: #e16365;
`;

export const StyledScore = styled.p`
    font-size: 1.5rem;
`;
