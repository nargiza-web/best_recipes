$.ajax({
    type: "GET",
    url: "http://quotes.rest/qod.json?category=inspire",
    dataType: "JSON",
    success: function(response){
    //   var dailyQuote=(response.contents.quotes[0]);
    //   return dailyQuote;
    console.log(response);
    text(response.contents.quotes[0].quote, response.contents.quotes[0].author);
    },
    error: function(error){
      console.log("Error: " + error);
    }
   });
  /*function quotes(){
 var quotesPosition=document.getElementsByTagName("quotes");
 quotesPosition.(dailyQuote);
  }*/
  function text(argument,argument1){
 var heading=$("<h3/>").text(' " ' + argument + ' \" ');
 $("#quotes").append(heading);
 var author=$("<h5/>").text(argument1);
 $("#author").append(author);
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
    var buttonElement1 = document.getElementById('today');
    buttonElement1.addEventListener('click',foodData(response.meals[0].strMeal, response.meals[0].strInstructions, response.meals[0].strMealThumb));
  
    

     

   