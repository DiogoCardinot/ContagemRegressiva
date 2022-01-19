document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.querySelector("#start-button");

  startButton.addEventListener("click", calcDate);
  function calcDate() {
    let updateInterval = setInterval(function () {
      let inputEndDate = document.querySelector("#date-input"); //input
      let inputEndDateValue = inputEndDate.value; //valor do input
      let endDate = new Date(inputEndDateValue).getTime(); //tranforma o valor do input em uma data
      let now = new Date().getTime(); //data de 'hoje'

      let distance = endDate - now; //tempo que falta para a data de hoje até a data do input em ms;
      if (distance <= 0 || inputEndDateValue === "") {
        clearInterval(updateInterval);

        document.querySelector(
          "#time-left-desktop"
        ).innerHTML = ` <p class='content-time-left-number'>00:</p>
                          <p class='content-time-left-number'>00:</p>
                          <p class='content-time-left-number'>00:</p>
                          <p class='content-time-left-number'>00</p>`;

        document.querySelector(
          "#time-left-mobile"
        ).innerHTML = ` <p class='content-time-left-number'>00:</p>
                          <p class='content-time-left-number'>00:</p>
                          <p class='content-time-left-number'>00min:</p>
                          <p class='content-time-left-number'>00sec</p>`;
      } else {
        let oneDay = 60 * 60 * 24 * 1000; //60s * 60min * 24hs * 1000ms
        let oneHour = 60 * 60 * 1000; //60s*60min*1000ms
        let oneMinute = 1000 * 60; //1000ms * 60s
        let oneSecond = 1000; //1000ms

        let days = Math.floor(distance / oneDay);
        let hours = Math.floor(
          (distance % oneDay) / oneHour //o resto do dia em segundos / 1000ms*60s*60m = 1hr
        );
        let minutes = Math.floor((distance % oneHour) / oneMinute); // o resto
        let seconds = Math.floor((distance % oneMinute) / oneSecond);

        // Display the result in the element with id="demo"
        document.querySelector(
          "#time-left-desktop"
        ).innerHTML = ` <p class='content-time-left-number' id='remaining-days'>${days}:</p>
                          <p class='content-time-left-number' id='remaining-hours'>${hours}:</p>
                          <p class='content-time-left-number' id='remaining-minutes'>${minutes}:</p>
                          <p class='content-time-left-number' id='remaining-seconds'>${seconds}</p>`;

        document.querySelector(
          "#time-left-mobile"
        ).innerHTML = ` <p class='content-time-left-number' id='remaining-days'>${days} d:</p>
                          <p class='content-time-left-number' id='remaining-hours'>${hours} h:</p>
                          <p class='content-time-left-number' id='remaining-minutes'>${minutes}min:</p>
                          <p class='content-time-left-number' id='remaining-seconds'>${seconds}sec</p>`;

        inputEndDate.addEventListener("change", () => {
          clearInterval(updateInterval);
          alert("A");
        }); //caso o usuário mude o input ele terá que iniciar novamente a contagem
      }

      localStorage.setItem("input", inputEndDateValue);
      localStorage.getItem("input");
    }, 1000);
  }

  onload = function reloadInput() {
    var inputValue = localStorage.getItem("input");
    var countEndDate = document.querySelector("#date-input");

    countEndDate.value = inputValue;
    calcDate();
  };
});
