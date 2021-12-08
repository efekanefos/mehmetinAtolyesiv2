const products = [
  {
    name: "İtirazım var kapşonlu sweatshirt",
    image: "../../images/featuredProducts/productImages/1.jpg",
  },
  {
    name: "Kişiye özel çizimli plak",
    image: "../../images/featuredProducts/productImages/2.jpg",
  },
  {
    name: "Müslüm Gürses Ayraç",
    image: "../../images/featuredProducts/productImages/3.jpg",
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
    name: "Frida Kahlo oversize tişörtü",
    image: "../../images/featuredProducts/productImages/7.jpg",
  },
  {
    name: "Frida Kahlo oversize tişörtü",
    image: "../../images/featuredProducts/productImages/8.jpg",
  },
  {
    name: "Yeşilçam box set",
    image: "../../images/featuredProducts/productImages/9.jpg",
  },
  {
    name: "Kişiye özel box set hediye kutusu",
    image: "../../images/featuredProducts/productImages/10.jpg",
  },
  {
    name: "Kişiye özel box set hediye kutusu",
    image: "../../images/featuredProducts/productImages/11.jpg",
  },
  {
    name: "Kişiye özel box set hediye kutusu",
    image: "../../images/featuredProducts/productImages/12.jpg",
  },
  {
    name: "Frida Kahlo kupası",
    image: "../../images/featuredProducts/productImages/13.jpg",
  },
  {
    name: "kişiye özel çizim çift karakter kupa",
    image: "../../images/featuredProducts/productImages/14.jpg",
  },
  {
    name: "kişiye özel tek karakter çizim kupa",
    image: "../../images/featuredProducts/productImages/15.jpg",
  },
  {
    name: "yeşilçam kupa",
    image: "../../images/featuredProducts/productImages/16.jpg",
  },
  {
    name: "yeşilçam kupa",
    image: "../../images/featuredProducts/productImages/17.jpg",
  },
  {
    name: "Müslüm Gürses kupa bardak",
    image: "../../images/featuredProducts/productImages/18.jpg",
  },
  {
    name: "Adana Demirspor ve Adanaspor sevgili kupası",
    image: "../../images/featuredProducts/productImages/19.jpg",
  },
  {
    name: "Baskılı Bez çanta",
    image: "../../images/featuredProducts/productImages/20.jpg",
  },
  {
    name: "Heidi ve Peter kupa bardak",
    image: "../../images/featuredProducts/productImages/21.jpg",
  },
  {
    name: "Müslüm Gürses kupa bardak",
    image: "../../images/featuredProducts/productImages/22.jpg",
  },
  {
    name: "Müslüm Gürses kupası",
    image: "../../images/featuredProducts/productImages/23.jpg",
  },
  {
    name: "Müslüm Gürses kupası",
    image: "../../images/featuredProducts/productImages/24.jpg",
  },
];

const productsSection__list = document.querySelector(".productsSection__list");

let productInfos = products.forEach(function (product) {
  return product.name;
});

productsSection__list.innerHTML = products
  .map(function (item) {
    return `<div>
            <img
            src=${item.image}
            alt="1"
            />
            <h3>${item.name}</h3>
            <button class="featuredProducts--listItem--btn">
              <embed
                class="featuredProducts--listItem--logo"
                src="images/featuredProducts/shopier_logo_1.svg"
                srcset="images/featuredProducts/shopier_logo_1.svg"
                alt="Shopier"
              />
            </button>
    
            </div>`;
  })
  .join("");
