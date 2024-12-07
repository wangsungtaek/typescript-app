// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: "stwang",
  nickname: "wang",
  birth: "1111.11.11",
  bio: "안녕하세요.",
  location: "청주",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};
