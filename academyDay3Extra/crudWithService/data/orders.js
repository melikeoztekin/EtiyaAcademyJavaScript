//Orders (siparişler) için veriler oluşturunuz.
//İlgili orderları userlar ve productlar ile ilişkili olacak şekilde tasarlayınız,
//order içindeki productları şuanlık order içinde products isimli property içinde tutabilirsiniz
//İlgili siparişler için ekleme silme güncelleme ve listeleme operasyonlarını gerçekleştiriniz.
//Eğer sipariş oluşturulur iken girilen userId veya productId ile bir product veya user mevcut değilse console'da hata veriniz.

export const orders = [
  {
    id: 1,
    productId: 1,
    userId: 1,
    orderNumber: "12345",
    status: "hazırlanıyor",
  },
  {
    id: 2,
    productId: 2,
    userId: 2,
    orderNumber: "23456",
    status: "kargoya verildi",
  },
  { id: 3, productId: 3, userId: 3, orderNumber: "98765", status: "kargoda" },
  {
    id: 4,
    productId: 4,
    userId: 4,
    orderNumber: "45237",
    status: "teslim edildi",
  },
  {
    id: 5,
    productId: 5,
    userId: 5,
    orderNumber: "74125",
    status: "iade edildi",
  },
];
