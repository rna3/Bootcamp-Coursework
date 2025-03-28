"use strict";

// This is the global list of the stories, an instance of StoryList
let storyList;

/** Get and show stories when site first loads. */

async function getAndShowStoriesOnStart() {
  storyList = await StoryList.getStories();
  $storiesLoadingMsg.remove();

  putStoriesOnPage();
}

/**
 * A render method to render HTML for an individual Story instance
 * - story: an instance of Story
 *
 * Returns the markup for the story.
 */

function generateStoryMarkup(story, showDeleteBtn = false) {
  // console.debug("generateStoryMarkup", story);

  const hostName = story.getHostName();

  //create a star either marked/un-marked, if its favorite or not
  const starClass =
    currentUser && currentUser.isFavorite(story) ? "fas" : "far";
  const starHTML = currentUser
    ? `<span class="star"><i class="${starClass} fa-star"></i></span>`
    : "";

  // create a trashcan if showDeleteBtn = true
  const deleteButtonHTML = showDeleteBtn
    ? `<span class="trash-can"><i class="fas fa-trash-alt"></i></span>`
    : "";

  return $(`
  <li id="${story.storyId}">
  <div>
  ${deleteButtonHTML}
  ${starHTML}
  <a href="${story.url}" target="a_blank" class="story-link">
    ${story.title}
  </a>
  <small class="story-hostname">(${hostName})</small>
  <div class="story-author">by ${story.author}</div>
  <div class="story-user">posted by ${story.username}</div>
  </div>
</li>
    `);
}

/** Gets list of stories from server, generates their HTML, and puts on page. */

function putStoriesOnPage() {
  console.debug("putStoriesOnPage");

  $allStoriesList.empty();

  // loop through all of our stories and generate HTML for them
  for (let story of storyList.stories) {
    const $story = generateStoryMarkup(story);
    $allStoriesList.append($story);
  }

  $allStoriesList.show();
}

// handle the submit story by gathering all story values, updating the API, generating the html, and adding it to the allStories list.

async function submitStory(evt) {
  console.debug("submitStory");
  evt.preventDefault();

  const title = $("#submit-title").val();
  const author = $("#submit-author").val();
  const url = $("#submit-url").val();

  const username = currentUser.username;
  const storyValues = { title, url, author, username };

  const addedStory = await storyList.addStory(currentUser, storyValues);

  const submittedStory = generateStoryMarkup(addedStory);
  $allStoriesList.prepend(submittedStory);

  $submitForm.hide();
  $submitForm.trigger("reset");
}

$submitForm.on("submit", submitStory);

//show the Favorite stories

function showFavorites() {
  console.debug("showFavorites");
  $favoritedStories.empty();

  for (let story of currentUser.favorites) {
    const $story = generateStoryMarkup(story);
    $favoritedStories.append($story);
  }

  $favoritedStories.show();
}

// handle the star icon click, will check if star is marked/unmarked then run the appropriate method to add or remove favorites.

async function clickedStar(evt) {
  console.debug("clickedStar");

  const $star = $(evt.target).closest("i");
  const storyId = $star.closest("li").attr("id");
  const story = storyList.stories.find((s) => s.storyId === storyId);

  const method = $star.hasClass("fas") ? "removeFavorite" : "addFavorite";

  await currentUser[method](story);
  $star.toggleClass("fas far");
}

$eachStoryList.on("click", ".star i", clickedStar);

// function for showing my stories and to help create a trashcan icon in by passing in true to the generateStoryMarkup() function

function showOwnStories() {
  console.debug("showOwnStories");

  $ownStories.empty();

  for (let story of currentUser.ownStories) {
    let $story = generateStoryMarkup(story, true);
    $ownStories.append($story);
  }

  $ownStories.show();
}

// handle clicking on trashcan by selecting the storyid and running removeStory, then showing my stories

async function trashcanClicked(evt) {
  console.debug("trashcanClicked");

  const storyId = $(evt.target).closest("li").attr("id");

  await storyList.removeStory(currentUser, storyId);

  showOwnStories();
}

$ownStories.on("click", ".trash-can", trashcanClicked);
