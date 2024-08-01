// implement a function that makes multiple API calls and
//  processes the data using callbacks.

function makeApiCall(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((err) => console.error("Error during Api Call:", err.message));
}

function handleData(data) {
  console.log("Processed Data", data);
}

function main() {
  const apiurl1 = "https://jsonplaceholder.typicode.com/posts/6";
  const apiurl2 = "https://jsonplaceholder.typicode.com/posts/2";

  makeApiCall(apiurl1, handleData);
  makeApiCall(apiurl2, handleData);
}
main();
