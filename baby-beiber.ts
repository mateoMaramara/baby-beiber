import { Lyrics, bieberBaby } from './baby-bieber-lyrics'

const hasYeah = (lyrics: Lyrics): boolean => {
  return lyrics.some((line => line.toLowerCase().includes('yeah'));
};

console.log(hasYeah(bieberBaby));

const numYeahs = (lyrics: Lyrics): number => {
  return lyrics
    .map((line => line.toLowerCase().split("yeah").length - 1)
    .reduce((a, b) => a + b, 0));
};

console.log(numYeahs(bieberBaby));
