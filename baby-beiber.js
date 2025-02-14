"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baby_bieber_lyrics_1 = require("./baby-bieber-lyrics");
const hasYeah = (lyrics) => {
    return lyrics.some((line => line.toLowerCase().includes('yeah')));
};
console.log(hasYeah(baby_bieber_lyrics_1.bieberBaby));
const numYeahs = (lyrics) => {
    return lyrics
        .map((line => line.toLowerCase().split("yeah").length - 1)
        .reduce((a, b) => a + b, 0));
};
console.log(numYeahs(baby_bieber_lyrics_1.bieberBaby));
