$.get("/api/jobs/all", function (data) {
  for (var i = data.length - 1; i >= 0; i--) {
    var tableBody = $("<tr>")
    // tableBody.addClass("uk-table-link");
    tableBody.append("<td>" + data[i].company_name + "</td>");
    tableBody.append("<td>" + data[i].url + "</td>");
    tableBody.append("<td>" + data[i].email + "</td>");
    tableBody.append("<td>" + data[i].phone_number + "</td>");
    tableBody.append("<td>" + data[i].location + "</td>");
    tableBody.append("<td>" + data[i].job_type + "</td>");
    tableBody.append("<td>" + data[i].job_category + "</td>");
    tableBody.append("<td>" + data[i].position + "</td>");
    tableBody.append("<td>" + data[i].description + "</td>");
    tableBody.append("<td>" + data[i].hourly_wage + "</td>");

    $("#result-job").append(tableBody);

  }

});