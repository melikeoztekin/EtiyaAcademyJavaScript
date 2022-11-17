//oop
class Customer{
    constructor(id,customerNumber){
      this.id=id;
      this.customerNumber=customerNumber;
    }
}
let customer=new Customer(1,"12345")
//prototyping
customer.name="melike oztekin"
console.log(customer.name) //instance prototyping

Customer.bisey="Bişey"
console.log(Customer.bisey) //class prototyping

console.log(customer.customerNumber)

/***********************/
//extends ile clası Customer den Inheritance ediyoruz
//super ile extends ettigimiz Customer classının bütün özelliklerini CorporateCustomer clasında da kullanabilecegimizi belirtmiş olduk this ile de sadece bu classa ait olan bir özellik tanımladık
class IndividualCustomer extends Customer{
  constructor(firstName,id,customerNumber){
    super(id,customerNumber)
    this.firstName=firstName
  }
}

class CorporateCustomer extends Customer{
  constructor(companyName,id,customerNumber){
    super(id,customerNumber)
    this.companyName=companyName
  }
}