"use strict";

const result = document.getElementById("result");
const searchBtn = document.getElementById("search-btn");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

searchBtn.addEventListener("click", () => {
  let userInp = document.getElementById("user-inp").value;
  console.log(userInp);
  if (userInp.length === 0) {
    result.innerHTML = `<h3>Input Field Cannot Be Empty 😭</h3>`;
  } else {
    fetch(url + userInp)
      .then((response) => response.json())
      .then((data) => {
        let myMeal = data.meals[0];
        console.log(myMeal);
        console.log(myMeal.strMealThumb);
        console.log(myMeal.strMeal);
        console.log(myMeal.strArea);
        console.log(myMeal.strInstructions);
      });

    let count = 1;
    console.log(count);
    let ingredients = [];

    for (let i in myMeal) {
      let ingredient = "";
      let measure = "";
      if (i.startsWith("strIngredient") && myMeal[i]) {
        ingredient = myMeal[i];
        measure = myMeal[`strMeasure` + count];
        count += 1;
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    console.log(ingredients);
  }
});
