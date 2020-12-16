let countDownDate = new Date("December 25, 2020").getTime();

let x = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance/ (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24))/ (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60))/ (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60))/ 1000);
  document.getElementById("timer").innerHTML = days + " days " + hours + " hours " + minutes + " minutes and " + seconds + " seconds ";
  if (distance < 0) {
    clearInterval(x)
    document.getElementById("timer").innerHTML = "Expired"
  }
}, 1000)