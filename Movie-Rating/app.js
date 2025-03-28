$("#movie-rating").css("width", "100px");

$("#submit-rating").on("click", function (e) {
  e.preventDefault();

  let movie = $("#movie-title").val();
  let rating = $("#movie-rating").val();

  let listItem = $(`<li> ${movie} : ${rating} </li>`);
  let removeButton = $("<button>")
    .text("Remove")
    .click(function (e) {
      $(this).parent().remove();
    });
  listItem.append(removeButton);
  $("ol").append(listItem);
});

$("#sort-name").on("click", function () {
  let sortedListItems = $("ol li")
    .toArray()
    .sort(function (a, b) {
      return $(a).text().localeCompare($(b).text());
    });
  $("ol").empty().append(sortedListItems);
});

$("#sort-rating").on("click", function () {
  let sortedListItems = $("ol li")
    .toArray()
    .sort(function (a, b) {
      let ratingA = parseFloat($(a).text().split(":")[1].trim());
      let ratingB = parseFloat($(b).text().split(":")[1].trim());
      return ratingB - ratingA;
    });
  $("ol").empty().append(sortedListItems);
});
