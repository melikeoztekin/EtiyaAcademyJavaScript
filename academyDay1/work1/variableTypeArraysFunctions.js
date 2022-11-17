//variableTypeArraysFunctions
let sayi = 10;
sayi = "melike oztekin";
// console.log(sayi); // son atanan değeri getirir
/*-----------------------------*/
let student = { id: 1, name: "melike" }
//console.log(student); // oblect olarak çıktı verir
/*-----------------------------*/
function save(ogrenci) {
  //console.log(ogrenci);
}
save(student); // fonksiyona 5.satırdaki student i parametre değer olarak verdik onun bilgilerini yazar
save(15);//fonksiyona parametre değeri olarak ne verirsek onu yazar
/*-----------------------------*/
// undefined : bellekte böyle bir bilgi yok
// null : değeri var ama referansı yok
function save2(ogrenci, puan = 10) {
  //console.log(ogrenci.name+" : "+puan); //ogrenci parametresine name adında bir değer geleceğini öngererek
}
save2(student, 100);
/*-----------------------------*/
function save3(puan = 10, ogrenci) {
  //console.log(ogrenci.name+" : "+puan);
}
save3(student); // ilk parametreye student ı atadığı için hata alırız
// default parametreler en sona yazılır
/*-----------------------------*/
function save4(puan = 10, ogrenci) {
  //console.log(ogrenci.name + " : " + puan)
}
save4(undefined, student) // ilk parametre undefined olarak gönderilince default olarak sabit verilen değeri alır
/*-----------------------------*/
// Arrays
let students = ["Melike Öztekin", "Ali Can", "Kadriye Çakmak", "Atilla İlhan"];
//console.log(students);
/*-----------------------------*/
let students2 = [student, { id: 2, name: "Ahmet" }]; // 5.satırdaki student bilgisini aldık
//console.log(students2);
/*-----------------------------*/
let students3 = [student, { id: 2, name: "Ahmet" }, "Ankara", { city: "İstanbul" }];
console.log(students3)
