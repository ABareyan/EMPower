$("#employee").on("click", function (event) {
  event.preventDefault();

  function validateForm() {
    var isValid = true;
    $('.empInput').each(function () {
      if ($(this).val() === '') isValid = false;
    });
    return isValid;
  }

  if (validateForm()) {
   
    var name = $('#name').val();
    name = $.trim(name.replace(/\s+/g, ' '));
    var email = $('#email').val();
    var phoneNumber = $('#phoneNumber').val();
    var jobType = $('#jobType').val();
    jobType = $.trim(jobType.replace(/\s+/g, ' '));
    var jobCategory = $('#jobCategory').val();
    jobCategory = $.trim(jobCategory.replace(/\s+/g, ' '));
    var location = $('#location').val();
    location = $.trim(location.replace(/\s+/g, ' '));
    var wage = $('#wage').val();

    var Newemployee = {
      name: name,
      email: email,
      phone_number: phoneNumber,
      job_type: jobType,
      job_category: jobCategory,
      location: location,
      hourly_wage: wage
    };

    

    $.post("/api/employee/new", Newemployee)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log("Name " + data.name);
      
      $('#name').val("");
      $('#email').val("");
      $('#phoneNumber').val("");
      $('#jobType').val("");
      $('#jobCategory').val("");
      $('#location').val("");
      $('#wage').val("");
      
      UIkit.modal("#modal-sections").show();
      
    });
  } else UIkit.modal("#modal-overflow").show();


  

  

})