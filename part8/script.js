//alert("connected");

//Example 1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let par = document.getElementById("myParagraph");
    par.textContent = "Text changed";
  });

/* 
addEventListener takes 2 params
in the case above, you don't need to name the function since it's not gonna be used anywhere anyway
*/

//Example 2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

/* 
  classList 
  */

//Example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  document.getElementById("coffeeType");
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "pink";
});

//Example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

//Example 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let removedTask = document.getElementById("taskList");
    removedTask.lastElementChild.remove();
  });

//Example 6
document
  .getElementById("clickMeButton")
  .addEventListener("mouseover", function () {
    alert("chaicode");
  });

//Example 7
document.getElementById("teaList").addEventListener("click", function (event) {
  //below is to select the exact item on the list
  if (event.target && event.target.matches(".teaItem")) {
    alert("You select: " + event.target.textContent);
  }
});

//Example 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    //you can say e instead of event, remember params are just placeholders
    e.preventDefault(); //prevent the default behaviour
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is ${feedback}`;
  });

//Example 9
//You can go ahead to EventListener here
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

//Example 10 
document.getElementById('toggleHighlight').addEventListener('click', function(){
  let descriptionText = document.getElementById('descriptionText');
  descriptionText.classList.add("highlight");
  //toggle can also be used instead of add
  //classList.add adds the class
})
