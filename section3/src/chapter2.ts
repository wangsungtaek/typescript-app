// Unknown 타입
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

// Naver 타입
function neaverExam() {
  function neverFunc(): never {
    while (true) {}
  }
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
}

//  Void 타입
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  let voiVar: void = undefined;
}
