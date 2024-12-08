/* 
  타입 추론
*/

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "taek",
  profile: {
    nickname: "eli",
  },
  urls: ["https://asdf.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}
