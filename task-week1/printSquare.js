const printSquare = (num) => {
  if (typeof num !== "number") {
    return console.error("Harus berikasan angka");
  }
  // Loop untuk baris
  for (let i = 0; i < num; i++) {
    // Loop untuk kolom, mencetak angka pada tiap kolom
    let row = "";
    for (let j = 1; j <= num; j++) {
      row += j + " "; // Menambahkan angka ke string row
    }
    console.log(row);
  }
};

printSquare(5);
