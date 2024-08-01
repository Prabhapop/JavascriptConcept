// Implement a try_catch block to handle  on error that occurs during API data fetching.

// async function fetchData() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error Fetching Data:" + error);
//   }
// }
// fetchData();

async function fetchdata() {
  try {
    response = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("error found" + error);
  }
}
fetchdata();

