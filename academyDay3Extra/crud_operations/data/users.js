// data/users.js oluşturunuz.
// içerisinde export edilen bir users arrayi oluşturunuz
// user için id,firstName,lastName,city,age,creditCardNumber,type bilgilerini doldurunuz.
// userService oluşturunuz. getAll, gatById, add, delete, update metodlarını yazın
// Tüm operasyonlar için multiple-logging oluşturunuz.
// Tüm yaptıklarınızı userComponent.js üzerinde test ediniz.
export const users = [
  {
    id: 1,
    firstName: "Engin",
    lastName: "Demiroğ",
    city: "Ankara",
    age: 36,
    creditCardNumber: "123456",
    type: "customer",
  },
  {
    id: 6,
    firstName: "Beytullah",
    lastName: "Zor",
    city: "Ankara",
    age: 36,
    creditCardNumber: "123456",
    type: "customer",
  },
  {
    id: 2,
    firstName: "Mustafa",
    lastName: "Sansar",
    city: "İstanbul",
    age: 21,
    creditCardNumber: "654321",
    type: "customer",
  },
  {
    id: 3,
    firstName: "Cansu",
    lastName: "Değirmen",
    city: "İstanbul",
    salary: 8000,
    age: 20,
    type: "employee",
  },
  {
    id: 4,
    firstName: "Mücahit",
    lastName: "Kaya",
    city: "Bolu",
    age: 23,
    salary: 17000,
    type: "employee",
  },
  {
    id: 5,
    firstName: "Eren",
    lastName: "Arı",
    city: "Diyarbakır",
    age: 20,
    salary: 15000,
    type: "employee",
  },
];
