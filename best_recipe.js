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

  function(){
    var button1 = document.getElementById("button").innerHTML = "<div></div>"
  }