// ==UserScript==
// @name ozelotjp-box/musasi.jp
// @version 1.1
// @author ozelotjp
// @homepageURL https://github.com/ozelotjp-box/musasi.jp
// @downloadURL https://github.com/ozelotjp-box/musasi.jp/raw/master/app.user.js
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
