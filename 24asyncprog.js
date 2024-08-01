// implement a async function to fetch data from an API and handle errors using try/catch

async function fetchdata(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error Fetching data ${error}`);
  }
}
fetchdata("https://jsonplaceholder.typicode.com/posts").then((data) =>
  console.log(data)
);
