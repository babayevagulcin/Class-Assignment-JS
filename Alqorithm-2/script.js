// 1
function capitalizeFirst(str) {
  const arr = str.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}
console.log(capitalizeFirst("This is a title"));
console.log(capitalizeFirst("capitalize every word"));

// 2
function encoded(str) {
  return str.split` `.map((item) =>item.length > 4 ? item.split``.map((elem) => elem = "*").join``:item).join` `
  ;
}
console.log(encoded("The code is fourty"));
console.log(encoded("Two plus three is five"));
console.log(encoded("aaaa aaaaa 1234 123456"));
