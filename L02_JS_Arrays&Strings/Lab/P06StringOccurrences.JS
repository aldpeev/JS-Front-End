function solve(text, word){
    let result = text.split(" ").filter(e => e === word);
    console.log(result.length);
}

solve('This is a word and it also is a sentence','is');