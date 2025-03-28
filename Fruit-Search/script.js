const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);

function searchHandler(e) {
  // TODO
  const inputVal = e.target.value;
  const results = search(inputVal);
  showSuggestions(results, inputVal);
}

function search(str) {
  let results = [];

  // TODO
  const userInput = str.toLowerCase();
  fruit.forEach((fruitName) => {
    if (fruitName.toLowerCase().includes(userInput)) {
      results.push(fruitName);
    }
  });

  return results;
}

function showSuggestions(results, inputVal) {
  // TODO
  suggestions.innerHTML = "";
  results.forEach((result) => {
    const li = document.createElement("li");
    suggestions.classList.add("has-suggestions");
    li.textContent = result;
    suggestions.appendChild(li);
    if (inputVal === "") {
      suggestions.innerHTML = "";
      suggestions.classList.remove("has-suggestions");
    }
  });
}

function useSuggestion(e) {
  // TODO
  const clickedItem = e.target.textContent;
  input.value = clickedItem;
  suggestions.innerHTML = "";
  suggestions.classList.remove("has-suggestions");
}
