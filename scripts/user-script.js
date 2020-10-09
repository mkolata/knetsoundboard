document.getElementById("mySidebar").style.display = "none";
document.getElementById("mySidebarButton2").addEventListener("click", w3_close);
document.getElementById("maincontent").addEventListener("click", w3_close);
document.getElementById("mySidebarButton1").addEventListener("click", w3_open);

function w3_open() {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("mySidebarButton1").style.display = 'none';
}

function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("mySidebarButton1").style.display = "inline-block";
}