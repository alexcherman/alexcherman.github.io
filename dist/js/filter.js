function filter() {
  var input = document.querySelector(".search");

  function searchFilter() {
    var filter, table, resource, td, tableCell, i, resTitle, resItem;
    filter = input.value.toUpperCase();
    table = document.querySelector(".resources-table");
    tableCell = document.getElementsByClassName("resources-table__cell");
    resource = document.getElementsByClassName("resource");

    for (i = 0; i < tableCell.length; i++) {

      resItem = tableCell[i].getElementsByClassName("resource");
      var a = 0;

      for (var index = 0; index < resItem.length; index++) {

        resTitle = resItem[index].querySelector(".resource__title");
        
        if (resTitle) {
          
          if (resTitle.innerHTML.toUpperCase().indexOf(filter) > -1) {
            resItem[index].style.display = "block";
            resItem[index].parentNode.parentNode.style.display = "flex";
            a++;
          } else {
            resItem[index].style.display = "none";
            resItem[index].parentNode.parentNode.style.display = "none";

            if (a > 0) {
              resItem[index].parentNode.parentNode.style.display = "flex";
            }

          }
        }
      }
    }
  }

  input.addEventListener("keyup", searchFilter);  
};

filter();


