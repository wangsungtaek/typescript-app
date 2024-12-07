// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function fun1(): string {
  return "hello";
}

function fun2(): void {
  console.log("Hello");
}

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
