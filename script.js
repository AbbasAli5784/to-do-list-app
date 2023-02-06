function newItem() {
  //let li = document.createElement("li");
  //let inputValue = document.getElementById("input").value;
  //let text = document.createTextNode(inputValue);
  //li.appendChild(text);

  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("You must write something!");
  } else {
    $("#list").append(li);
  }

  li.on("dblclick", function () {
    li.toggleClass("strike");
  });

  //let crossOutButton = document.createElement("crossOutButton");
  //crossOutButton.appendChild(document.createTextNode("X"));
  //li.appendChild(crossOutButton);

  let crossOutButton = $("<button></button>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  crossOutButton.on("click", deleteListItem);
  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem() {
    li.addClass("delete");
  }

  $("#list").sortable();
}
