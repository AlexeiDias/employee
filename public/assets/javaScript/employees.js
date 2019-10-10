// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-employee").on("click", function(event) {
      var id = $(this).data("id");
      var newEmployee = $(this).data("newemployee");
  
      var newEmployeeState = {
        inactive: newEmployee
      };
  
      // Send the PUT request.
      $.ajax("/api/employees/" + id, {
        type: "PUT",
        data: newEmployeeState
      }).then(
        function() {
          console.log("changed inactive to", newEmployee);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newEmployee = {
        employee_name: $("#ca").val().trim(),
        inactive: $("[name=inactive]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/employees", {
        type: "POST",
        data: newEmployee
      }).then(
        function() {
          console.log(" new employee created");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-employee").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/employees/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted employee", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  