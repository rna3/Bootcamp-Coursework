//selectors for the submit form and the list of memes.
const memeForm = document.querySelector("form");
const memeList = document.querySelector("#meme-list");

//remove button logic
memeList.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
});

//logic for the submit button. will create the meme components and append them together.
memeForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const newDiv = document.createElement("div");
  newDiv.className = "meme meme-components";
  const topTextDiv = document.createElement("div");
  topTextDiv.className = "meme-text meme-top-text";
  topTextDiv.id = "meme-top-text";
  const newDivImage = document.createElement("img");
  newDivImage.id = "meme-image";
  const bottomTextDiv = document.createElement("div");
  bottomTextDiv.className = "meme-text meme-bottom-text";
  bottomTextDiv.id = "meme-bottom-text";
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove Meme";
  removeButton.className = "remove-button";

  newDiv.appendChild(topTextDiv);
  newDiv.appendChild(newDivImage);
  newDiv.appendChild(bottomTextDiv);
  newDiv.appendChild(removeButton);

  //select the values from the inputs and assign the values to the newDiv.
  const topText = document.getElementById("top-text").value;
  const bottomText = document.getElementById("bottom-text").value;
  const imageUrl = document.getElementById("image-url").value;

  newDivImage.src = imageUrl;
  topTextDiv.textContent = topText;
  bottomTextDiv.textContent = bottomText;

  //   put the newDiv with all the values assigned in the ol element.
  document.querySelector("ol").appendChild(newDiv);

  //clear the inputs on the form
  document.getElementById("top-text").value = "";
  document.getElementById("bottom-text").value = "";
  document.getElementById("image-url").value = "";
});
