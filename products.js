const products = [
  {
    name: "İtirazım Var Kapşonlu Sweatshirt",
    image: "../../images/featuredProducts/productImages/1-trimmy.jpg",
  },
  {
    name: "Kişiye Özel Çizimli Plak",
    image: "../../images/featuredProducts/productImages/2-trimmy.jpg",
  },
  {
    name: "Müslüm Gürses Ayraç",
    image: "../../images/featuredProducts/productImages/3-trimmy.jpg",
  },
  {
    name: "Müslüm Gürses Defter",
    image: "../../images/featuredProducts/productImages/4.jpg",
  },
  {
    name: "Müslüm Gürses Minimal Tasarım",
    image: "../../images/featuredProducts/productImages/5.jpg",
  },
  {
    name: "Müslüm Gürses Minimal Tasarım",
    image: "../../images/featuredProducts/productImages/6.jpg",
  },
  {
    name: "Frida Kahlo Oversize T-shirt",
    image: "../../images/featuredProducts/productImages/7-trimmy.jpg",
  },
  {
    name: "Frida Kahlo Oversize T-shirt",
    image: "../../images/featuredProducts/productImages/8-trimmy.jpg",
  },
  {
    name: "Yeşilçam Box Set",
    image: "../../images/featuredProducts/productImages/9-trimmy.jpg",
  },
  {
    name: "Kişiye Özel Box Set Hediye Kutusu",
    image: "../../images/featuredProducts/productImages/10-trimmy.jpg",
  },
  {
    name: "Kişiye Özel Box Set Hediye Kutusu",
    image: "../../images/featuredProducts/productImages/11.jpg",
  },
  {
    name: "Kişiye Özel Box Set Hediye Kutusu",
    image: "../../images/featuredProducts/productImages/12-trimmy.jpg",
  },
  {
    name: "Frida Kahlo Kupası",
    image: "../../images/featuredProducts/productImages/13.jpg",
  },
  {
    name: "Kişiye Özel Çizim Çift Karakter Kupa",
    image: "../../images/featuredProducts/productImages/14.jpg",
  },
  {
    name: "Kişiye Özel Çizim Çift Karakter Kupa",
    image: "../../images/featuredProducts/productImages/15.jpg",
  },
  {
    name: "Yeşilçam Kupa",
    image: "../../images/featuredProducts/productImages/16-trimmy.jpg",
  },
  {
    name: "Yeşilçam Kupa",
    image: "../../images/featuredProducts/productImages/17-trimmy.jpg",
  },
  {
    name: "Müslüm Gürses Kupa Bardak",
    image: "../../images/featuredProducts/productImages/18-trimmy.jpg",
  },
  {
    name: "Adana Demirspor ve Adanaspor Sevgili Kupası",
    image: "../../images/featuredProducts/productImages/19-trimmy.jpg",
  },
  {
    name: "Baskılı Bez Çanta",
    image: "../../images/featuredProducts/productImages/20-trimmy.jpg",
  },
  {
    name: "Heidi ve Peter Kupa Bardak",
    image: "../../images/featuredProducts/productImages/21-trimmy.jpg",
  },
  {
    name: "Müslüm Gürses Kupa Bardak",
    image: "../../images/featuredProducts/productImages/22-trimmy.jpg",
  },
  {
    name: "Müslüm Gürses Kupası",
    image: "../../images/featuredProducts/productImages/23.jpg",
  },
  {
    name: "Müslüm Gürses Kupası",
    image: "../../images/featuredProducts/productImages/24-trimmy.jpg",
  },
];

const productsSection__list = document.querySelector(".productsSection__list");

let productInfos = products.forEach(function (product) {
  return product.name;
});

productsSection__list.innerHTML = products
  .map(function (item) {
    return `<div id="productsSection__card">
            <img
            src=${item.image}
            alt="1"
            />
        
            <h3 id="productsSection--listItem--itemName">${item.name}</h3>
            <button id="productsSection--listItem--btn" class="featuredProducts--listItem--btn">
              
            </button>            
      
    
            </div>`;
  })
  .join("");
