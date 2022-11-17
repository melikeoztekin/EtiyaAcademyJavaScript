// ------------------------Soru4---------------------
// 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function findPrimeNumber() {
    let num = [];
    let sum;
    for (let i = 0; i <= 1000; i++) {
        sum++
        for (let k = 2; k <= i; k++) {
            if (i % k == 0) {
                sum = 0
            }
        }
        if (sum === 0) {
            num.push(i);
        }
    }
    console.log(num)
}

findPrimeNumber()