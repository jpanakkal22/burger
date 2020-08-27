$(function (){
  $(".create-form").on("submit", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  
  var newBurg = {
    burger_name: $("#bg").val().trim(),
    devoured: 0
  };
    
  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurg
    }).then(
    function() {
      console.log("Added new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });  
  $(".change-burger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    
    var newBurgerState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("Burger devoured!")
        // Reload the page to get the updated list
        location.reload();
      });
    }); 
    $(".remove-burger").on("click", function(event) {
      event.preventDefault();
    
      var id = $(this).data("id");
    
      // Send the DELETE request.
    $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
    }).then(location.reload());
  });
});

 
 
  


