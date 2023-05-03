// 1
const colors = ["red", "green", "blue", "yellow", "orange", "brown"];
$(".change").click(function () {
  const random = colors[Math.floor(Math.random() * colors.length)];
  $(".text").css("color", random);
});

// 2
$(".hide").click(function () {
  $(".text").hide();
});

$(".show").click(function () {
  $(".text").show();
});

// 3
$.each(colors, function (index, value) {
  console.log(value);
});

// 4
const numbers = [4, 2, false, null, "false", NaN, undefined, 8, true, "9"];
let sum = 0;
$.map(numbers, (value, index) => {
  if (value) {
    sum += index;
  }
});
console.log(sum);
