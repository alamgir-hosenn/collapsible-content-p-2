let collapsible = document.getElementById("collapsible");
let content = document.getElementById("content");

collapsible.addEventListener("click", () => {
  content.classList.toggle("content_show");
});
