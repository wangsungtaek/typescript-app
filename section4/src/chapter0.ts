/* 
함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지
function func(a: number, b: number): number {
  return a + b;
}

/* 
화살표 함수의 타입을 정의하는 방법
*/
const add = (a: number, b: number): number => a + b;

/* 
함수의 매개변수
*/
function introduce(name = "stwang", tall?: number) {
  console.log(`name: ${name}`);
}

/* 
매개변수를 가변적으로 받을 떄
*/
function getSum(...rest: number[]) {
  let sum: number = 0;
  rest.forEach((item) => {
    sum += item;
  });

  return sum;
}

console.log(getSum(1, 2, 3));
console.log(getSum(1, 2, 3, 4, 5));
