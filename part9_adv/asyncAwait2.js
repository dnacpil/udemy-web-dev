function fetchPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post data fectched");
    }, 2000);
  });
}
function fetchCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment data fectched");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("Making fetch happen");
    //const blogData = await fetchPostData();
    //const commentData = await fetchCommentData();
    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    console.log("Fetch happened");
    console.log(postData);
    console.log(commentData);
  } catch (error) {
    console.log("Error fetching blog data");
  }
}
//Advise: best to handle/write errors first

getBlogData();
