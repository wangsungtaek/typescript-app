/* 
제네릭
코드의 재사용성을 높이고, 다양한 데이터 타입을 처리할 수 있도록 도와주는 기능.

*/

function func<T>(value: T): T {
  return value;
}

let num = func(10);

let str = func("hello");

let bool = func(true);

let arr = func<[number, number, number]>([1, 2, 3]);
