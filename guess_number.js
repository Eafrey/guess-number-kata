'use strict';

function getInt(input) {
    return parseInt(input);
}

function getGuessResult(input, right) {
    let arr = input.split(' ');

    let wrong = "Wrong Input，Input again";
    if(arr.length != 4) {
        return wrong;
    }
    
    let set = new Set();
    arr.forEach(element => {
        set.add(element);
    });
    if(set.size != arr.length) {
        return wrong;
    }

    let num_arr = new Array();
    arr.forEach(element => {
        num_arr.push(parseInt(element));
    });


    num_arr.map(item => parseInt(item));

    let a = 0;
    let b = 0;

    for(let i=0; i<right.length; i++) {
        if(num_arr[i] === right[i]) {
            a++;
        } else {
            if(right.includes(num_arr[i])) {
                b++;
            }
        }
    }

    return a + 'A' + b + 'B';
}


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

var count = 0;

function getInput() {
    rl.question("", (answer) => {
        count++;
        let output = getGuessResult(answer, right_answer);
        console.log(output);

        if(output.substring(0,1) == 4) {
            rl.close();    
            return;
        }
    
        if(count < 6){
            getInput();
            
        }else{
            console.log('you lose!');
            rl.close();
        }
    })
      
}

function getRandom() {
    let res = new Array();
    while(res.length < 4) {
        let random = Math.floor(Math.random()*10);
        if(!res.includes(random)) {
            res.push(random);
        }
    }
    return res;
}


var right_answer = getRandom();
console.log(right_answer);
getInput();