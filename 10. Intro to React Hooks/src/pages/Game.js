import React from 'react';
import {
    StyledGame,
    StyledCharacter,
    StyledScore,
    StyledTimer,
} from '../styled/Game';
import { Strong } from '../styled/Random';
export default function Game() {
    return (
        <StyledGame>
            <StyledScore>
                Score: <Strong>0</Strong>
            </StyledScore>
            <StyledCharacter>A</StyledCharacter>
            <StyledTimer>
                Time: <Strong>00:000</Strong>
            </StyledTimer>
        </StyledGame>
    );
}
