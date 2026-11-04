// jQuery is used here for the welcome message and dark-mode button.
$(document).ready(function () {
  $("#welcomeMessage").hide().fadeIn(900);

  $("#themeBtn").on("click", function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
      $(this).text("☀️ Light mode");
    } else {
      $(this).text("🌙 Dark mode");
    }
  });
});
