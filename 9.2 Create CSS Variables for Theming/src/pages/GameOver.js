import React, { useEffect, useState } from 'react';
import { useScore } from '../contexts/ScoreContext';
import { StyledLink } from '../styled/Navbar';
import { StyledCharacter } from '../styled/Game';
import { StyledTitle } from '../styled/Random';
import { useAuth0 } from '../auth';
export default function GameOver({ history }) {
    const [score] = useScore();
    const [scoreMessage, setScoreMessage] = useState('');
    const { isAuthenticated, getTokenSilently } = useAuth0();
    if (score === -1) {
        history.push('/');
    }

    useEffect(() => {
        const saveHighScore = async () => {
            try {
                const token = await getTokenSilently();
                const options = {
                    method: 'POST',
                    body: JSON.stringify({
                        name: 'asdasfsd',
                        score,
                    }),
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                };
                const res = await fetch(
                    '/.netlify/functions/saveHighScore',
                    options
                );
                const data = await res.json();
                if (data.id) {
                    setScoreMessage('Congrats! You got a high score!!');
                } else {
                    setScoreMessage('Sorry, not a high score. Keep trying!');
                }
            } catch (err) {
                console.error(err);
            }
        };
        if (isAuthenticated) {
            saveHighScore();
        }
    }, [score, isAuthenticated]);
    return (
        <div>
            <StyledTitle>Game Over</StyledTitle>
            <h2>{scoreMessage}</h2>
            {!isAuthenticated && (
                <p>You should log in or sign up to compete for high scores.</p>
            )}
            <StyledCharacter>{score}</StyledCharacter>
            <div>
                <StyledLink to="/">Go Home</StyledLink>
            </div>
            <div>
                <StyledLink to="/game">Play Again</StyledLink>
            </div>
        </div>
    );
}
