//mapReduceFilter
//array methods

//map
let products=[
    {id:1,name:"Acer",unitPrice:15000},
    {id:2,name:"Asus",unitPrice:16000},
    {id:3,name:"Hp",unitPrice:13000},
    {id:4,name:"Dell",unitPrice:12000},
    {id:5,name:"Casper",unitPrice:17000}
  ]
  //console.log("<ul>")
  //products.map(product=>console.log(`<li>${product.name}</li>`))
  //console.log("</ul>")
  
  //filter
  //filter yeni bir array oluşturur, parametre olarak verilen dizi içerisinde bulunan eleman ile işlem yapar ve true dönen tüm değerleri yeni dizi oluşturarak geri döndürür.
  let filteredProducts=products.filter(product=>product.unitPrice>12000)
  //console.log(filteredProducts)
  
  //reduce
  //reduce verilen bir koşula göre diziden tek bir eleman almak için kullanılır. En yüksek değerli elemanı alma, elemanların toplamını bulma gibi işlemlerde kullanılabilir
  let cartTotal=products.reduce((acc,product)=>acc+product.unitPrice,0)
  //console.log(cartTotal)
  
  //map reduce filter
  let cartTotal2=products
    .filter(p=>p.unitPrice>13000)
    .map(p=>{
      p.unitPrice=p.unitPrice*1.18 
        return p
    })
  .reduce((acc,p)=>acc+p.unitPrice,0)
  console.log(cartTotal2)