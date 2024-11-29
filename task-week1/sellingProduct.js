const sellingPrice = (shoppingPrice) => {
  if (typeof shoppingPrice !== "number") {
    return console.error("Harus berikasan angka");
  }
  let discount = null;
  let totalHarga = null;

  // Jika harga belanja kurang dari 500.000, tidak ada diskon
  if (shoppingPrice < 500000) {
    return `Discount = 0 \nTotalHarga = ${totalHarga}`;
  }
  // Jika harga belanja antara 500.000 dan 999.999, diskon 5%
  if (shoppingPrice >= 500000 && shoppingPrice < 1000000) {
    discount = shoppingPrice * 0.05;
    totalHarga = shoppingPrice - discount;
    return `Discount = ${discount} \nTotalHarga = ${totalHarga}`; // Mengurangi 5%
  }
  // Jika harga belanja lebih dari atau sama dengan 1.000.000, diskon 10%
  return `Discount = ${shoppingPrice * 0.1} \nTotalHarga = ${
    shoppingPrice * 0.9
  }`;
};

console.log(sellingPrice(1000000));
