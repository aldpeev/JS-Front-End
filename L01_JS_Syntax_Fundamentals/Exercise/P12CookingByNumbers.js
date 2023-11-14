function solve(number, command1, command2, command3, command4, command5) {

    let commandsArr = [command2, command3, command4, command5];
    
    let resultCommand = runCommand(number, command1);
    for(let i = 0; i < commandsArr.length; i++){
        console.log(resultCommand);
        resultCommand = runCommand(resultCommand, commandsArr[i]);
    }
    console.log(resultCommand);

    function runCommand(number, command) {
        let num = Number(number);
        let result;

        switch (command) {
            case "chop":
                result = num / 2;
                break;
            case "dice":
                result = Math.sqrt(num);
                break;
            case "spice":
                result = num + 1;
                break;
            case "bake":
                result = num * 3;
                break;
            case "fillet":
                result = num * 0.8;
                break;
        }

        return result;
    }

}

// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');