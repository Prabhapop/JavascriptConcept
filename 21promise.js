// implement a function that makes multiple API calls and
//  processes the data using promise.

function makeApiCall(url) {
  return fetch(url).then((response) => response.json());
}
function handleData(data) {
  console.log("Processed Data", data);
}

function main() {
  const apiurl1 = "https://jsonplaceholder.typicode.com/posts";
  const apiurl2 = "https://jsonplaceholder.typicode.com/posts/2";

  makeApiCall(apiurl1)
    .then(handleData)
    .catch((err) => console.log("error"));

  makeApiCall(apiurl2)
    .then(handleData)
    .catch((err) => console.log("error"));
}
main();
