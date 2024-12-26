/* 
프로미스
*/

const promise = new Promise<number>((reslove, reject) => {
  setTimeout(() => {
    reslove(20);
    // reject("error");
  }, 3000);
});

promise.then((response) => {
  console.log(response * 20);
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log("Error: ", err);
  }
});

/* 
예제
*/

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 10,
        title: "title1",
        content: "content",
      });
    }, 1000);
  });
}

fetchPost().then((response) => {
  console.log(response.title);
});
