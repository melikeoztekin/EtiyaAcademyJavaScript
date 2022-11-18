// ----------------Soru1-----------------
// JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )

function primeNumber(...numbers) {
    for (let x = 0; x < numbers.length; x++) {
        sayac = 0;
        for (let y = 1; y <= numbers[x]; y++) {
            if ((numbers[x] % y) == 0) {
                sayac++;
            }
        }
        if (sayac == 2) {
            console.log(numbers[x] + " is a prime number.");
        } else {
            console.log(numbers[x] + " is not a prime number.");
        }
    }
}
primeNumber(7, 9, 11, 15, 17, 18)




