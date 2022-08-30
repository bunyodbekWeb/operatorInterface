function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("header_bar").style.marginLeft = "200px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("header_bar").style.marginLeft = "0";
}

// function sidebar(){
//   let sidebar = document.getElementById('mySidebar')
//   if(sidebar.style.display === 'block'){
//     sidebar.style.display = 'none'
//   }
//   else{
//     sidebar.style.display = 'none'
//   }
// }

//   main header starts
function openPage(page) {
  var i;
  var x = document.getElementsByClassName("call");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(page).style.display = "block";

}


function eslatmaHabarlar(){
  let list = document.querySelector(".eslatma_xabar ul")
  if(list.style.display === 'none'){
    list.style.display ='block'
  }
  else{
    list.style.display = 'none'
  }
}
//    sidebar menu list 
function sidebarList() {
  let sidebar_list = document.querySelector(".sidebar_list");
  if (sidebar_list.style.display === "none") {
    sidebar_list.style.display = "block";
  } else {
    sidebar_list.style.display = "none";
  }
}




// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".komputer");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}