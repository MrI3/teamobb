function refreshTime() {
    const daysDisplay = document.getElementById("days");
    const hoursDislpay = document.getElementById("hours");
    const minutesDisplay = document.getElementById("minutes")
    const secondsDisplay = document.getElementById("seconds");
    const dateDisplay = document.getElementById("date");

    var date1 = new Date("08/20/2022");
    var date2 = new Date();


    var difference_in_time = date2.getTime() - date1.getTime();

    //var difference_in_days = difference_in_time / (1000 * 3600 * 24);
    var difference_in_hours = Math.trunc(difference_in_time / (1000 * 3600));
    var difference_in_minutes = Math.trunc(difference_in_time / (1000 * 60));
    var difference_in_days = Math.trunc(difference_in_hours / 24);
    var difference_in_seconds = difference_in_time / 1000;

    daysDisplay.textContent = difference_in_days.toFixed(0);
    hoursDislpay.textContent = difference_in_hours.toFixed(0);
    minutesDisplay.textContent = difference_in_minutes.toFixed(0);
    secondsDisplay.textContent = difference_in_seconds.toFixed(0);
    dateDisplay.textContent = date1;
  }
    setInterval(refreshTime, 1000);