var total = document.getElementById("total");

var plsbtn = document.getElementsByClassName("plus");
for (let btn of plsbtn) {
  btn.addEventListener("click", function () {
    var itemName = btn.getAttribute("name");
    console.log(itemName);
    var prix = document.getElementById(itemName + "_prix").innerHTML;
    var qant = document.getElementById(itemName + "_qty");
    qant.innerHTML++;
    total.innerHTML = parseInt(total.innerHTML) + parseInt(prix);
  });
}

var plsbtn = document.getElementsByClassName("moins");
for (let btn of plsbtn) {
  btn.addEventListener("click", function () {
    var itemName = btn.getAttribute("name");
    console.log(itemName);
    var prix = document.getElementById(itemName + "_prix").innerHTML;
    var qant = document.getElementById(itemName + "_qty");
    if (qant.innerHTML > 0) {
      qant.innerHTML--;
      total.innerHTML = parseInt(total.innerHTML) - parseInt(prix);
    } else {
      alert("quantity cannot be negative");
    }
  });
}
var hearts = document.getElementsByClassName("coeur");


for (let heart of hearts) {
  heart.addEventListener("click", function () {
    if (heart.getAttribute("fill") === "white") {
      heart.setAttribute("fill", "red");
    } else {
      heart.setAttribute("fill", "white");
    }
  });
}


let remove = document.getElementsByClassName("btn_remove");

for (let btn of remove) {
  btn.addEventListener("click", function () {
    let product = btn.parentElement.parentElement;
    product.parentElement.removeChild(product);
  });
}
// function modPrix() {
//   var prix = document.getElementsById("_prix").innerText;
//   var qant = document.getElementById("_qty").value;
//   var total = parseInt(prix) * qant;
//   console.log(total);
//   document.getElementById("_prix").innerHTML = total;
// }


