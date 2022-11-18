import { users } from "../data/users.js";

export default class UserService {
  constructor() {
    this.employees = [];
    this.customers = [];
  }

  load() {
    for (const user of users) {
      console.log(user);
    }
  }
}
