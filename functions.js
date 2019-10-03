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
  foodData(response.meals[0].strMeal, response.meals[0].strInstructions, response.meals[0].strMealThumb, myModalHeader1, myModalBody1, myModalImage1);
  },
  error: function(error){
    console.log("Error: " + error);
  }
  });

$.ajax({
  type: "GET",
  url: "https://www.themealdb.com/api/json/v1/1/random.php",
  dataType: "JSON",
  success: function(response){
  console.log(response);
  foodData(response.meals[0].strMeal, response.meals[0].strInstructions, response.meals[0].strMealThumb, myModalHeader2, myModalBody2, myModalImage2 );
  },
  error: function(error){
    console.log("Error: " + error);
  }
  });

$.ajax({
  type: "GET",
  url: "https://www.themealdb.com/api/json/v1/1/random.php",
  dataType: "JSON",
  success: function(response){
  console.log(response);
  foodData(response.meals[0].strMeal, response.meals[0].strInstructions, response.meals[0].strMealThumb, myModalHeader3, myModalBody3, myModalImage3);
  },
  error: function(error){
    console.log("Error: " + error);
  }
  });

$.ajax({
  type: "GET",
  url: "https://www.themealdb.com/api/json/v1/1/random.php",
  dataType: "JSON",
  success: function(response){
  console.log(response);
  foodData(response.meals[0].strMeal, response.meals[0].strInstructions, response.meals[0].strMealThumb, myModalHeader4, myModalBody4, myModalImage4);
  },
  error: function(error){
    console.log("Error: " + error);
  }
  });

$.ajax({
  type: "GET",
  url: "https://www.themealdb.com/api/json/v1/1/random.php",
  dataType: "JSON",
  success: function(response){
  console.log(response);
  foodData(response.meals[0].strMeal, response.meals[0].strInstructions, response.meals[0].strMealThumb, myModalHeader5, myModalBody5, myModalImage5);
  },
  error: function(error){
    console.log("Error: " + error);
  }
  });

$.ajax({
  type: "GET",
  url: "https://www.themealdb.com/api/json/v1/1/random.php",
  dataType: "JSON",
  success: function(response){
  console.log(response);
  foodData(response.meals[0].strMeal, response.meals[0].strInstructions, response.meals[0].strMealThumb, myModalHeader6, myModalBody6, myModalImage6);
  },
  error: function(error){
    console.log("Error: " + error);
  }
  });

$.ajax({
  type: "GET",
  url: "https://www.themealdb.com/api/json/v1/1/random.php",
  dataType: "JSON",
  success: function(response){
  console.log(response);
  foodData(response.meals[0].strMeal, response.meals[0].strInstructions, response.meals[0].strMealThumb, myModalHeader7, myModalBody7, myModalImage7);
  },
  error: function(error){
    console.log("Error: " + error);
  }
  });


  
  function foodData(arg, arg1, arg3, headerId, bodyId, imageId){
      var meal=$(headerId).text(arg);
      $(headerId).append(meal);
      var recipe =$(bodyId).text(arg1);
      $(bodyId).append(recipe);

     var image = document.createElement("img")
      $(imageId).append(image.innerHTML="<img src=" +arg3+ "></img>");   
   }

   var buttonElement1 = document.getElementById('today');
    buttonElement1.addEventListener('click',foodData(response.meals[0].strMeal, response.meals[0].strInstructions, response.meals[0].strMealThumb, myModalHeader1, myModalBody1, myModalImage1));
    var buttonElement2 = document.getElementById('today');
    buttonElement1.addEventListener('click',foodData(response.meals[0].strMeal, response.meals[0].strInstructions, response.meals[0].strMealThumb, myModalHeader2, myModalBody2, myModalImage2));
    var buttonElement3 = document.getElementById('today');
    buttonElement1.addEventListener('click',foodData(response.meals[0].strMeal, response.meals[0].strInstructions, response.meals[0].strMealThumb, myModalHeader3, myModalBody3, myModalImage3));
    var buttonElement4 = document.getElementById('today');
    buttonElement1.addEventListener('click',foodData(response.meals[0].strMeal, response.meals[0].strInstructions, response.meals[0].strMealThumb, myModalHeader4, myModalBody4, myModalImage4));
    var buttonElement5 = document.getElementById('today');
    buttonElement1.addEventListener('click',foodData(response.meals[0].strMeal, response.meals[0].strInstructions, response.meals[0].strMealThumb, myModalHeader5, myModalBody5, myModalImage5));
    var buttonElement6 = document.getElementById('today');
    buttonElement1.addEventListener('click',foodData(response.meals[0].strMeal, response.meals[0].strInstructions, response.meals[0].strMealThumb, myModalHeader6, myModalBody6, myModalImage6));
    var buttonElement7 = document.getElementById('today');
    buttonElement1.addEventListener('click',foodData(response.meals[0].strMeal, response.meals[0].strInstructions, response.meals[0].strMealThumb, myModalHeader7, myModalBody7, myModalImage7));