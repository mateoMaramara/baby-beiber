"use strict";
const bieberBaby = [
    'Oh-ooh-whoa-oh-oh-oh-oh',
    'Oh-ooh-whoa-oh-oh-oh-oh',
    'Oh-ooh-whoa-oh, oh-oh-oh-oh',
    'You know you love me (yo), I know you care (uh-huh)',
    'Just shout whenever (yo), and I\'ll be there (uh-huh)',
    'You are my love (yo), you are my heart (uh-huh)',
    'And we will never, ever, ever be apart (yo, uh-huh)',
    'Are we an item? (yo) girl, quit playin\' (uh-huh)',
    'We\'re just friends (yo), what are you sayin\'? (uh-huh)',
    'Said, "There\'s another" (yo), and looked right in my eyes (uh-huh)',
    'My first love broke my heart for the first time, and I was like (yo, uh-huh)',
    'Baby, baby, baby, oh',
    'Like, "Baby, baby, baby, no"',
    'Like, "Baby, baby, baby, oh"',
    'I thought you\'d always be mine, mine',
    'Baby, baby, baby, oh',
    'Like, "Baby, baby, baby, no"',
    'Like, "Baby, baby, baby, oh"',
    'I thought you\'d always be mine, mine',
    'Oh, for you, I would\'ve done whatever (uh-huh)',
    'And I just can\'t believe (yo) we ain\'t together (uh-huh)',
    'And I wanna play it cool (yo), but I\'m losin\' you (uh-huh)',
    'I\'ll buy you anything (yo), I\'ll buy you any ring (uh-huh)',
    'And I\'m in pieces (yo), baby, fix me (uh-huh)',
    'And just shake me \'til you wake me from this bad dream (yo, uh-huh)',
    'I\'m goin\' down (oh), down, down, down (uh-huh)',
    'And I just can\'t believe, my first love won\'t be around, and I\'m like',
    'Baby, baby, baby, oh',
    'Like, "Baby, baby, baby, no"',
    'Like, "Baby, baby, baby, oh"',
    'I thought you\'d always be mine, mine',
    'Baby, baby, baby, oh',
    'Like, "Baby, baby, baby, no"',
    'Like, "Baby, baby, baby, oh"',
    'I thought you\'d always be mine, mine (Luda!)',
    'When I was 13, I had my first love',
    'There was nobody that compared to my baby',
    'And nobody came between us, nor could ever come above',
    'She had me goin\' crazy, oh, I was starstruck',
    'She woke me up daily, don\'t need no Starbucks (woo)',
    'She made my heart pound',
    'And skip a beat when I see her in the street and',
    'At school on the playground',
    'But I really wanna see her on the weekend',
    'She knows she got me dazin\'',
    'Cause she was so amazin\'',
    'And now, my heart is breakin\'',
    'But I just keep on sayin\'',
    'Baby, baby, baby, oh',
    'Like, "Baby, baby, baby, no"',
    'Like, "Baby, baby, baby, oh"',
    'I thought you\'d always be mine, mine',
    'Baby, baby, baby, oh',
    'Like, "Baby, baby, baby, no"',
    'Like, "Baby, baby, baby, oh"',
    'I thought you\'d always be mine, mine',
    'I\'m gone (yeah, yeah, yeah, yeah, yeah, yeah)',
    'Now, I\'m all gone (yeah, yeah, yeah, yeah, yeah, yeah)',
    'Now, I\'m all gone (yeah, yeah, yeah, yeah, yeah, yeah)',
    'Now, I\'m all gone (gone, gone, gone)',
    'I\'m gone'
];
const hasYeah = (lyrics) => {
    return lyrics.some((line) => line.toLowerCase().includes('yeah'));
};
console.log(hasYeah(bieberBaby));
const numYeahs = (lyrics) => {
    return lyrics
        .map((line) => line.toLowerCase().split('yeah').length - 1)
        .reduce((a, b) => a + b, 0);
};
console.log(numYeahs(bieberBaby));
