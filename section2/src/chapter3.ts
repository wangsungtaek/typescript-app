// object
// 구조적 타입 시스템.
let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "stwang",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

console.log(user.id);

// optional properties
let user2: {
  id?: number;
  name: string;
} = {
  name: "sthong",
};

// readonly properties
let config: {
  readonly apiKey: string;
} = {
  apiKey: "My API Key",
};

// config.apiKey = "hacked"
