$("#employee").on("click", function (event) {
  event.preventDefault();

  function validateForm() {
    var isValid = true;
    $('.empInput').each(function () {
      if ($(this).val() === '') isValid = false;
    });
    return isValid;
  }

  if (!validateForm()) {
    UIkit.modal("#modal-overflow").show();
  }



  console.log(validateForm());
  console.log($('#name').val().trim());
  


})