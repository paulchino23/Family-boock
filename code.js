var reasons=["Family","Mom and Dad","Brother","Me"];
var image=[""];
var i=0;
function nextslide(){
document.getElementById("save").src=image[i];
  document.getElementById("reason").innerHTML=reasons[i];i++;
}
