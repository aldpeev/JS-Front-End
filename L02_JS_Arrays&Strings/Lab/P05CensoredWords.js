function censor(text, wordToCensor) {
    let censorWord = "*".repeat(wordToCensor.length);

    const regexRepl = new RegExp(wordToCensor, 'g');
    let result = text.replace(regexRepl, censorWord);

    console.log(result);
}

censor('A small sentence with some words', 'small');