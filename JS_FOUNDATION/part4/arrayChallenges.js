/* 
1. Declare  an array named teaFlavors that contains 
the strings green tea, black tea and oolong tea.

Access the first element of the array and store it in a variable named firstTea
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"]

let firstTea = teaFlavors[0];
console.log(firstTea);

/* 
4. Declare an array named citiesVisited containing Mumbai and Sydney.
Add Berlin to the array using the push method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
//ways to add it:
//citiesVisited[2] = "Berlin";
//citiesVisited[citiesVisited.length] = "Berlin";
citiesVisited.push("Berlin")

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

//you could check using includes() but this will only give you true/false + case-sensitive
let isLondonInList = cityBucketList.includes("London");
