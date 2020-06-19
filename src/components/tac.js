import React, { useEffect, useState } from 'react';

const abbrs = [
    "Take a Chance",
    "Transportation Association of Canada",
    "Tactical Communications",
    "Teen Advisory Council",
    "Toxic Air Contaminant",
    "Thermostatic Air Cleaner",
    "Talking about Christianity",
    "Terminal Area Chart",
    "Threat Assessment Chart",
    "Third Amended Complaint ",
    "Totally Awesome Computers"
];


export const TAC = () => {

    const [ word, setWord ] = useState(abbrs[Math.floor(Math.random()*abbrs.length)])
    useEffect(() => {
        const interval = setInterval(() => {
            setWord(abbrs[Math.floor(Math.random()*abbrs.length)]);
        }, 5000);
        return () => clearInterval(interval);
    });

return <span className={"tac"} key={word}>{word}</span>
}