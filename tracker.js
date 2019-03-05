
function display() {
  var lengthX = parseInt(document.getElementById('lengthX').value);
  var lengthY = parseInt(document.getElementById('lengthY').value);
  var lengthZ = parseInt(document.getElementById('lengthZ').value);

  if (lengthX + lengthY <= lengthZ || lengthY + lengthZ <= lengthX || lengthX + lengthZ <= lengthY){
    alert("not a TRIANGLE");
  }else if (lengthX==lengthY && lengthY==lengthZ && lengthZ==lengthX){
    alert( "this is an equilateral triangle");
  }else if (lengthX==lengthY || lengthY==lengthZ || lengthZ==lengthX ){
    alert ("this is an isosceles triangle");
  }else {
    alert( "this is a scalene triangle");
  }
}
display();
