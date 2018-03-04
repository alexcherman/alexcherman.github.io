
var acc = document.getElementsByClassName("resource-accordiion__tab");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    this.classList.toggle("block");
    for (var index = 0; index < acc.length; index++) {
      if (!(this == acc[index])) {
        acc[index].classList.remove("block");
      } 
    }
    
  });
}

