$(function () {
  $("#textInputId").on("keyup", function (e) {
    e.preventDefault();

    var getInput = $("#textInputId").val();

    if (getInput) {
      $("#someOtherDivId").html(
        '<button class="btn-secondary">' + getInput + "</button>"
      );
    }
  });
});