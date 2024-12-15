/* 
제네릭 인터페이스
*/

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "str",
  value: 123,
};

let KeyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["123", "234"],
};

/* 
인덱스 시그니쳐
*/
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "string",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/* 
제네릭 인터페이스의 활용 예시
-> 유저 관리 프로그램
-> 유저 구분: 학생 유저 / 개발자 유저
*/

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  console.log(`${user.profile.school}에 등교완료`);
}

const developerUser: User<Developer> = {
  name: "stwang",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: User<Student> = {
  name: "sthong",
  profile: {
    type: "student",
    school: "123student",
  },
};

goToSchool(studentUser);
// goToSchool(developerUser);
