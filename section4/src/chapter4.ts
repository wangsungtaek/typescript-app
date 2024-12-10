/* 
사용자 정의 타입가드
-> "값의 타입을 좁히는 방법"
-> 변수의 타입을 조건문, 함수, 또는 기타 논리적 구조를 통해 좁힐 수 있음.
-> 이를 통해 컴파일러가 해당 블록 내에서 변수의 타입을 추론할 수 있게 됨.
*/

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScreatch: boolean;
};

type Animal = Dog | Cat;

// 타입가드
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark != undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScreatch != undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    animal;
  } else if (isCat(animal)) {
    animal;
  }
}
