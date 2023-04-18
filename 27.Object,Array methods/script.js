//////////////// 1
let names1 = ["Adam", "Sarah", "Malcolm"]; //"ASM"
let names2 = ["Harry", "Newt", "Luna", "Cho"]; //"CHLN"
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]; //"CJMPRR"

function secretName(names) {
  return names
    .map((item) => item[0])
    .sort()
    .join("");
}

console.log(secretName(names1));
console.log(secretName(names2));
console.log(secretName(names3));

//////////////// 2
const users = [
  { name: "Anar", surname: "Hesenli", age: "22", uni: "ADA", gender: "male" },
  {
    name: "Nezrin",
    surname: "Reshidova",
    age: "23",
    uni: "UNEC",
    gender: "female",
  },
  {
    name: "Hikmet",
    surname: "Hesenova",
    age: "22",
    uni: "UNEC",
    gender: "male",
  },
  { name: "Nicat", surname: "Sadiqov", age: "25", uni: "UNEC", gender: "male" },
  {
    name: "Murad",
    surname: "Salmanli",
    age: "23",
    uni: "ADNSU",
    gender: "male",
  },
  {
    name: "Aynure",
    surname: "Hesenzade",
    age: "23",
    uni: "BMU",
    gender: "female",
  },
];

// 2.1
const newArray = users.filter(
  (user) => user.uni === "UNEC" && user.surname.startsWith("R")
);
console.log(newArray);

// 2.2
const newArray2 = users.filter(
  (user) => user.age === "22" && user.name.startsWith("A")
);
console.log(newArray2);

// 2.3
const newArray3 = users.map(user => {
    if (user.gender === 'male') {
        user.name = 'Mr ' + user.name;
    } else {
        user.name = 'Ms ' + user.name;
    }
    return user;
});

console.log(newArray3)

// 2.4
users.sort((a, b) => a.age - b.age);
console.log(users);
//////////////// 3

const letters = ['a', 'b', 'c', 'd']
const numbers = [1, 2, 3, 4, 5, 6, 7]
const shufLetter = letters.sort(() => Math.random() - 0.5);
console.log(shufLetter);

const shufNum = numbers.sort(() => Math.random() - 0.5);
console.log(shufNum);

//////////////// 4
const arr4 = [
    {
        product: 'Lenova',
        price: 1900,
    },
    {
        product: 'HP',
        price: 1300,
    },
    {
        product: 'Acer',
        price: 1600,
    },
]

const newArray4 = arr4.map(item => {
    return { ...item, price: item.price / 2 }
});
console.log(newArray4   );
//////////////// 5

let num1 = 246 //246642
let num2 = 102 //102201
let num3 = 152 //152251

function reverseNum(num) {
    const numReverse = parseInt(num.toString().split('').reverse().join(''));
    return parseInt(`${num}${numReverse}`);
}
console.log(reverseNum(num1)); // 246642
console.log(reverseNum(num2)); // 102201
console.log(reverseNum(num3)); // 152251
