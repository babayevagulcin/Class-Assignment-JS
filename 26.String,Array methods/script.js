//////// 1
const arr1 = ["guba", "mingecevir", "baku", "gazag", "gence", "shirvan"];
function getUpper(anyArr) {
  return anyArr.map(
    (item) =>
      item[0].toUpperCase() + item.slice(1, -1) + item.at(-1).toUpperCase()
  );
}
console.log(getUpper(arr1));

//////// 2
// 2.1
let text = "We are MERN-Stack developers";
let newText = text.replace("MERN-Stack", "Front-end");
console.log(newText);

// 2.2
let newArray = text.toLocaleLowerCase().replaceAll("e", "a");
console.log(newArray);

// 2.3
const microConcat = text.concat(" in Microsoft!");
console.log(microConcat);

// 2.4
const newArr = [];
text
  .split("")
  .map((item, index) =>
    item.toLocaleLowerCase() === "r" ? newArr.push(index) : newArr
  );
console.log(newArr);

// 2.5
let findIndex = text.indexOf("r", 4);
console.log(findIndex);

// 2.6
let vowels = ["a", "e", "o", "u", "i"];
let newText1 = [];
text.split("").map((item, i) => {
  if (vowels.includes(item) && text.indexOf(item) == i) {
    return newText1.push(item);
  }
})
console.log(newText1);;

//////// 3

const arr3 = [
  {
    region: "Yasamal",
    area: 170,
  },

  {
    region: "Nizami",
    area: 20,
  },

  {
    region: "Nesimi",
    area: 10,
  },

  {
    region: "Sebail",
    area: 30,
  },
  {
    region: "Xetai",
    area: 30,
  },
];

const calcArea = () => {
  let sum = 0;
  arr3.forEach((region) => {
    if (region.region.length === 6) {
      sum += region.area;
    }
  });
  return sum;
};

console.log(calcArea());

//////// 4
const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6];
arr4.sort((a, b) => a - b);
console.log(arr4);

//////// 5
const arr5 = [5, [8], [9, ["hi", ["don't touch me"], [0]], "9"]];
const newArr1 = arr5.flat(Infinity);
console.log(newArr1);

//////// 6
const colors = [
  "green",
  "blue",
  "yellow",
  "black",
  "red",
  "brown",
  "white",
  "gray",
  "violet",
  "pink",
];
colors.sort((a, b) =>
  a.length === b.length ? a.localeCompare(b) : a.length - b.length
);
console.log(colors);
