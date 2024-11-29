let product = {
  name: "baju koko",
  rating: 4.5,
  price: 50000,
  isActive: true,
  images: [
    "https://lzd-img-global.slatic.net/g/ff/kf/S477fa53240e44e3db40c0fc04cd6e156e.jpg_720x720q80.jpg",
    "https://th.bing.com/th/id/OIP.PBXeqzBDprb8QVWbYKvnBgHaHa?w=1100&h=1100&rs=1&pid=ImgDetMain",
    "https://p16-oec-va.ibyteimg.com/tos-maliva-i-o3syd03w52-us/d4863219dbaf4d388b6964d0c06f17f5~tplv-o3syd03w52-resize-jpeg:400:400.jpeg?",
  ],
  description:
    "Baju koko yang cocok untuk di pakai oleh pria mau itu untuk beribadah, santai, atau pun acara keluarga",
  variants: {
    name: "Hitam",
    option: ["M", "L", "XL", "XXL"],
  },
  storeName: "Redha Store id",
};

console.log(product.images[2]);
