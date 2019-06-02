class WordCloudData {
    constructor(inputString) {
        this.wordsToCounts = new Map();
        this.populateWordsToCounts(inputString);
    }

    populateWordsToCounts(inputString) {
        return this.splitWords(inputString)
    }

    splitWords(words) {
        let startIdx = 0;
        let wordCount = 0;
        for (let i = 0; i < words.length; i++) {
            const char = words[i];
            if (i === words.length - 1) {
                const val = words.slice(startIdx, startIdx + wordCount + 1);
                if (val.length > 0) this.add(val);
            } else if (this.isLetter(char)) {
                if (wordCount === 0) {
                    startIdx = i;
                }
                wordCount++;
            } else if (char === "'") {
                wordCount++;
            } else if (char === '-') {
                if (words[i + 1] && words[i + 1] === ' ') {
                    i++;
                    wordCount = 0;
                } else {
                    wordCount++;
                }
            } else {
                const val = words.slice(startIdx, startIdx + wordCount);
                if (val.length > 0) this.add(val);
                wordCount = 0;
            }
        }
    }

    add(word) {
        const capWord = word[0].toUpperCase() + word.slice(1);
        if (this.wordsToCounts.has(word)) {
            this.wordsToCounts.set(word, this.wordsToCounts.get(word) + 1);
        } else if (this.wordsToCounts.has(capWord)) {
            this.wordsToCounts.set(capWord, this.wordsToCounts.get(capWord) + 1);
        } else {
            this.wordsToCounts.set(word, 1);
        }
    }

    isLetter(char) {
        return /\w/.test(char)
    }

}
