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
    var url = $('#url').val();
    url = $.trim(url.replace(/\s+/g, ' '));
    var email = $('#email').val();
    var phoneNumber = $('#phoneNumber').val();
    var jobLocation = $('#jobLocation').val();
    jobLocation = $.trim(jobLocation.replace(/\s+/g, ' '));
    var jobType = $('#jobType').val();
    jobType = $.trim(jobType.replace(/\s+/g, ' '));
    var jobCategory = $('#jobCategory').val();
    jobCategory = $.trim(jobCategory.replace(/\s+/g, ' '));
    var position = $('#position').val();
    position = $.trim(position.replace(/\s+/g, ' '));
    var description = $('#description').val();
    description = $.trim(description.replace(/\s+/g, ' '));
    var wage = $('#wage').val();
    wage = $.trim(wage.replace(/\s+/g, ' '));

    var Newjob = {
      company_name: name,
      url: url, 
      email: email,
      phone_number: phoneNumber,
      location: jobLocation,
      job_type: jobType,
      job_category: jobCategory,
      position: position,
      description: description,
      hourly_wage: wage
    };

    

    $.post("/api/jobs/new", Newjob)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log("Name " + data.company_name);
      UIkit.modal("#modal-sections").show();

      $('#name').val("");
      $('#url').val("");
      $('#email').val("");
      $('#phoneNumber').val("");
      $('#jobLocation').val("");
      $('#jobType').val("");
      $('#jobCategory').val("");
      $('#position').val("");
      $('#description').val("");
      $('#wage').val("");
      
    });
  } else UIkit.modal("#modal-overflow").show();
  

})