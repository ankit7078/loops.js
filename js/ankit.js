function changeimage() {
  var img = document.getElementById("image").value;
  var bwidth = document.getElementById("border-image").value;
  var btype = document.getElementById("btype").value;
  var bcolor = document.getElementById("bcolor").value;
  var bradius = document.getElementById("radius").value;
  var iwidth = document.getElementById("width").value;
  document.getElementById("image").innerHTML = img;
  document.getElementById("image").style.borderWidth = bwidth + "px";
  document.getElementById("image").style.borderStyle = btype;
  document.getElementById("image").style.borderColor = bcolor;
  document.getElementById("image").style.borderRadius = bradius + "%";
  document.getElementById("image").style.width = iwidth + "px";
}
