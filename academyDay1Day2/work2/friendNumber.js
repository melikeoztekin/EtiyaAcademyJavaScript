// ---------------------Soru2-----------------
// Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

function friendNumber(number1, number2) {
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            sum1 += i;
        }
    }

    for (let j = 1; j < number2; j++) {
        if (number2 % j === 0) {
            sum2 += j;
        }
    }

    if (number1 == sum2 && sum1 == number2) {
        console.log(number1 + " - " + number2 + " friend is number");
    }
    else {
        console.log(number1 + " - " + number2 + " friend is not number");
    }
}


friendNumber(220, 284);
friendNumber(100, 200);