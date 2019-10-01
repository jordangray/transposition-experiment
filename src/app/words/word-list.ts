const practiceWords = `

apothecary
quidditch
word

`;

const words = `

adamant
indubitable
kismet
sable
quaver

`;


const toWordList = words => words.trim().split('\n');

export const PRACTICE_WORD_LIST: string[] = toWordList(practiceWords);

export const WORD_LIST: string[] = toWordList(words);
