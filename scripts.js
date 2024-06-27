window.onload = function () {
  showPopup();
};

function showPopup() {
  $("#popup").modal("show");
}

function closePopup() {
  $("#popup").modal("hide");
}

function checkDirections() {
  const currencyPair = document.getElementById("currency-pair").value;
  const hourDirection = document.getElementById("hour-direction").value;
  const weekDirection = document.getElementById("week-direction").value;

  let resultText = "";

  if (currencyPair && hourDirection && weekDirection) {
    if (hourDirection === weekDirection) {
      resultText = `<p class="text-success">${currencyPair.toUpperCase()}: Match. Consider trading.</p>`;
    } else {
      resultText = `<p class="text-danger">${currencyPair.toUpperCase()}: No Match. Do not trade.</p>`;
    }
  } else {
    resultText = `<p class="text-warning">Please select all options.</p>`;
  }

  document.getElementById("result").innerHTML = resultText;
}
