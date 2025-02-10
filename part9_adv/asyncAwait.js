function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "chaicode", url: "https://chaicode.com" });
    }, 3000);
  });
}
async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData(); //you can only use "await" when it's async - they go hand in hand
    console.log("User data fetched successfully")
    console.log("User data ", userData);
  } 
  //reject from fetchUserData will always run this
  catch (error) {
    console.log("Error fetching data", error);
  }
}
getUserData();

