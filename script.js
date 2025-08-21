let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  let currentTime = new Date();

  hrs.innerText = String(currentTime.getHours()).padStart(2,'0');
  min.innerText = String(currentTime.getMinutes()).padStart(2,'0');
  sec.innerText = String(currentTime.getSeconds()).padStart(2,'0');

},1000);
