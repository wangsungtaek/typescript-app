/* 
인터페이스
-> Typescript의 인터페이스는 객체, 클래스, 함수 등의 구조를 정의하는 강력한 도구.
-> 인터페이스는 주로 객체의 구조를 정의하거나 클래스와의 계약을 설정할 때 사용함.
*/

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "stwang",
  sayHi: function () {
    console.log("Hi");
  },
};

person.sayHi();
person.sayHi(1, 2);
