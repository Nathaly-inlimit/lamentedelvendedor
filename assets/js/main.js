var acc = document.getElementsByClassName("tab-title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
  }
}


function clock(numeroID) {
 $("#clockdiv"+numeroID)
   .countdown("2017/07/24", function(event) {
     $(this).text(
       event.strftime('%D d %H h %M m %S s')
     );
   });
}