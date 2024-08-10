let collapsible = document.getElementById("collapsible");
let collapsible_content = document.getElementById("collapsible_content");

collapsible.addEventListener("click", () => {
  collapsible.classList.toggle("active");
  collapsible_content.classList.toggle("show_content");
});
