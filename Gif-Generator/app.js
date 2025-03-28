const gifContainer = $("#gifContainer");
const searchInput = $("#search");

$("#submitButton").on("click", async function (e) {
  e.preventDefault();

  let searchVal = searchInput.val();
  searchInput.val("");
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchVal,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  addGif(response.data);

  function addGif(res) {
    let randomGif = Math.floor(Math.random() * res.data.length);
    let newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let newGif = $("<img>", {
      src: res.data[randomGif].images.original.url,
      class: "img-fluid",
    });
    newGif.css({ maxWidth: "250px", maxHeight: "250px" });
    newCol.append(newGif);
    gifContainer.append(newCol);
  }

  console.log("button was clicked");
});

$("#removeButton").on("click", function (e) {
  e.preventDefault();
  gifContainer.empty();
});
