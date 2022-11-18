import User from "./user.js";

// customer ile user birçok aynı özelliğe sahip olduğu için user ı extends edip super constructorına aynı olan özellikleri alabiliriz
export default class Customer extends User {
  constructor(id, firstName, lastName, city, age, creditCarNumber) {
    super(id, firstName, lastName, city, age);
    this.creditCarNumber = creditCarNumber;
  }
}
