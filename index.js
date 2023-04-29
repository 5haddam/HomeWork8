// Task 1

counterForTaskOne = 10;
resultForTaskOne = '';

while (counterForTaskOne <= 20) {
    resultForTaskOne += `${counterForTaskOne}, `;
    counterForTaskOne++;
}

alert(`№ 1\n${resultForTaskOne.slice(0, resultForTaskOne.length -2)}`);


// Task 2

counterForTaskTwo = 10;
resultForTaskTwo = '';

while (counterForTaskTwo <= 20) {
    resultForTaskTwo += `${counterForTaskTwo}^2 = ${counterForTaskTwo ** 2}\n`;
    counterForTaskTwo++;
}

alert(`№ 2\n${resultForTaskTwo.slice(0, resultForTaskTwo.length -1)}`);

// Task 3

counterForTaskThree = 1;
resultForTaskThree = '';

while (counterForTaskThree <= 9) {
    resultForTaskThree += `7 * ${counterForTaskThree} = ${7 * counterForTaskThree}\n`;
    counterForTaskThree++;
}

alert(`№ 3\n${resultForTaskThree.slice(0, resultForTaskThree.length -1)}`);


// Task 4

counterForTaskFour = 1;
resultForTaskFour = 0;

while (counterForTaskFour <= 15) {
    resultForTaskFour += counterForTaskFour;
    counterForTaskFour++;
}

alert(`№ 4\n${resultForTaskFour}`);

// Task 5

counterForTaskFive = 15;
resultForTaskFive = 1;

while (counterForTaskFive <= 35) {
    resultForTaskFive *= counterForTaskFive;
    counterForTaskFive++;
}

alert(`№ 5\n${resultForTaskFive}`);

// Task 6

counterForTaskSix = 1;
resultForTaskSix = 0;

while (counterForTaskSix <= 500) {
    resultForTaskSix += counterForTaskSix;
    counterForTaskSix++;
}

alert(`№ 6\n${resultForTaskSix / (counterForTaskSix -1)}`);

// Task 7

counterForTaskSeven = 35;
resultForTaskSeven = 0;

while (counterForTaskSeven <= 80) {
    if (counterForTaskSeven % 2 === 0) {
        resultForTaskSeven += counterForTaskSeven;
    }
    counterForTaskSeven++;
}

alert(`№ 7\n${resultForTaskSeven}`);

// Task 8 

counterForTaskEight = 100;
resultForTaskEight = '';

while (counterForTaskEight <= 200) {
    if (counterForTaskEight % 3 === 0) {
        resultForTaskEight += `${counterForTaskEight}, `;
    }
    counterForTaskEight++;
}

alert(`№ 8\n${resultForTaskEight.slice(0, resultForTaskEight.length -2)}`);

// Task 9, 10, 11

numberFromUser = prompt('Please enter natural number?')
counterForTaskNine = 1;
resultForTaskNine = '';
resultForTaskTen = 0;
resultForTaskEleven = 0;

while (counterForTaskNine <= numberFromUser) {
    if (numberFromUser % counterForTaskNine === 0) {
        resultForTaskNine += `${counterForTaskNine}, `;
        if (counterForTaskNine % 2 === 0) {
            resultForTaskTen++;
            resultForTaskEleven += counterForTaskNine;
        }
    }
    counterForTaskNine++;
}

alert(`№ 9\n${resultForTaskNine.slice(0, resultForTaskNine.length -2)}`);
alert(`№ 10\n${resultForTaskTen}`);
alert(`№ 11\n${resultForTaskEleven}`);

// Task 12

counterOneForTaskTwelve = 1;
counterTwoForTaskTwelve = 1;
mainResultForTaskTwelve = '';
secondaryResultForTaskTwelve = '';


while (counterOneForTaskTwelve <= 9) {
    counterTwoForTaskTwelve = 1;
    secondaryResultForTaskTwelve = '';
    while (counterTwoForTaskTwelve <= 9) {
        secondaryResultForTaskTwelve += `${counterOneForTaskTwelve}*${counterTwoForTaskTwelve}=${counterOneForTaskTwelve * counterTwoForTaskTwelve}, `;
        counterTwoForTaskTwelve++;
    }
    mainResultForTaskTwelve += `${secondaryResultForTaskTwelve.slice(0, secondaryResultForTaskTwelve.length -2)};\n`;
    counterOneForTaskTwelve++;
}

alert(`№ 9\n${mainResultForTaskTwelve.slice(0, mainResultForTaskTwelve.length -2)}.`);