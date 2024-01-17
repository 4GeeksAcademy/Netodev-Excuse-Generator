/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function generateRandExcuse() {
    let who = ["Mi perro", "Mi abuela", "Su tortuga", "Mi pájaro"];
    let action = ["se comió", "meó", "aplastó", "rompió"];
    let what = ["mis deberes", "las llaves", "el coche", "mi moto"];
    let when = [
      "antes de las clases",
      "justo antes de venir",
      "cuando acabé",
      "cuando estaba comiendo"
    ];

    const randWho = who[Math.floor(Math.random() * who.length)];
    const randAction = action[Math.floor(Math.random() * action.length)];
    const randWhat = what[Math.floor(Math.random() * what.length)];
    const randWhen = when[Math.floor(Math.random() * when.length)];

    let excusaRandom = `${randWho} ${randAction} ${randWhat} ${randWhen}`;
    return excusaRandom;
  }

  document.querySelector("#excuse-button").addEventListener("click", () => {
    document.getElementById("randExcuse").innerHTML = generateRandExcuse();
  });
};
