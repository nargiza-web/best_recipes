// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
btn[i].onclick = function(e) {
    e.preventDefault();
    modal = document.querySelector(e.target.getAttribute("href"));
    modal.style.display = "block";
}
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
}
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
    }
}

$.ajax({
  type: "GET",
  url: "https://www.themealdb.com/api/json/v1/1/random.php",
  dataType: "JSON",
  success: function(response){
  console.log(response);
  foodData(response.meals[0].strMeal, response.meals[0].strInstructions, response.meals[0].strMealThumb);
  },
  error: function(error){
    console.log("Error: " + error);
  }
  });
  
  function foodData(arg, arg1, arg3){
      var meal=$(".name").text(arg);
      $(".name").append(meal);
      var recipe =$(".modal-body").text(arg1);
      $(".modal-body").append(recipe);

     var image = document.createElement("img")
      //image.innerHTML="<img src=" +arg3+ "></img>";
      $(".modal-body").append(image.innerHTML="<img src=" +arg3+ "></img>");
      
      
   }