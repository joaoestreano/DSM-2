import * as fs from 'fs';
import * as path from 'path';

function preprocessText(text: string): string {
    return text.replace(/[\n\r]/g, ' ').trim();
}

function isPunctuation(char: string): boolean {
    return [',', '.', ';', ':', '!', '?'].includes(char);
}

function countOccurrencesBM(text: string, pattern: string): number {
    const badCharTable = new Array(256).fill(-1);
    for (let i = 0; i < pattern.length; i++) {
        badCharTable[pattern.charCodeAt(i)] = i;
    }

    let count = 0;
    let shift = 0;
    const n = text.length;
    const m = pattern.length;

    while (shift <= n - m) {
        let j = m - 1;
        while (j >= 0 && pattern[j] === text[shift + j]) j--;

        if (j < 0) {
            count++;
            shift += (shift + m < n) ? m - badCharTable[text.charCodeAt(shift + m)] || 1 : 1;
        } else {
            shift += Math.max(1, j - badCharTable[text.charCodeAt(shift + j)]);
        }
    }
    return count;
}

function main() {
    const filePath = path.join(__dirname, 'text.txt');
    const rawText = fs.readFileSync(filePath, 'utf-8');
    const cleanedText = preprocessText(rawText);
    const words = cleanedText.split(/\s+/).map(w => w.trim());
    const seen = new Set<string>();
    const counts: Record<string, number> = {};

    for (const word of words) {
        let pureWord = word.replace(/[.,;:!?]/g, '');
        let punctuations = word.split('').filter(isPunctuation);
        
        if (pureWord && !seen.has(pureWord)) {
            seen.add(pureWord);
            const pattern = pureWord;
            const regex = new RegExp(`\\b${pattern}\\b`, 'gi');
            counts[pattern] = (cleanedText.match(regex) || []).length;
        }

        for (const punc of punctuations) {
            counts[punc] = (counts[punc] || 0) + 1;
        }
    }

    console.log(counts);
}

main();