// function showAlt(){
//     var area = document.getElementsByTagName("area");
//     var text = document.getElementsByTagName("text");

//     for(var i=0; i<area.length; i++){
//         area[i].addEventListener("mouseover",function())
//     }
// }

var area = document.getElementsByTagName("area");
var text = document.getElementById("text");

for (var i = 0; i < area.length; i++) {
  area[i].addEventListener("mouseover", function() {
    var alt = this.alt;
    text.textContent = alt;
  });
}