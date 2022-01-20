document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.querySelector("#start-button");

  startButton.addEventListener("click", calcDate);

  function calcDate() {
    let updateInterval = setInterval(function () {
      let inputEndDate = document.querySelector("#date-input"); //input
      let inputEndDateValue = inputEndDate.value; //valor do input
      let endDate = new Date(inputEndDateValue).getTime(); //tranforma o valor do input em uma data
      let now = new Date().getTime(); //data de 'hoje'
      let nowParts = new Date();

      let secondsRemaining = endDate - now; //tempo que falta para a data de hoje até a data do input em ms;
      //se o dia e horário for menor ou igual ao dia de hoje e horário de agora
      if (secondsRemaining <= 0) {
        clearInterval(updateInterval);
        document.querySelector("#time-left-desktop").innerHTML = ` 
        <div  class='content-time-left-desktop-invalid-day'>

          <div class='content-time-left-desktop-invalid-day-time'>
            <p class='content-time-left-number'>00:</p>
            <p class='content-time-left-number'>00:</p>
            <p class='content-time-left-number'>00:</p>
            <p class='content-time-left-number'>00</p>
          </div>
          
            <p class='content-wrapper-invalid-day-message'>Insira uma data ou horário maior que
                  ${nowParts.getDate()}/
                  ${nowParts.getMonth() + 1}/
                  ${nowParts.getFullYear()}, 
                  ${nowParts.getHours()}h e 
                  ${nowParts.getMinutes()}min
            </p>
        </div>
                    
                  `;

        document.querySelector(
          "#time-left-mobile"
        ).innerHTML = ` <p class='content-time-left-number'>00d:</p>
                          <p class='content-time-left-number'>00h:</p>
                          <p class='content-time-left-number'>00min:</p>
                          <p class='content-time-left-number'>00sec</p>
                          <p class='content-wrapper-invalid-day-message'>
                            Insira uma data ou horário maior que
                              ${nowParts.getDate()}/
                              ${nowParts.getMonth() + 1}/
                              ${nowParts.getFullYear()}, 
                              ${nowParts.getHours()}h 
                              e 
                              ${nowParts.getMinutes()}min</p>`;
      } else if (inputEndDateValue == "") {
        clearInterval(updateInterval);

        document.querySelector("#time-left-desktop").innerHTML = ` 
                      <p class='content-time-left-number'>00:</p>
                      <p class='content-time-left-number'>00:</p>
                      <p class='content-time-left-number'>00:</p>
                      <p class='content-time-left-number'>00</p>
                    `;

        document.querySelector(
          "#time-left-mobile"
        ).innerHTML = ` <p class='content-time-left-number'>00d:</p>
                          <p class='content-time-left-number'>00h:</p>
                          <p class='content-time-left-number'>00min:</p>
                          <p class='content-time-left-number'>00sec</p>`;
      } else {
        inputEndDate.addEventListener("change", () => {
          clearInterval(updateInterval);
        }); //caso o usuário mude o input ele terá que iniciar novamente a contagem

        let oneDay = 60 * 60 * 24 * 1000; //60s * 60min * 24hs * 1000ms
        let oneHour = 60 * 60 * 1000; //60s*60min*1000ms
        let oneMinute = 1000 * 60; //1000ms * 60s
        let oneSecond = 1000; //1000ms

        let days = Math.floor(secondsRemaining / oneDay); //pega apenas o valor inteiro da divisão
        let hours = Math.floor(
          (secondsRemaining % oneDay) / oneHour //o resto do dia em segundos / 1000ms*60s*60m = 1hr
        );
        let minutes = Math.floor((secondsRemaining % oneHour) / oneMinute); // o resto do tempo restante pela hora, convertido em minutos
        let seconds = Math.floor((secondsRemaining % oneMinute) / oneSecond); // o resto do tempo restante por um minuto, convertido em segundos

        // Adiciona os valores na tela
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
      }
      //armazena o valor do input no localstorage
      localStorage.setItem("input", inputEndDateValue);
      localStorage.getItem("input");
    }, 1000);
  }
  //quando recarregar a página ele pega o valor do input do local storage e coloca no input novamente, após isso chama a fução que calcula o tempo restante
  onload = function reloadInput() {
    var inputValue = localStorage.getItem("input");
    var countEndDate = document.querySelector("#date-input");

    countEndDate.value = inputValue;
    calcDate();
  };
});
