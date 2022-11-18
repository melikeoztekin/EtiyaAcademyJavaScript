import {
  BaseLogger,
  ElasticLogger,
  MongoLogger,
} from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import UserService from "../services/userService.js";

console.log("*******************");

console.log("user component yüklendi");

let logger1 = new MongoLogger();

let userService = new UserService(logger1);
let user1 = new User(1, "Melike", "Öztekin", "Ankara");
let user2 = new User(2, "Baran", "Demir", "İstanbul");
console.log("---------------------");

userService.add(user1);
userService.add(user2);
console.log(userService.list());
console.log("---------------------");

console.log(userService.getById(1));
console.log("---------------------");

console.log(userService.list());
console.log("---------------------");

/* --------------------- */
let customer = { id: 1, firstName: "Melike" };
// prototyping
customer.lastName = "Öztekin";
//console.log(customer.lastName);
