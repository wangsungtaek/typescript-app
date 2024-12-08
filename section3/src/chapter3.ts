type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "리액트",
  price: 20000,
  skill: "react",
};

book = programmingBook;
// programmingBook = book;
console.log(book);
console.log(programmingBook);

// 초과 프로퍼티 검사
// 객체 리터럴로는 불가능
let book2: Book = {
  name: "타입스크립트",
  price: 25000,
  // skill: "Typescript"
};

let book3: Book = programmingBook;
