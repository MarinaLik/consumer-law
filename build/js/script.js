'use strict';

(function () {
  var popupHeader = document.querySelector("#popup-header");
  var btnHeader = document.querySelector("#call-btn-header");
  var btnHeaderClose = document.querySelector("#popup-header-close");
  var popupFooter = document.querySelector("#popup-footer");
  var btnFooter = document.querySelector("#call-btn-footer");
  var btnFooterClose = document.querySelector("#popup-footer-close");
  var popupCenter = document.querySelector("#popup-center");
  var btnCenter = document.querySelector("#call-btn-center");
  var btnCenterClose = document.querySelector("#popup-center-close");

  btnHeader.addEventListener("click", function() {
      popupHeader.classList.add("show");
  });

  btnHeaderClose.addEventListener("click", function() {
      popupHeader.classList.remove("show");
  });

  btnFooter.addEventListener("click", function() {
      popupFooter.classList.add("show");
  });

  btnFooterClose.addEventListener("click", function() {
      popupFooter.classList.remove("show");
  });

  btnCenter.addEventListener("click", function() {
      popupCenter.classList.add("show");
  });

  btnCenterClose.addEventListener("click", function() {
      popupCenter.classList.remove("show");
  });

  var feedback = document.querySelector(".feedback");
  var btnFdb = document.querySelector(".preview__btn");
  var btnFdbClose = document.querySelector(".feedback__close");
  var overlayFdb = document.querySelector(".overlay-feedback");

  btnFdb.addEventListener("click", function() {
      feedback.classList.add("show");
      overlayFdb.classList.add("show");
  });

  btnFdbClose.addEventListener("click", function() {
      feedback.classList.remove("show");
      overlayFdb.classList.remove("show");
  });

  overlayFdb.addEventListener("click", function () {
    if (overlayFdb.classList.contains("show")) {
    modal.classList.remove("show");
    overlayFdb.classList.remove("show");
    }
  });

  var modal = document.querySelector(".modal");
  var overlay = document.querySelector(".overlay");
  var linksConfed = document.querySelectorAll(".link-confed");
  var btnModalClose = document.querySelector(".modal__close");

  for (var i = 0; i < linksConfed.length; i++) {
    linksConfed[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("show");
    overlay.classList.add("show");
    });
  }

  overlay.addEventListener("click", function () {
    if (overlay.classList.contains("show")) {
    modal.classList.remove("show");
    overlay.classList.remove("show");
    }
  });

  btnModalClose.addEventListener("click", function() {
      modal.classList.remove("show");
      overlay.classList.remove("show");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27 && modal.classList.contains("show")) {
      modal.classList.remove("show");
      overlay.classList.remove("show");
    }
    else if (evt.keyCode === 27 && feedback.classList.contains("show")) {
      feedback.classList.remove("show");
      overlayFdb.classList.remove("show");
    }
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27 && popupHeader.classList.contains("show")) {
      popupHeader.classList.remove("show");
    }
    else if (evt.keyCode === 27 && popupFooter.classList.contains("show")) {
      popupFooter.classList.remove("show");
    }
    else if (evt.keyCode === 27 && popupCenter.classList.contains("show")) {
      popupCenter.classList.remove("show");
    }
  });
})();
