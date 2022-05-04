
function encrypt() {
  document.querySelector("#qLeftBox").innerHTML = "Original Message";
  document.querySelector("#qRightBox").innerHTML = "Encrypted Message";

  var text = null;
  text = document.querySelector("#inputText").value;

  text = text.replace(/e/g, "enter");
  text = text.replace(/i/g, "imes");
  text = text.replace(/o/g, "ober");
  text = text.replace(/a/g, "ai");
  text = text.replace(/u/g, "ufat");

  document.querySelector("#resultText").innerHTML = text;
}

function decrypt() {
  document.querySelector("#qLeftBox").innerHTML = "Original Message";
  document.querySelector("#qRightBox").innerHTML = "Encrypted Message";

  var code = null;
  code = document.querySelector("#inputText").value;

  code = code.replace(/ai/g, "a");
  code = code.replace(/enter/g, "e");
  code = code.replace(/imes/g, "i");
  code = code.replace(/ober/g, "o");
  code = code.replace(/ufat/g, "u");

  document.querySelector("#resultText").innerHTML = code;
}

function leftCopy() {
  var originalText = document.getElementById("inputText");
  originalText.select();
  document.execCommand("copy");
}

function rightCopy() {
  var resultText = document.getElementById("resultText").innerHTML;

  navigator.clipboard.writeText(resultText);
}

function leftErase() {
  document.querySelector("#inputText").value = "";
}

function rightErase() {
  document.querySelector("#resultText").innerHTML = "";
}
