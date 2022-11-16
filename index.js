console.log("hello world");
var number = 10;
console.log(number);
number = 50;
console.log(number);
number = "Merhaba";
console.log(number);
number = 50.5;
console.log(number);
// JS type-safe değil

//operators
console.log(number + 10);
console.log(number - 10);
console.log(number * 10);
console.log(number / 10);
console.log(number % 5); //mod operatörü

// boolean, bool => true veya false
console.log(1 == 1);
console.log(1 != 1);
console.log(1 >= 1);
console.log(1 <= 1);
console.log("***************");

var number1 = 10;
var number2 = 10;
var cars = ["Volvo", "BMW", "Mercedes"];
var cars2 = ["Volvo", "BMW", "Mercedes"];
console.log(number1 == number2); //true
console.log(cars == cars2); //false

//array     0       1       2
var cars = ["Volvo", "BMW", "Mercedes"];
var cars2 = cars;
cars.push("Fiat");
console.log(cars);
console.log(cars2); // fiat eklenir mi eklenmez mi
console.log(cars[0]);

cars.push("Ford");
console.log(cars);

cars.unshift("Fiat");
console.log(cars);

cars.shift("Fiat");
console.log(cars);

cars.pop();
console.log(cars);

var dolarDun = 16;
//var dolarDun=17;
var dolarBugun = 17;
if (dolarBugun > dolarDun) {
  console.log("dolar artışta");
} else if (dolarBugun == dolarDun) {
  console.log("dolar aynı");
} else {
  console.log("dolar düşüşte");
}

// 0=sipariş alındı
// 1=siparis hazırlanıyor
// 2=sipariş kargoya verildi
// 3=sipariş teslim edildi
// 4=sipariş iade edildi
var siparisDurumu = 0;
switch (siparisDurumu) {
  case 0:
    console.log("sipariş alındı");
    break;
  case 1:
    console.log("siparis hazırlanıyor");
    break;
  case 2:
    console.log("sipariş kargoya verildi");
    break;
  case 3:
    console.log("sipariş teslim edildi");
    break;

  default:
    console.log("yanlış sipariş durumu");
    break;
}

// loops

var cars = ["Volvo", "BMW", "Mercedes"];
for (var i = 0; i < cars.length; i++) {
  console.log(i + 1 + ". araba: " + cars[i]);
}

//iteration, iterate
// index için
for (let car in cars) {
  console.log("Car: " + car);
}

//element için
for (let car of cars) {
  console.log("Car: " + car);
}

var number = 0;
while (number < 10) {
  console.log("while çalışıyor");
}

//forEach
// map bize yeni bir array döndürür
//foreach sadece iteration yapar
cars.forEach((car) => {
  console.log("foreachden gelen car: " + car);
});

let newCars = cars.map((car) => {
  return "mapten gelen car: " + car;
});
console.log(newCars);

//objects
//key value ile property tutan yapı
let car = {
  brand: "BNW",
  model: "320",
  year: 2022,
  price: 2000,
};
console.log(car.brand);

let carArray = [
  {
    brand: "BNW",
    model: "320",
    year: 2022,
    price: 2000,
  },
  {
    brdand: "Mercedes",
    model: "A",
    year: 2021,
    price: 1000,
  },
];
//spread operatör
// her bir arabaya 100 birim ücret indirimi uygulanacak
let newCarArray = carArray.map((car) => {
  return {
    brand: car.brand,
    model: car.model,
    year: car.year,
    price: car.price + 100,
  };
});
console.log(newCarArray);
console.log(carArray);
let filteredArray = carArray.filter((car) => {
  return car.price < 1500;
});
let filteredArray2 = carArray.filter((car) => {
  return car.price < 1500;
});