$.get("/api/employee/all", function (data) {
  for (var i = data.length - 1; i >= 0; i--) {
    var tableBody = $("<tr>")
    tableBody.addClass("uk-text-truncate");
    tableBody.append("<td>" + data[i].name + "</td>");
    tableBody.append("<td>" + data[i].email + "</td>");
    tableBody.append("<td>" + data[i].phone_number + "</td>");
    tableBody.append("<td>" + data[i].job_type + "</td>");
    tableBody.append("<td>" + data[i].job_category + "</td>");
    tableBody.append("<td>" + data[i].location + "</td>");
    tableBody.append("<td>" + data[i].hourly_wage + "</td>");

    $("#result-employee").append(tableBody);
  }
});