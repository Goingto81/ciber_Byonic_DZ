document.addEventListener("DOMContentLoaded", function () {
  const cities = document.querySelectorAll(".city");
  const ticketPopup = document.getElementById("ticketPopup");

  cities.forEach((city) => {
    city.addEventListener("mouseenter", function () {
      ticketPopup.style.display = "block";
    });

    city.addEventListener("mouseleave", function () {
      ticketPopup.style.display = "none";
    });
  });
});
