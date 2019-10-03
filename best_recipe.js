//Function to load daily quote
$.ajax({
    type: "GET",
    url: "http://quotes.rest/qod.json?category=inspire",
    dataType: "JSON",
    success: function(response){

    console.log(response);
    text(response.contents.quotes[0].quote, response.contents.quotes[0].author);
    },
    error: function(error){
      console.log("Error: " + error);
    }
   });

  function text(argument,argument1){
 var heading=$("<h3/>").text(' " ' + argument + ' \" ');
 $("#quotes").append(heading);
 var author=$("<h5/>").text(argument1);
 $("#author").append(author);
  }

//Function to load daily meal plan
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
    
      $(".modal-body").append(image.innerHTML="<img src=" +arg3+ "></img>");
   }
    

//Function to load week meal planner
    $.ajax({
      type: "GET",
      url: "https://www.themealdb.com/api/json/v1/1/search.php?s",
      dataType: "JSON",
      success: function(response){
      console.log(response);
      var array = [];
      //for (var i=1; i<=7; i++){
     while(array.length <7){
        var randomize = Math.floor(Math.random() *25);
        if (array.indexOf(randomize)=== -1){
           array.push(randomize);
        }
     //     else {
     //         array.push(randomize);
     //    }
     //       //array.push(Math.floor(Math.random() * 25))
      }
      array.forEach(function(element){
      food(response.meals[element].strMeal, response.meals[element].strInstructions, response.meals[element].strMealThumb);
      })
     },
      error: function(error){
        console.log("Error: " + error);
      }
     });
     
     function food(argument, argument1, argument2){
     var name = $("<h3/>").text(argument);
     $("body").append(name);var image = document.createElement("img");
     image.src = argument2;
     $("body").append(image);var recipe = $("<h5/>").text(argument1);
     $("body").append(recipe);
     }
  
    
     

   