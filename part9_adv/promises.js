function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fectched successfully"); //you can pass any data types here - object, array, string, etc.
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

/* 
let response = fetchData();
console.log(response) 
*/
//The above doesn't show you if the promise was fulfilled or rejected
//You can chain methods instead:
fetchData()
  .then((data) => {
    console.log(data);
    return `hitesh`
  })
  .then((value) => {
    console.log(value)
  })
  .catch((error) => console.error(error));
