const products = [
  /*
  {
    name: "İtirazım Var Kapşonlu Sweatshirt",
    image: "../../images/featuredProducts/productImages/1-trimmy.jpg",
    link: "",
  },
  */
  {
    name: "Kişiye Özel Çizimli Plak",
    image: "../../images/featuredProducts/productImages/2-trimmy.jpg",
    link: "https://www.shopier.com/ShowProductNew/products.php?id=9338734",
  },
  {
    name: "Müslüm Gürses Ayraç",
    image: "../../images/featuredProducts/productImages/3-trimmy.jpg",
    link: "https://www.shopier.com/ShowProductNew/products.php?id=9219892",
  },
  {
    name: "Müslüm Gürses Defter",
    image: "../../images/featuredProducts/productImages/4.jpg",
    link: "https://www.shopier.com/ShowProductNew/products.php?id=9219809",
  },
  {
    name: "Müslüm Gürses Minimal Tasarım",
    image: "../../images/featuredProducts/productImages/5.jpg",
    link: "https://www.shopier.com/ShowProductNew/products.php?id=9219416",
  },
  {
    name: "Müslüm Gürses Minimal Tasarım",
    image: "../../images/featuredProducts/productImages/6.jpg",
    link: "https://www.shopier.com/ShowProductNew/products.php?id=9219404",
  },
  {
    name: "Frida Kahlo Oversize T-shirt",
    image: "../../images/featuredProducts/productImages/7-trimmy.jpg",
    link: "https://www.shopier.com/ShowProductNew/products.php?id=6383881",
  },
  {
    name: "Frida Kahlo Oversize T-shirt",
    image: "../../images/featuredProducts/productImages/8-trimmy.jpg",
    link: "https://www.shopier.com/ShowProductNew/products.php?id=6383850",
  },
  /*
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
    name: "Kişiye Özel Box Set Hediye Kutusu",
    image: "../../images/featuredProducts/productImages/13.jpg",
    link: "https://www.shopier.com/ShowProductNew/products.php?id=5434197",
  },
  */
  {
    name: "Frida Kahlo Kupası",
    image: "../../images/featuredProducts/productImages/14.jpg",
    link: "https://www.shopier.com/ShowProductNew/products.php?id=5434197",
  },
  {
    name: "Kişiye Özel Çizim Çift Karakter Kupa",
    image: "../../images/featuredProducts/productImages/15.jpg",
    link: "https://www.shopier.com/ShowProductNew/products.php?id=5232326",
  },
  {
    name: "Kişiye Özel Çizim Tek Karakter Kupa",
    image: "../../images/featuredProducts/productImages/16-trimmy.jpg",
    link: "https://www.shopier.com/ShowProductNew/products.php?id=5232250",
  },
  {
    name: "Yeşilçam Kupa",
    image: "../../images/featuredProducts/productImages/17-trimmy.jpg",
    link: "https://www.shopier.com/ShowProductNew/products.php?id=5229427",
  },
  {
    name: "Yeşilçam Kupa",
    image: "../../images/featuredProducts/productImages/18-trimmy.jpg",
    link: "https://www.shopier.com/ShowProductNew/products.php?id=5229413",
  },
  {
    name: "Müslüm Gürses Kupa",
    image: "../../images/featuredProducts/productImages/19-trimmy.jpg",
    link: "https://www.shopier.com/ShowProductNew/products.php?id=5224742",
  },
  {
    name: "Adana Demirspor ve Adanaspor Sevgili Kupası",
    image: "../../images/featuredProducts/productImages/20-trimmy.jpg",
    link: "https://www.shopier.com/ShowProductNew/products.php?id=5221108",
  },
  {
    name: "Müslüm Gürses Bez Çanta",
    image: "../../images/featuredProducts/productImages/21-trimmy.jpg",
    link: "https://www.shopier.com/ShowProductNew/products.php?id=5221051",
  },
  {
    name: "Heidi ve Peter Kupa Bardak",
    image: "../../images/featuredProducts/productImages/22-trimmy.jpg",
    link: "https://www.shopier.com/ShowProductNew/products.php?id=5220945",
  },
  {
    name: "Müslüm Gürses Kupası",
    image: "../../images/featuredProducts/productImages/23.jpg",
    link: "https://www.shopier.com/ShowProductNew/products.php?id=5220702",
  },
  {
    name: "Müslüm Gürses Kupası",
    image: "../../images/featuredProducts/productImages/24-trimmy.jpg",
    link: "https://www.shopier.com/ShowProductNew/products.php?id=5220351",
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
            <a href=${item.link} >
            <button id="productsSection--listItem--btn" class="featuredProducts--listItem--btn">
              
            </button> 
            </a>           
      
    
            </div>`;
  })
  .join("");
