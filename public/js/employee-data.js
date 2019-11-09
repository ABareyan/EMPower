$(document).ready(function () {


  $(".uk-text-center").hide();

  $("#employeeMail").on("click", function (event) {
    event.preventDefault();



    function validateForm() {
      var isValid = true;
      $('.empInput').each(function () {
        if ($(this).val() === '') isValid = false;
      });
      return isValid;
    }

    if (validateForm()) {
      var userEmail = $("#email").val().trim();

      $.get("/api/employee/" + userEmail, function (data) {
                
        findEmployee(data);
      })

    }
    else {
      UIkit.modal("#modal-overflow").show();
    }

  });

  function findEmployee(data) {

    
    if(data.length === 0) {
      return UIkit.modal("#modal-overflow2").show();
    } 

    

    $(".uk-text-center").show();
    $(".uk-margin-large-bottom").hide();

   
    for (var i = 0; i < data.length; i++) {
     
      var tableBody = $("<tr>")
      tableBody.append("<td>"+ data[i].name +"</td>");
      tableBody.append("<td>" + data[i].email + "</td>");
      tableBody.append("<td>" + data[i].job_type + "</td>");
      tableBody.append("<td>" + data[i].location + "</td>");
      tableBody.append("<td>" + data[i].hourly_wage + "</td>");
      // tableBody.append("<td>" + data[i].id + "</td>");
      tableBody.append("<td>" + 
      "<a class='uk-link-reset' data-id=' " + data[i].id + " '  href='/remove/" + data[i].id + "'>" + 
      "<span uk-icon='trash'></span>" + 
      "</a>" + 
      "</td>");
      

      $("#result-employee").append(tableBody);

      $(".uk-link-reset").click(function(){

        $.ajax({
          method: "DELETE",
          url: "/api/remove/" + $(this).attr("data-id")
        }).then(function() {
          console.log("Deleted Successfully!");

        });
      })
    }
  
  }

});
