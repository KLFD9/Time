function afficherHeure() {
  let date = new Date();
  let heure = date.getHours();
  let minute = date.getMinutes();

  heure = heure < 10 ? "0" + heure : heure;
  minute = minute < 10 ? "0" + minute : minute;

  document.getElementById("heure").textContent = heure;
  document.getElementById("minute").textContent = minute;

  setTimeout(afficherHeure, 1000);
}

document.documentElement.requestFullscreen();

afficherHeure();
