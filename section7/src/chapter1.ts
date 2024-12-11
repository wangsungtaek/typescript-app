/* 
첫번째 사례
-> 매개 변수의 타입이 다를 경우
*/

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

let [a, b] = swap("1", 2);

console.log(a);
console.log(b);

/* 
두번째 사례
*/

function func<T>(array: [T, ...unknown[]]): T {
  return array[0];
}

let one = func(["1", 2, 3, 4]);
console.log(one);

/* 
세번째 사례
*/

function getLength<T extends { length: number }>(value: T) {
  return value.length;
}

let arr = getLength([1, 2, 3, 4, 5]);
let obj = getLength({ length: 10 });
let str = getLength("hello");
// let num = getLength(10);

console.log(arr, obj, str);
