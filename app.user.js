// ==UserScript==
// @name ozelotjp/musasi
// @version 1.0
// @author ozelotjp
// @homepageURL
// @downloadURL
// @match https://www.musasi.jp/question/*.html
// ==/UserScript==

document.onkeydown = (function (event) {
  switch (event.key) {
    case "1":
      document.getElementsByClassName("btn_true")[0].click();
      break;
    case "2":
      document.getElementsByClassName("btn_false")[0].click();
      break;
    case "3":
      document.getElementById("btn_unsure").click();
      break;
    case "Enter":
      document.getElementById("btn_nextQuestion").click();
      break;
  }
});
