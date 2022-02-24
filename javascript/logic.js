// Code credits: this code was written by Dr. Pavol Federl for the SENG 513 course at the UofC
// https://codepen.io/pfederl/pen/JEMKwB

function getStats(txt) {
    // you need to write your own code here

    // Find nChars
    let numChars = txt.length;

    // Find nLines
    let allLines = txt.split(/\r?\n/);
    let numLines = allLines.length;

    // ---- Find nNonEmptyLines
    let numNonEmptyLines = 0;
    let numMaxLineLength = 0;

    for (let line of allLines) {
        if (line.length !== 0 && /\S/.test(line)) {
            numNonEmptyLines++;
        }
        // Find maxLineLength
        if (line.length > numMaxLineLength) {
            numMaxLineLength = line.length;
        }
    }

    // I gotta say, the requirements for what constitutes a word were really vague and kept changing
    // with every description that was given in the discussion board so I just hope this is what you
    // were looking for but idk what you really wanted from us

    // Find nWords
    let numWords = 0;
    let totalWordLength = 0;
    let mapWordFrequency = new Map();

    let allWords = txt
        .replace(/\s/g, " ") // Turn all whitespace into spaces
        .replace(/[^a-z0-9 ]/gi, "") // Remove all non alphanumeric characters or spaces
        .split(/([a-z]+)|(\d+)| +/i) // Split string based on spaces and switches from letter to number / vice-versa
        .filter((element) => element) // Remove any empty characters (basically just the last element if txt ends with an empty line)
        .map((a) => {
            return a.toLowerCase(); // go through each word and make it lower case
        });
    numWords = allWords.length;

    for (let word of allWords) {
        totalWordLength += word.length;

        // Find Frequency of Words
        if (mapWordFrequency.get(word) !== undefined) {
            mapWordFrequency.set(word, mapWordFrequency.get(word) + 1);
        } else {
            mapWordFrequency.set(word, 1);
        }
    }

    // Find Longest Words
    // Wasn't sure if duplicate words were allowed so I removed extras
    let longestAllWords = [...new Set(allWords)].sort().sort(function (a, b) {
        // First sort is alphabetical
        return b.length - a.length; // Second sort is by length
    });

    // Sort Words by Frequency First and Alphabetically Second
    let frequentWords = [...new Set(allWords)].sort().sort(function (a, b) {
        // First sort is alphabetical
        return mapWordFrequency.get(b) - mapWordFrequency.get(a); // Second sort is by frequency
    });
    // Append Frequency to Each Word
    for (let i = 0; i < frequentWords.length; i++) {
        frequentWords[i] = frequentWords[i].concat(
            "(",
            mapWordFrequency.get(frequentWords[i]),
            ")"
        );
    }

    // Find averageWordLength
    let numAverageWordLength = +(totalWordLength / numWords).toFixed(2); // Round to 2 decimal points

    if (longestAllWords.length > 10) longestAllWords.length = 10; // Reduce max length to 10
    if (frequentWords.length > 10) frequentWords.length = 10; // AKA the best hacky way to reduce array size

    return {
        nChars: numChars,
        nWords: numWords,
        nLines: numLines,
        nNonEmptyLines: numNonEmptyLines,
        averageWordLength: numAverageWordLength,
        maxLineLength: numMaxLineLength,
        tenLongestWords: longestAllWords,
        tenMostFrequentWords: frequentWords,
    };
}
