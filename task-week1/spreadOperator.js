const spreadOperator = (arr1, arr2) => {
  return console.log([...arr1, ...arr2]);
};

spreadOperator([2, 3, 6], [11, 35, 22]);

const merge = (...merges) => {
  const person = {
    name: "redha",
    age: 20,
  };
  merges.forEach((obj) => {
    Object.assign(person, obj); // Menggabungkan setiap objek ke dalam person
  });
  console.log(person);
};

merge({ gender: "male" }, { bootcamp: "Fazztrack" });
