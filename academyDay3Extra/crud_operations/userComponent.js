import {
  FileLogger,
  MssqlLogger,
} from "./crossCuttingConcern/logging/logger.js";
import UserService from "./services/userService.js";

// instance
// nesne ve obje
let logger = new FileLogger();
let logger1 = new MssqlLogger();
let loggers = [logger, logger1];

//polimorfizm
let userService = new UserService(loggers);
console.log(userService.getAllUser());
console.log("--------------------------");

console.log(userService.getUserById(3));
console.log("--------------------------");

userService.addUser({
  firstName: "Melike",
  lastName: "Öztekin",
  city: "Ankara",
  age: 26,
  creditCardNumber: "111111",
  type: "employee",
});
userService.addUser({
  firstName: "Melike",
  lastName: "Öztekin",
  city: "Ankara",
  age: 26,
  creditCardNumber: "222222",
  type: "employee",
});
console.log(userService.getAllUser());
console.log("--------------------------");

userService.deleteUserById(4);
console.log(userService.getAllUser());
console.log("--------------------------");

userService.updateUser({
  id: 8,
  firstName: "Atilla",
  lastName: "İlhan",
  city: "Ankara",
  age: 26,
  creditCardNumber: "414141",
  type: "employee",
});
console.log(userService.getAllUser());
