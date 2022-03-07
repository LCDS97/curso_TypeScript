var jsinput1 = document.getElementById("num1");
var jsinput2 = document.getElementById("num2");
var jsbutton = document.getElementById("button");
function jssum(a, b) {
    return a + b;
}
jsbutton.addEventListener("click", function () {
    console.log(jssum(jsinput1.value,jsinput2.value));
});
