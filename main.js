// Set the date we're counting down to

const botao = document.querySelector("#submit-button");
botao.addEventListener("click", imprimeData);

function imprimeData() {
  var countDownDate = new Date("April 25, 2021 12:00:00").getTime();
  var dataatual = document.querySelector("#number-input");
  var dataatual1 = dataatual.value;
  console.log(dataatual1);
  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Display the result in the element with id="demo"
    document.getElementById(
      "time-left"
    ).innerHTML = ` <p class='content-time-left-number'>${days}:</p>
                      <p class='content-time-left-number'>${hours}:</p>
                      <p class='content-time-left-number'>${minutes}</p>`;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("time-left").innerHTML =
        "Escolha uma data maior ou igual ao dia " + dataatual;
    }
  }, 1000);
}
