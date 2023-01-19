"use strict";

var playBtn = document.querySelector('.zsu__main-wheel-btn'),
  playBtnText = document.querySelector('.zsu__main-wheel-btn span'),
  wheel = document.querySelector('.zsu__main-wheel-reel'),
  tries = document.querySelector('.try-number'),
  overlay = document.querySelector('.zsu__overlay'),
  popupFirst = document.querySelector('.zsu__firstWin'),
  popupFirstBtn = document.querySelector('.zsu__firstWin-btn'),
  popupSecond = document.querySelector('.zsu__secondWin'),
  rules = document.querySelector('.zsu__rules'),
  footerRulesBtn = document.querySelector('.zsu__footer-rules'),
  overflow = document.querySelector('body'),
  popupClose = document.querySelector('.zsu__rules-close'),
  video = document.querySelector('.zsu__main-video'),
  wrapper = document.querySelector('.zsu'),
  ShipImg = document.querySelector('.zsu__ship-img'),
  totalTriesCounter = 2;
var triesCounter = 0;
footerRulesBtn.addEventListener('click', function () {
  overlay.classList.remove('opacity-overlay');
  rules.classList.remove('hide');
});
popupClose.addEventListener('click', function () {
  overlay.classList.add('opacity-overlay');
  rules.classList.add('hide');
  overflow.style.overflow = 'unset';
});
playBtn.addEventListener('click', function () {
  if (triesCounter === 0) {
    runFirstRotation();
  } else {
    runSecondRotation();
  }
});
function updTriesCounter() {
  var cnt = totalTriesCounter - triesCounter;
  if (cnt === 2) {
    tries.innerText = "2 спроби";
  } else if (cnt === 1) {
    tries.innerText = "1 спроба";
  } else {
    tries.innerText = "0 спроб";
  }
}
function runFirstRotation() {
  wheel.classList.add('reel-rotation-first');
  playBtn.classList.remove('pulse-btn');
  playBtnText.classList.add('hide');
  playBtn.style.transform = 'scale(0.9)';
  playBtn.style.cursor = 'default';
  wrapper.style.pointerEvents = 'none';
  setTimeout(function () {
    doAfterFirstRotation();
  }, 6000);
  triesCounter++;
  updTriesCounter();
}
function doAfterFirstRotation() {
  wheel.style.transform = 'rotate(1037deg)';
  wheel.classList.remove('reel-rotation-first');
  displayPopup(popupFirst);
  wrapper.style.pointerEvents = 'auto';
  overflow.style.overflow = 'hidden';
  setTimeout(function () {
    playBtn.classList.add('pulse-btn');
    playBtnText.classList.remove('hide');
    playBtn.style.transform = 'scale(1)';
    playBtn.style.cursor = 'pointer';
  }, 1200);
}
function runSecondRotation() {
  wheel.classList.add('reel-rotation-second');
  playBtn.classList.remove('pulse-btn');
  playBtnText.classList.add('hide');
  playBtn.style.transform = 'scale(0.9)';
  playBtn.style.cursor = 'default';
  overflow.style.overflow = 'hidden';
  wrapper.style.pointerEvents = 'none';
  setTimeout(function () {
    doAfterSecondRotation();
  }, 6000);
  triesCounter++;
  updTriesCounter();
}
function doAfterSecondRotation() {
  displayPopup(popupSecond);
  wrapper.style.pointerEvents = 'auto';
  ShipImg.style.background = "url(\"img/ship_3.png\") no-repeat 0 0/contain";
  ShipImg.style.animation = "none";
}
popupFirstBtn.addEventListener('click', function () {
  overlay.classList.add('opacity-overlay');
  popupFirst.classList.add('hide');
  overflow.style.overflow = 'unset';
  ShipImg.style.background = "url(\"img/ship_2.png\") no-repeat 0 0/contain";
  ShipImg.style.animation = "none";
});
function displayPopup(popup) {
  overlay.classList.remove('opacity-overlay');
  popup.classList.remove('hide');
}
var bgv = document.querySelector(".zsu__main-video-bg");
if (window.innerWidth > 1000) {
  bgv.poster = bgv.dataset.poster;
  var sources = bgv.getElementsByTagName("source");
  for (var i = 0; i < sources.length; ++i) {
    sources[i].src = sources[i].dataset.src;
  }
}
bgv.load();
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOlsicGxheUJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBsYXlCdG5UZXh0Iiwid2hlZWwiLCJ0cmllcyIsIm92ZXJsYXkiLCJwb3B1cEZpcnN0IiwicG9wdXBGaXJzdEJ0biIsInBvcHVwU2Vjb25kIiwicnVsZXMiLCJmb290ZXJSdWxlc0J0biIsIm92ZXJmbG93IiwicG9wdXBDbG9zZSIsInZpZGVvIiwid3JhcHBlciIsIlNoaXBJbWciLCJ0b3RhbFRyaWVzQ291bnRlciIsInRyaWVzQ291bnRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzdHlsZSIsInJ1bkZpcnN0Um90YXRpb24iLCJydW5TZWNvbmRSb3RhdGlvbiIsInVwZFRyaWVzQ291bnRlciIsImNudCIsImlubmVyVGV4dCIsInRyYW5zZm9ybSIsImN1cnNvciIsInBvaW50ZXJFdmVudHMiLCJzZXRUaW1lb3V0IiwiZG9BZnRlckZpcnN0Um90YXRpb24iLCJkaXNwbGF5UG9wdXAiLCJkb0FmdGVyU2Vjb25kUm90YXRpb24iLCJiYWNrZ3JvdW5kIiwiYW5pbWF0aW9uIiwicG9wdXAiLCJiZ3YiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwicG9zdGVyIiwiZGF0YXNldCIsInNvdXJjZXMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImkiLCJsZW5ndGgiLCJzcmMiLCJsb2FkIl0sIm1hcHBpbmdzIjoiOztBQUNBLElBQU1BLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCLENBQUM7RUFDeERDLFdBQVcsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsMkJBQTJCLENBQUM7RUFDakVFLEtBQUssR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsdUJBQXVCLENBQUM7RUFDdkRHLEtBQUssR0FBR0osUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0VBQzdDSSxPQUFP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SUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixPQUFPLENBQUNHLE1BQU0sRUFBRSxFQUFFRCxDQUFDLEVBQUU7SUFDckNGLE9BQU8sQ0FBQ0UsQ0FBQyxDQUFDLENBQUNFLEdBQUcsR0FBR0osT0FBTyxDQUFDRSxDQUFDLENBQUMsQ0FBQ0gsT0FBTyxDQUFDSyxHQUFHO0VBQzNDO0FBQ0o7QUFDQVQsR0FBRyxDQUFDVSxJQUFJLEVBQUU7QUMxSFYiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy56c3VfX21haW4td2hlZWwtYnRuJyksXG4gICAgICBwbGF5QnRuVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy56c3VfX21haW4td2hlZWwtYnRuIHNwYW4nKSxcbiAgICAgIHdoZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnpzdV9fbWFpbi13aGVlbC1yZWVsJyksXG4gICAgICB0cmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cnktbnVtYmVyJyksXG4gICAgICBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnpzdV9fb3ZlcmxheScpLFxuICAgICAgcG9wdXBGaXJzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy56c3VfX2ZpcnN0V2luJyksXG4gICAgICBwb3B1cEZpcnN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnpzdV9fZmlyc3RXaW4tYnRuJyksXG4gICAgICBwb3B1cFNlY29uZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy56c3VfX3NlY29uZFdpbicpLFxuICAgICAgcnVsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuenN1X19ydWxlcycpLFxuICAgICAgZm9vdGVyUnVsZXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuenN1X19mb290ZXItcnVsZXMnKSxcbiAgICAgIG92ZXJmbG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLFxuICAgICAgcG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy56c3VfX3J1bGVzLWNsb3NlJyksXG4gICAgICB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy56c3VfX21haW4tdmlkZW8nKSxcbiAgICAgIHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuenN1JyksXG4gICAgICBTaGlwSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnpzdV9fc2hpcC1pbWcnKSxcbiAgICAgIHRvdGFsVHJpZXNDb3VudGVyID0gMlxuXG5sZXQgdHJpZXNDb3VudGVyID0gMFxuXG5mb290ZXJSdWxlc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ29wYWNpdHktb3ZlcmxheScpXG4gICAgcnVsZXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG59KVxuXG5wb3B1cENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3BhY2l0eS1vdmVybGF5JylcbiAgICBydWxlcy5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICBvdmVyZmxvdy5zdHlsZS5vdmVyZmxvdyA9ICd1bnNldCdcbn0pXG5cbnBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHRyaWVzQ291bnRlciA9PT0gMCkge1xuICAgICAgICBydW5GaXJzdFJvdGF0aW9uKClcbiAgICB9IGVsc2Uge1xuICAgICAgICBydW5TZWNvbmRSb3RhdGlvbigpXG4gICAgfVxufSlcblxuZnVuY3Rpb24gdXBkVHJpZXNDb3VudGVyKCkge1xuICAgIGNvbnN0IGNudCA9IHRvdGFsVHJpZXNDb3VudGVyIC0gdHJpZXNDb3VudGVyXG4gICAgaWYgKGNudCA9PT0gMikge1xuICAgICAgICB0cmllcy5pbm5lclRleHQgPSBcIjIg0YHQv9GA0L7QsdC4XCJcbiAgICB9IGVsc2UgaWYgKGNudCA9PT0gMSkge1xuICAgICAgICB0cmllcy5pbm5lclRleHQgPSBcIjEg0YHQv9GA0L7QsdCwXCJcbiAgICB9IGVsc2Uge1xuICAgICAgICB0cmllcy5pbm5lclRleHQgPSBcIjAg0YHQv9GA0L7QsVwiXG4gICAgfVxufVxuXG5mdW5jdGlvbiBydW5GaXJzdFJvdGF0aW9uKCkge1xuICAgIHdoZWVsLmNsYXNzTGlzdC5hZGQoJ3JlZWwtcm90YXRpb24tZmlyc3QnKVxuICAgIHBsYXlCdG4uY2xhc3NMaXN0LnJlbW92ZSgncHVsc2UtYnRuJylcbiAgICBwbGF5QnRuVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICBwbGF5QnRuLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwLjkpJ1xuICAgIHBsYXlCdG4uc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnXG4gICAgd3JhcHBlci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvQWZ0ZXJGaXJzdFJvdGF0aW9uKClcbiAgICB9LCA2MDAwKVxuICAgIHRyaWVzQ291bnRlcisrXG4gICAgdXBkVHJpZXNDb3VudGVyKClcbn1cblxuZnVuY3Rpb24gZG9BZnRlckZpcnN0Um90YXRpb24oKSB7XG4gICAgd2hlZWwuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgxMDM3ZGVnKSdcbiAgICB3aGVlbC5jbGFzc0xpc3QucmVtb3ZlKCdyZWVsLXJvdGF0aW9uLWZpcnN0JylcbiAgICBkaXNwbGF5UG9wdXAocG9wdXBGaXJzdClcbiAgICB3cmFwcGVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0bydcbiAgICBvdmVyZmxvdy5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHBsYXlCdG4uY2xhc3NMaXN0LmFkZCgncHVsc2UtYnRuJylcbiAgICAgICAgcGxheUJ0blRleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpXG4gICAgICAgIHBsYXlCdG4uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpJ1xuICAgICAgICBwbGF5QnRuLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ1xuICAgIH0sIDEyMDApXG59XG5cbmZ1bmN0aW9uIHJ1blNlY29uZFJvdGF0aW9uKCkge1xuICAgIHdoZWVsLmNsYXNzTGlzdC5hZGQoJ3JlZWwtcm90YXRpb24tc2Vjb25kJylcbiAgICBwbGF5QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3B1bHNlLWJ0bicpXG4gICAgcGxheUJ0blRleHQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXG4gICAgcGxheUJ0bi5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMC45KSdcbiAgICBwbGF5QnRuLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0J1xuICAgIG92ZXJmbG93LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICB3cmFwcGVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSdcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9BZnRlclNlY29uZFJvdGF0aW9uKClcbiAgICB9LCA2MDAwKVxuICAgIHRyaWVzQ291bnRlcisrXG4gICAgdXBkVHJpZXNDb3VudGVyKClcbn1cblxuZnVuY3Rpb24gZG9BZnRlclNlY29uZFJvdGF0aW9uKCkge1xuICAgIGRpc3BsYXlQb3B1cChwb3B1cFNlY29uZClcbiAgICB3cmFwcGVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0bydcbiAgICBTaGlwSW1nLnN0eWxlLmJhY2tncm91bmQgPSBcInVybChcXFwiaW1nL3NoaXBfMy5wbmdcXFwiKSBuby1yZXBlYXQgMCAwL2NvbnRhaW5cIlxuICAgIFNoaXBJbWcuc3R5bGUuYW5pbWF0aW9uID0gXCJub25lXCJcbn1cblxucG9wdXBGaXJzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ29wYWNpdHktb3ZlcmxheScpXG4gICAgcG9wdXBGaXJzdC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcbiAgICBvdmVyZmxvdy5zdHlsZS5vdmVyZmxvdyA9ICd1bnNldCdcbiAgICBTaGlwSW1nLnN0eWxlLmJhY2tncm91bmQgPSBcInVybChcXFwiaW1nL3NoaXBfMi5wbmdcXFwiKSBuby1yZXBlYXQgMCAwL2NvbnRhaW5cIlxuICAgIFNoaXBJbWcuc3R5bGUuYW5pbWF0aW9uID0gXCJub25lXCJcbn0pXG5cbmZ1bmN0aW9uIGRpc3BsYXlQb3B1cChwb3B1cCkge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eS1vdmVybGF5JylcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbn1cblxuY29uc3QgYmd2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi56c3VfX21haW4tdmlkZW8tYmdcIik7XG5pZiAod2luZG93LmlubmVyV2lkdGggPiAxMDAwKSB7XG4gICAgYmd2LnBvc3RlciA9IGJndi5kYXRhc2V0LnBvc3RlcjtcbiAgICBjb25zdCBzb3VyY2VzID0gYmd2LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic291cmNlXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3VyY2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHNvdXJjZXNbaV0uc3JjID0gc291cmNlc1tpXS5kYXRhc2V0LnNyYztcbiAgICB9XG59XG5iZ3YubG9hZCgpO1xuIiwiIl19
