/* 
타입 단언
*/

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "stwang";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/* 
 타입 단어의 규칙
 값 as 단언 <- 단언식
 A as B
 A가 B의 슈퍼타입이거나
 A가 B의 서브타입이어야 함.
*/
let num1 = 10 as never;
let num2 = 10 as unknown;

/* 
const 단언
*/

let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

/* 
Non Null 단언
*/
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
};

const len: number = post.author!.length;
