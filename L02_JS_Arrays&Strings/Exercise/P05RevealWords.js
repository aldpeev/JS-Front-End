function solve(replacingWords, text){

    let wordsSplit = replacingWords.split(', ');
    let textSplit = text.split(' ');

    while(wordsSplit.length > 0){
        for (let i = 0; i < textSplit.length; i++) {
            if(textSplit[i].startsWith("*") && textSplit[i].length === wordsSplit[0].length){
                textSplit[i] = wordsSplit[0];
                wordsSplit.shift();
            }
        }
    }

    console.log(textSplit.join(' '));

} 

solve('great, learning','softuni is ***** place for ******** new programming languages');