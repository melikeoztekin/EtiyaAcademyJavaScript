import { users } from "../data/users.js";

export default class UserService {
  // prototype
  // DI - Dependency Injection
  constructor(loggers) {
    this.loggers = loggers;
    this.userList = users;
  }

  getAllUser() {
    for (let logger of this.loggers) {
      logger.log("UserService.getAllUser method");
    }
    return this.userList;
  }

  getUserById(id) {
    for (let logger of this.loggers) {
      logger.log("UserService.getUserById method");
    }
    let isUser = this.userList.filter((user) => user.id === id);
    return isUser.length > 0 ? isUser : "Kullanıcı bulunamadı";
  }

  addUser(user) {
    for (let logger of this.loggers) {
      logger.log("UserService.addUser method");
    }
    let createId = this.userList.length + 1;
    user.id = createId;
    // user.id = Math.round(Math.random() * 100);
    return this.userList.push(user);
  }

  deleteUserById(id) {
    for (let logger of this.loggers) {
      logger.log("UserService.deleteUserById method");
    }
    let userIndex = this.userList.findIndex((user) => user.id === id);
    return this.userList.splice(userIndex, 1);
    // let newUserList = this.userList.filter((user) => user.id !== id);
    // this.user = newUserList;
  }

  updateUser(user) {
    for (let logger of this.loggers) {
      logger.log("UserService.updateUserById method");
    }
    this.userList[this.userList.findIndex((x) => x.id === user.id)] = user;
  }
}
