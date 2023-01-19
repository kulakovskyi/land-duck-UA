"use strict";

var playBtn = document.querySelector('.bonus__main-wheel-btn'),
  main = document.querySelector('.bonus__main'),
  wheel = document.querySelector('.bonus__main-wheel-reel'),
  mainWheel = document.querySelector('.bonus__main-wheel'),
  overlay = document.querySelector('.bonus__overlay'),
  popupFirst = document.querySelector('.bonus__firstWin'),
  popupFirstBtn = document.querySelector('.bonus__firstWin-btn'),
  popupSecond = document.querySelector('.bonus__secondWin'),
  overflow = document.querySelector('body'),
  wrapper = document.querySelector('.bonus'),
  rotateText = document.querySelector('.bonus__main-txt-center');
var triesCounter = 0;
var textAfterRotate = 'У тебе <span>1</span> спроби';
playBtn.addEventListener('click', function () {
  if (triesCounter === 0) {
    runFirstRotation();
    rotateText.innerHTML = textAfterRotate;
  } else {
    runSecondRotation();
  }
});
function runFirstRotation() {
  wheel.classList.add('reel-rotation-first');
  playBtn.classList.remove('pulse-btn');
  playBtn.style.cursor = 'default';
  wrapper.style.pointerEvents = 'none';
  setTimeout(function () {
    mainWheel.classList.add('_win');
  }, 6000);
  setTimeout(function () {
    doAfterFirstRotation();
  }, 8000);
  triesCounter++;
}
function doAfterFirstRotation() {
  wheel.style.transform = 'rotate(992deg)';
  wheel.classList.remove('reel-rotation-first');
  displayPopup(popupFirst);
  wrapper.style.pointerEvents = 'auto';
  overflow.style.overflow = 'hidden';
  setTimeout(function () {
    playBtn.classList.add('pulse-btn');
    playBtn.style.cursor = 'pointer';
  }, 1200);
}
function runSecondRotation() {
  wheel.classList.add('reel-rotation-second');
  playBtn.classList.remove('pulse-btn');
  playBtn.style.cursor = 'default';
  overflow.style.overflow = 'hidden';
  wrapper.style.pointerEvents = 'none';
  setTimeout(function () {
    mainWheel.classList.add('_win');
  }, 6000);
  setTimeout(function () {
    doAfterSecondRotation();
  }, 8000);
  triesCounter++;
}
function doAfterSecondRotation() {
  displayPopup(popupSecond);
  wrapper.style.pointerEvents = 'auto';
}
popupFirstBtn.addEventListener('click', function () {
  overlay.classList.add('opacity-overlay');
  popupFirst.classList.add('hide');
  overflow.style.overflow = 'unset';
  mainWheel.classList.remove('_win');
});
function displayPopup(popup) {
  overlay.classList.remove('opacity-overlay');
  popup.classList.remove('hide');
}
(function () {
  var url = new URL(window.location.href);
  var params = ['l', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'param1', 'param2'];
  var linkParams = ['affid', 'cpaid']; // ищем в url redirectUrl в url:

  if (url.searchParams.has('redirectUrl')) {
    var redirectUrl = new URL(url.searchParams.get('redirectUrl'));
    if (redirectUrl.href.match(/\//g).length === 4 && redirectUrl.searchParams.get('l')) {
      //если ссылка в ссылка redirectUrl корректная
      localStorage.setItem('redirectUrl', redirectUrl.href); // указываем точкой входа домен с протоколом из redirectUrl
    }
  } /////////

  params.forEach(function (param) {
    if (url.searchParams.has(param)) localStorage.setItem(param, url.searchParams.get(param));
  });
  linkParams.forEach(function (linkParam) {
    if (url.searchParams.has(linkParam)) localStorage.setItem(linkParam, url.searchParams.get(linkParam));
  });
  window.addEventListener('click', function (e) {
    var link,
      parent = e.target.closest('a');
    if (parent.getAttribute('href') !== 'https://tds.favbet.partners') {
      return;
    }
    parent && (e.preventDefault(), localStorage.getItem("redirectUrl") ? link = new URL(localStorage.getItem("redirectUrl")) : (link = new URL(parent.href), affid = localStorage.getItem('affid'), cpaid = localStorage.getItem('cpaid'), affid && cpaid && (link.pathname = '/' + affid + '/' + cpaid)), params.forEach(function (param) {
      url.searchParams.has(param) && link.searchParams.set(param, localStorage.getItem(param));
    }), document.location.href = link);
  });
})();
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOlsicGxheUJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1haW4iLCJ3aGVlbCIsIm1haW5XaGVlbCIsIm92ZXJsYXkiLCJwb3B1cEZpcnN0IiwicG9wdXBGaXJzdEJ0biIsInBvcHVwU2Vjb25kIiwib3ZlcmZsb3ciLCJ3cmFwcGVyIiwicm90YXRlVGV4dCIsInRyaWVzQ291bnRlciIsInRleHRBZnRlclJvdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJydW5GaXJzdFJvdGF0aW9uIiwiaW5uZXJIVE1MIiwicnVuU2Vjb25kUm90YXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzdHlsZSIsImN1cnNvciIsInBvaW50ZXJFdmVudHMiLCJzZXRUaW1lb3V0IiwiZG9BZnRlckZpcnN0Um90YXRpb24iLCJ0cmFuc2Zvcm0iLCJkaXNwbGF5UG9wdXAiLCJkb0FmdGVyU2Vjb25kUm90YXRpb24iLCJwb3B1cCIsInVybCIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInBhcmFtcyIsImxpbmtQYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJoYXMiLCJyZWRpcmVjdFVybCIsImdldCIsIm1hdGNoIiwibGVuZ3RoIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImZvckVhY2giLCJwYXJhbSIsImxpbmtQYXJhbSIsImUiLCJsaW5rIiwicGFyZW50IiwidGFyZ2V0IiwiY2xvc2VzdCIsImdldEF0dHJpYnV0ZSIsInByZXZlbnREZWZhdWx0IiwiZ2V0SXRlbSIsImFmZmlkIiwiY3BhaWQiLCJwYXRobmFtZSIsInNldCJdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFNQSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHdCQUF3QixDQUFDO0VBQzFEQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGNBQWMsQ0FBQztFQUM3Q0UsS0FBSyxHQUFHSCxRQUFRLENBQUND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QUssNkJBQTZCLEVBQUU7TUFDL0Q7SUFDSjtJQUVBSCxNQUFNLEtBQUtGLENBQUMsQ0FBQ00sY0FBYyxFQUFFLEVBQ3pCWCxZQUFZLENBQUNZLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FDN0JOLElBQUksR0FBRyxJQUFJbEIsR0FBRyxDQUFDWSxZQUFZLENBQUNZLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUNsRE4sSUFBSSxHQUFHLElBQUlsQixHQUFHLENBQUNtQixNQUFNLENBQUNoQixJQUFJLENBQUMsRUFDMUJzQixLQUFLLEdBQUdiLFlBQVksQ0FBQ1ksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUNyQ0UsS0FBSyxHQUFHZCxZQUFZLENBQUNZLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFDekNDLEtBQUssSUFBSUMsS0FBSyxLQUFLUixJQUFJLENBQUNTLFFBQVEsR0FBRyxHQUFHLEdBQUdGLEtBQUssR0FBRyxHQUFHLEdBQUdDLEtBQUssQ0FBQyxDQUFDLEVBQUV0QixNQUFNLENBQUNVLE9BQU8sQ0FBQyxVQUFVQyxLQUFLLEVBQ3RHO01BQ0loQixHQUFHLENBQUNPLFlBQVksQ0FBQ0MsR0FBRyxDQUFDUSxLQUFLLENBQUMsSUFBSUcsSUFBSSxDQUFDWixZQUFZLENBQUNzQixHQUFHLENBQUNiLEtBQUssRUFBRUgsWUFBWSxDQUFDWSxPQUFPLENBQUNULEtBQUssQ0FBQyxDQUFDO0lBQzVGLENBQUMsQ0FBQyxFQUFFOUMsUUFBUSxDQUFDaUMsUUFBUSxDQUFDQyxJQUFJLEdBQUdlLElBQUksQ0FBQztFQUN0QyxDQUFDLENBQUM7QUFDTixDQUFDLEdBQUc7QUNoSUoiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fbWFpbi13aGVlbC1idG4nKSxcbiAgICAgIG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9udXNfX21haW4nKSxcbiAgICAgIHdoZWVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19tYWluLXdoZWVsLXJlZWwnKSxcbiAgICAgIG1haW5XaGVlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fbWFpbi13aGVlbCcpLFxuICAgICAgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fb3ZlcmxheScpLFxuICAgICAgcG9wdXBGaXJzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib251c19fZmlyc3RXaW4nKSxcbiAgICAgIHBvcHVwRmlyc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9udXNfX2ZpcnN0V2luLWJ0bicpLFxuICAgICAgcG9wdXBTZWNvbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9udXNfX3NlY29uZFdpbicpLFxuICAgICAgb3ZlcmZsb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JyksXG4gICAgICB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzJyksXG4gICAgICByb3RhdGVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvbnVzX19tYWluLXR4dC1jZW50ZXInKVxuXG5cblxubGV0IHRyaWVzQ291bnRlciA9IDBcbmxldCB0ZXh0QWZ0ZXJSb3RhdGUgPSAn0KMg0YLQtdCx0LUgPHNwYW4+MTwvc3Bhbj4g0YHQv9GA0L7QsdC4JztcblxucGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAodHJpZXNDb3VudGVyID09PSAwKSB7XG4gICAgICAgIHJ1bkZpcnN0Um90YXRpb24oKVxuICAgICAgICByb3RhdGVUZXh0LmlubmVySFRNTCA9IHRleHRBZnRlclJvdGF0ZTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJ1blNlY29uZFJvdGF0aW9uKClcbiAgICB9XG59KVxuXG5mdW5jdGlvbiBydW5GaXJzdFJvdGF0aW9uKCkge1xuICAgIHdoZWVsLmNsYXNzTGlzdC5hZGQoJ3JlZWwtcm90YXRpb24tZmlyc3QnKVxuICAgIHBsYXlCdG4uY2xhc3NMaXN0LnJlbW92ZSgncHVsc2UtYnRuJylcbiAgICBwbGF5QnRuLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0J1xuICAgIHdyYXBwZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJ1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBtYWluV2hlZWwuY2xhc3NMaXN0LmFkZCgnX3dpbicpXG4gICAgfSwgNjAwMClcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9BZnRlckZpcnN0Um90YXRpb24oKVxuICAgIH0sIDgwMDApXG4gICAgdHJpZXNDb3VudGVyKytcbn1cblxuZnVuY3Rpb24gZG9BZnRlckZpcnN0Um90YXRpb24oKSB7XG4gICAgd2hlZWwuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSg5OTJkZWcpJ1xuICAgIHdoZWVsLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZWwtcm90YXRpb24tZmlyc3QnKVxuICAgIGRpc3BsYXlQb3B1cChwb3B1cEZpcnN0KVxuICAgIHdyYXBwZXIuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJ1xuICAgIG92ZXJmbG93LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcGxheUJ0bi5jbGFzc0xpc3QuYWRkKCdwdWxzZS1idG4nKVxuICAgICAgICBwbGF5QnRuLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ1xuICAgIH0sIDEyMDApXG59XG5cbmZ1bmN0aW9uIHJ1blNlY29uZFJvdGF0aW9uKCkge1xuICAgIHdoZWVsLmNsYXNzTGlzdC5hZGQoJ3JlZWwtcm90YXRpb24tc2Vjb25kJylcbiAgICBwbGF5QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3B1bHNlLWJ0bicpXG4gICAgcGxheUJ0bi5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCdcbiAgICBvdmVyZmxvdy5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgd3JhcHBlci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1haW5XaGVlbC5jbGFzc0xpc3QuYWRkKCdfd2luJylcbiAgICB9LCA2MDAwKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb0FmdGVyU2Vjb25kUm90YXRpb24oKVxuICAgIH0sIDgwMDApXG4gICAgdHJpZXNDb3VudGVyKytcbn1cblxuZnVuY3Rpb24gZG9BZnRlclNlY29uZFJvdGF0aW9uKCkge1xuICAgIGRpc3BsYXlQb3B1cChwb3B1cFNlY29uZClcbiAgICB3cmFwcGVyLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0bydcbn1cblxuXG5wb3B1cEZpcnN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3BhY2l0eS1vdmVybGF5JylcbiAgICBwb3B1cEZpcnN0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxuICAgIG92ZXJmbG93LnN0eWxlLm92ZXJmbG93ID0gJ3Vuc2V0J1xuICAgIG1haW5XaGVlbC5jbGFzc0xpc3QucmVtb3ZlKCdfd2luJylcbn0pXG5cbmZ1bmN0aW9uIGRpc3BsYXlQb3B1cChwb3B1cCkge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eS1vdmVybGF5JylcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcbn1cblxuXG4oZnVuY3Rpb24gKCkge1xuICAgIHZhciB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICB2YXIgcGFyYW1zID0gWydsJywgJ3V0bV9zb3VyY2UnLCAndXRtX21lZGl1bScsICd1dG1fY2FtcGFpZ24nLCAndXRtX3Rlcm0nLCAndXRtX2NvbnRlbnQnLCAncGFyYW0xJywgJ3BhcmFtMiddO1xuICAgIHZhciBsaW5rUGFyYW1zID0gWydhZmZpZCcsICdjcGFpZCddOyAvLyDQuNGJ0LXQvCDQsiB1cmwgcmVkaXJlY3RVcmwg0LIgdXJsOlxuXG4gICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuaGFzKCdyZWRpcmVjdFVybCcpKSB7XG4gICAgICAgIHZhciByZWRpcmVjdFVybCA9IG5ldyBVUkwodXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3JlZGlyZWN0VXJsJykpO1xuXG4gICAgICAgIGlmIChyZWRpcmVjdFVybC5ocmVmLm1hdGNoKC9cXC8vZykubGVuZ3RoID09PSA0ICYmIHJlZGlyZWN0VXJsLnNlYXJjaFBhcmFtcy5nZXQoJ2wnKSkge1xuICAgICAgICAgICAgLy/QtdGB0LvQuCDRgdGB0YvQu9C60LAg0LIg0YHRgdGL0LvQutCwIHJlZGlyZWN0VXJsINC60L7RgNGA0LXQutGC0L3QsNGPXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncmVkaXJlY3RVcmwnLCByZWRpcmVjdFVybC5ocmVmKTsgLy8g0YPQutCw0LfRi9Cy0LDQtdC8INGC0L7Rh9C60L7QuSDQstGF0L7QtNCwINC00L7QvNC10L0g0YEg0L/RgNC+0YLQvtC60L7Qu9C+0Lwg0LjQtyByZWRpcmVjdFVybFxuICAgICAgICB9XG4gICAgfSAvLy8vLy8vLy9cblxuXG4gICAgcGFyYW1zLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcyhwYXJhbSkpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHBhcmFtLCB1cmwuc2VhcmNoUGFyYW1zLmdldChwYXJhbSkpO1xuICAgIH0pO1xuICAgIGxpbmtQYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAobGlua1BhcmFtKSB7XG4gICAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmhhcyhsaW5rUGFyYW0pKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsaW5rUGFyYW0sIHVybC5zZWFyY2hQYXJhbXMuZ2V0KGxpbmtQYXJhbSkpO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBsaW5rLFxuICAgICAgICAgICAgcGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnYScpO1xuXG4gICAgICAgIGlmIChwYXJlbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgIT09ICdodHRwczovL3Rkcy5mYXZiZXQucGFydG5lcnMnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnQgJiYgKGUucHJldmVudERlZmF1bHQoKSxcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVkaXJlY3RVcmxcIilcbiAgICAgICAgICAgICAgICA/IGxpbmsgPSBuZXcgVVJMKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVkaXJlY3RVcmxcIikpXG4gICAgICAgICAgICAgICAgOiAobGluayA9IG5ldyBVUkwocGFyZW50LmhyZWYpLFxuICAgICAgICAgICAgICAgICAgICBhZmZpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhZmZpZCcpLFxuICAgICAgICAgICAgICAgICAgICBjcGFpZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjcGFpZCcpLFxuICAgICAgICAgICAgICAgIGFmZmlkICYmIGNwYWlkICYmIChsaW5rLnBhdGhuYW1lID0gJy8nICsgYWZmaWQgKyAnLycgKyBjcGFpZCkpLCBwYXJhbXMuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuaGFzKHBhcmFtKSAmJiBsaW5rLnNlYXJjaFBhcmFtcy5zZXQocGFyYW0sIGxvY2FsU3RvcmFnZS5nZXRJdGVtKHBhcmFtKSk7XG4gICAgICAgIH0pLCBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gbGluayk7XG4gICAgfSk7XG59KSgpO1xuXG5cbiIsIiJdfQ==
