console.log("Let's get this party started!");
//create even handler for Search Giphy button
$("#search-btn").on("click", async function (event) {
  event.preventDefault();
  //get the user input
  let searchInput = $("#gif-name").val();
  $("#gif-name").val("");

  //let url = getURL(searchInput);
  //make a get request to the API
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchInput,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  //call a function to get a different gif
  let url = getDiffGifs(response.data);
  //create a new div and give it a class
  let $newDiv = $("<div>").addClass("gif-div");
  //crreate an image tag
  let $newImg = $("<img>").addClass("gif-img").attr("src", url);
  $newDiv.append($newImg);
  $("#gif-container").append($newDiv);
});

function getDiffGifs(response) {
  let len = response.data.length;
  let randomInx = Math.round(Math.random() * len);
  return response.data[randomInx].images.original.url;
}

//event handler for Remove gif button
$("#remove-btn").on("click", function () {
  $("#gif-container").remove();
});
