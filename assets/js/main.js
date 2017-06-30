var acc = document.getElementsByClassName("tab-title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
  }
}