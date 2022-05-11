
fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    // .then(data => console.log(data));
    .then(data => loadRandomMeal(data));
    

function loadRandomMeal(data){
    for(meals of data.meals){
        let mealTitle = document.querySelector('#random-meal-title');
        mealTitle.textContent = meals.strMeal;
        let mealImage = document.querySelector('#meal-image');
        mealImage.src = meals.strMealThumb;
        let mealInstructions = document.querySelector('#random-meal-instructions');
        mealInstructions.textContent = meals.strInstructions;

        const ulIngredients = document.querySelector('#ingredient-list');

        // let asArray = Object.keys(meals);
        let newArray = Object.values(meals);
        console.log(newArray);
        // const substring = "strIngredient";
        const slicedArray = newArray.slice(9, 17);

        slicedArray.forEach(item => {
            if(item !== ""){
            const btn = document.createElement('button');
            ulIngredients.appendChild(btn);
            btn.textContent = item;
            btn.addEventListener('click', addToGroceryList)
            }
        });
    }}

    function addToGroceryList(e){
    const myItem = e.target.textContent;
    e.target.classList.add("after-clicked");
    console.log(e.target.textContent);
    const groceryListContainer = document.querySelector('#grocery-list-container');
    const li = document.createElement('li');
    li.textContent = myItem;
    document.querySelector('#grocery-list-items').appendChild(li);
    groceryListContainer.classList.remove("hidden");

    li.addEventListener('click', removeItem)
  }

  function removeItem(e){
    e.target.parentNode.remove()
  }

const emptyStar = '☆';
const fullStar = '★';

const starCollection = document.getElementsByClassName("glyph");
for(const star of starCollection){
    star.addEventListener("click", addYourReview);
}

function addYourReview(e){
    const star = e.target;
    if (star.innerText === emptyStar) {
        star.innerText = fullStar;
        star.className = "activated-star";
    } else {
        star.innerText = emptyStar;
        star.className = "nonactivated-star";
    }
};