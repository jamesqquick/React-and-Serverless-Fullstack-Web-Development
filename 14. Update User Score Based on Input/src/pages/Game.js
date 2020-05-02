import React, { useState, useEffect } from 'react';
import {
    StyledGame,
    StyledCharacter,
    StyledScore,
    StyledTimer,
} from '../styled/Game';
import { Strong } from '../styled/Random';
export default function Game({ history }) {
    const [score, setScore] = useState(0);
    const MAX_SECONDS = 50;
    const [ms, setMs] = useState(999);
    const [seconds, setSeconds] = useState(MAX_SECONDS);
    const [currentCharacter, setCurrentCharacter] = useState('');
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

    useEffect(() => {
        setRandomCharacter();
        const currentTime = new Date();
        const interval = setInterval(() => updateTime(currentTime), 1);
        return () => {
            clearInterval(interval);
        };
    }, []);

    const setRandomCharacter = () => {
        const randomInt = Math.floor(Math.random() * 36);
        setCurrentCharacter(characters[randomInt]);
    };

    const updateTime = (startTime) => {
        const endTime = new Date();
        const msPassedStr = (
            endTime.getTime() - startTime.getTime()
        ).toString();
        //add zeros if necessary to ensure the string has exactly 5 characters
        const formattedMSString = ('0000' + msPassedStr).slice(-5);
        //0000 - first 2 are the seconds, and the last 3 are the ms
        const updatedSeconds =
            MAX_SECONDS - parseInt(formattedMSString.substring(0, 2)) - 1;
        const updatedMs =
            1000 -
            parseInt(formattedMSString.substring(formattedMSString.length - 3));
        setSeconds(addLeadingZeros(updatedSeconds, 2));
        setMs(addLeadingZeros(updatedMs, 3));
    };

    useEffect(() => {
        if (seconds <= -1) {
            history.push('/gameOver');
        }
    }, [seconds, ms, history]);

    const keyUpHandler = (e) => {
        console.log(e.key);
        if (e.key === currentCharacter) {
            setScore((prevScore) => prevScore + 1);
        } else {
            if (score > 0) {
                setScore((prevScore) => prevScore - 1);
            }
        }
        setRandomCharacter();
    };

    useEffect(() => {
        document.addEventListener('keyup', keyUpHandler);
        return () => {
            document.removeEventListener('keyup', keyUpHandler);
        };
    }, []);

    const addLeadingZeros = (str, length) => {
        let zeros = '';
        for (let i = 0; i < length; i++) {
            zeros += '0';
        }
        return (zeros + str).slice(-length);
    };

    return (
        <StyledGame>
            <StyledScore>
                Score: <Strong>{score}</Strong>
            </StyledScore>
            <StyledCharacter>{currentCharacter}</StyledCharacter>
            <StyledTimer>
                Time:{' '}
                <Strong>
                    {seconds}:{ms}
                </Strong>
            </StyledTimer>
        </StyledGame>
    );
}
