document.addEventListener("DOMContentLoaded", function () {
  const botao = document.querySelector("#submit-button");
  botao.addEventListener("click", imprimeData);

  function imprimeData() {
    var x = setInterval(function () {
      var countDownDate = document.querySelector("#date-input"); //data do input
      var count = countDownDate.value;
      var endDate = new Date(count).getTime();
      var now = new Date().getTime(); //data de 'hoje'

      var distance = endDate - now; //tempo que falta para a data de hoje até a data do input em ms;
      if (distance < 0 || count === "") {
        clearInterval(x);
        document.getElementById(
          "time-left-desktop"
        ).innerHTML = ` <p class='content-time-left-number'>00:</p>
                          <p class='content-time-left-number'>00:</p>
                          <p class='content-time-left-number'>00:</p>
                          <p class='content-time-left-number'>00</p>`;

        document.getElementById(
          "time-left-mobile"
        ).innerHTML = ` <p class='content-time-left-number'>00:</p>
                          <p class='content-time-left-number'>00:</p>
                          <p class='content-time-left-number'>00min:</p>
                          <p class='content-time-left-number'>00sec</p>`;
      } else {
        var oneDay = 60 * 60 * 24 * 1000; //60s * 60min * 24hs * 1000ms
        var oneHour = 60 * 60 * 1000; //60s*60min*1000ms
        var oneMinute = 1000 * 60; //1000ms * 60s
        var oneSecond = 1000; //1000ms

        var days = Math.floor(distance / oneDay);
        var hours = Math.floor(
          (distance % oneDay) / oneHour //o resto do dia em segundos / 1000ms*60s*60m = 1hr
        );
        var minutes = Math.floor((distance % oneHour) / oneMinute); // o resto
        var seconds = Math.floor((distance % oneMinute) / oneSecond);

        // Display the result in the element with id="demo"
        document.getElementById(
          "time-left-desktop"
        ).innerHTML = ` <p class='content-time-left-number'>${days}:</p>
                          <p class='content-time-left-number'>${hours}:</p>
                          <p class='content-time-left-number'>${minutes}:</p>
                          <p class='content-time-left-number'>${seconds}</p>`;

        document.getElementById(
          "time-left-mobile"
        ).innerHTML = ` <p class='content-time-left-number'>${days} d:</p>
                          <p class='content-time-left-number'>${hours} h:</p>
                          <p class='content-time-left-number'>${minutes}min:</p>
                          <p class='content-time-left-number'>${seconds}sec</p>`;
      }
    }, 1000);
  }
});
