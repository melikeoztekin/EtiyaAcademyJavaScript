// restSpreadDestructure
// ...rest 
// bize bir array döndürür
let showProducts=function name(id,...products){
    //console.log(id)
    //console.log(products)// tüm ürünleri verir
    //console.log(products[0]) //sadece 0.index i verir
  }
  // console.log(typeof showProducts); // tipini öğrenmek için
  showProducts() //id için undefined, ...products için [] döner
  showProducts(10,["Elma","Armut","Karpuz"])
  
  /*-----------------------------*/
  // ...spread
  // elimideki bir array i ayırırız normal bir değer olarak gelir
  //console.log(Math.max(1,2,3,4,50,4,60,14)) // değerler içinde en büyük olanı döndürür
  let points=[1,2,3,4,50,4,60,14]
  //console.log(...points) // array içindeki öğeleri ayrı ayrı yazar
  //console.log(Math.max(...points)) //array i ayırıp en büyük sayıya ulaşır
  //console.log(..."ABC","D",..."EFG","H") // tüm harfleri ayırır
  
  /*-----------------------------*/
  // destructuring 
  // parçalamak- elimizdeki arrayin değerlerini değişkenlere atamak
  let populations=[10000,20000,30000]
  //let [small, medium,high]=populations //değerleri sırasıyla populationsa atar 
  let populations2=[10000,20000,30000,[40000,50000]]//iç içe destructuring yapılabilir
  let [small, medium,high,[veryHigh,maximum]]=populations2
  // console.log(small)
  // console.log(medium)
  // console.log(high)
  // console.log(veryHigh)
  // console.log(maximum)
  
  /*-----------------------------*/
  function someFunction([small1],number){
    //console.log(small1)
  }
  someFunction(populations2)// arrayden ilk gelen değeri getirir
  /*-----------------------------*/
  let category={id:1,name:"içecek"}
  //console.log(category.id)
  //console.log(category.name)
  let {id,name}=category //obje değil destruct yöntemi
  //console.log(id)
  //console.log(name)
  /*-----------------------------*/