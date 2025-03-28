"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

// handle click on 'submit' link in navbar

function navSubmitClick(evt) {
  console.debug("navSubmitClick", evt);
  hidePageComponents();
  $allStoriesList.show();
  $submitForm.show();
}

$navSubmit.on("click", navSubmitClick);

// handle click on favorites link, will hide all stories and show favorites

function navFavoritesClick(evt) {
  console.debug("navFavoritesClick", evt);
  hidePageComponents();
  showFavorites();
}

$body.on("click", "#nav-favorites", navFavoritesClick);

// handle click on my stories, hides all stories then run showOwnStories to generate html, then show my stories.

function navMyStoriesClick(evt) {
  console.debug("navMyStoriesClick", evt);
  hidePageComponents();
  showOwnStories();
  $ownStories.show();
}

$body.on("click", "#nav-my-stories", navMyStoriesClick);
