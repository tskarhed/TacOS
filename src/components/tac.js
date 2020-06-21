import React, { useEffect, useState } from 'react';

const abbrs = [
    "Taking A Chance",
    "Transportation Association of Canada",
    "Teen Advisory Council",
    "Toxic Air Contaminants",
    "Thermostatic Air Cleaner",
    "Talking about Christianity",
    "Terminal Area Chart",
    "Threat Assessment Chart",
    "Totally Awesome Computers",
    "Terrific Abbreviation Cycling",
    "Terry's Awesome triCeps",
    "Tobias At the Circus",
    "TACtical broomsticks"
];


export const TAC = () => {

    const [ word, setWord ] = useState(abbrs[Math.floor(Math.random()*abbrs.length)])
    useEffect(() => {
        const interval = setInterval(() => {
            setWord(abbrs[Math.floor(Math.random()*abbrs.length)]);
        }, 7000);
        return () => clearInterval(interval);
    });

    return <span alt="Abbreviation for t, a, c" className={"tac"} key={word}>{word}</span>
}