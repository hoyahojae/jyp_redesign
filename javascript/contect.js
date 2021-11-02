document.querySelector("#seoul").addEventListener("click", function() {
  document.querySelector("#seoul").classList.add("on")
  document.querySelector("#tokyo").classList.remove("on")
  document.querySelector("#beijing").classList.remove("on")
  document.querySelector("#bangkok").classList.remove("on")
  document.querySelector("#seoullist").classList.add("active")
  document.querySelector("#tokyolist").classList.remove("active")
  document.querySelector("#beijinglist").classList.remove("active")
  document.querySelector("#bangkoklist").classList.remove("active")
});

document.querySelector("#tokyo").addEventListener("click", function() {
  document.querySelector("#tokyo").classList.add("on")
  document.querySelector("#seoul").classList.remove("on")
  document.querySelector("#beijing").classList.remove("on")
  document.querySelector("#bangkok").classList.remove("on")
  document.querySelector("#tokyolist").classList.add("active")
  document.querySelector("#seoullist").classList.remove("active")
  document.querySelector("#beijinglist").classList.remove("active")
  document.querySelector("#bangkoklist").classList.remove("active")
});

document.querySelector("#beijing").addEventListener("click", function() {
  document.querySelector("#beijing").classList.add("on")
  document.querySelector("#seoul").classList.remove("on")
  document.querySelector("#tokyo").classList.remove("on")
  document.querySelector("#bangkok").classList.remove("on")
  document.querySelector("#beijinglist").classList.add("active")
  document.querySelector("#seoullist").classList.remove("active")
  document.querySelector("#tokyolist").classList.remove("active")
  document.querySelector("#bangkoklist").classList.remove("active")
});

document.querySelector("#bangkok").addEventListener("click", function() {
  document.querySelector("#bangkok").classList.add("on")
  document.querySelector("#seoul").classList.remove("on")
  document.querySelector("#tokyo").classList.remove("on")
  document.querySelector("#beijing").classList.remove("on")
  document.querySelector("#bangkoklist").classList.add("active")
  document.querySelector("#seoullist").classList.remove("active")
  document.querySelector("#tokyolist").classList.remove("active")
  document.querySelector("#beijinglist").classList.remove("active")
});