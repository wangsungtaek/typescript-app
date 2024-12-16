/* 
map 메서드
*/

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

map([1, 2, 3], (it) => it * 2);
map(["hi", "hello"], (it) => parseInt(it));

/* 
forEach 메서드
*/

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    tem: callback(arr[i]);
  }
}

forEach([1, 2, 3], (item) => {
  console.log(item);
});
