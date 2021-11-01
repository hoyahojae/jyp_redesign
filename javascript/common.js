// HEADER
document.querySelector("#company").addEventListener("mouseover", function() {
  document.querySelector(".sub_menu").classList.add("active")
});

document.querySelector("#company").addEventListener("mouseout", function() {
  document.querySelector(".sub_menu").classList.remove("active")
});