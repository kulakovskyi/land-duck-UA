
const playBtn = document.querySelector('.zsu__main-wheel-btn'),
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
      totalTriesCounter = 2

let triesCounter = 0

footerRulesBtn.addEventListener('click', () => {
    overlay.classList.remove('opacity-overlay')
    rules.classList.remove('hide')
})

popupClose.addEventListener('click', () => {
    overlay.classList.add('opacity-overlay')
    rules.classList.add('hide')
    overflow.style.overflow = 'unset'
})

playBtn.addEventListener('click', () => {
    if (triesCounter === 0) {
        runFirstRotation()
    } else {
        runSecondRotation()
    }
})

function updTriesCounter() {
    const cnt = totalTriesCounter - triesCounter
    if (cnt === 2) {
        tries.innerText = "2 спроби"
    } else if (cnt === 1) {
        tries.innerText = "1 спроба"
    } else {
        tries.innerText = "0 спроб"
    }
}

function runFirstRotation() {
    wheel.classList.add('reel-rotation-first')
    playBtn.classList.remove('pulse-btn')
    playBtnText.classList.add('hide')
    playBtn.style.transform = 'scale(0.9)'
    playBtn.style.cursor = 'default'
    wrapper.style.pointerEvents = 'none'
    setTimeout(() => {
        doAfterFirstRotation()
    }, 6000)
    triesCounter++
    updTriesCounter()
}

function doAfterFirstRotation() {
    wheel.style.transform = 'rotate(1037deg)'
    wheel.classList.remove('reel-rotation-first')
    displayPopup(popupFirst)
    wrapper.style.pointerEvents = 'auto'
    overflow.style.overflow = 'hidden'
    setTimeout(() => {
        playBtn.classList.add('pulse-btn')
        playBtnText.classList.remove('hide')
        playBtn.style.transform = 'scale(1)'
        playBtn.style.cursor = 'pointer'
    }, 1200)
}

function runSecondRotation() {
    wheel.classList.add('reel-rotation-second')
    playBtn.classList.remove('pulse-btn')
    playBtnText.classList.add('hide')
    playBtn.style.transform = 'scale(0.9)'
    playBtn.style.cursor = 'default'
    overflow.style.overflow = 'hidden'
    wrapper.style.pointerEvents = 'none'
    setTimeout(() => {
        doAfterSecondRotation()
    }, 6000)
    triesCounter++
    updTriesCounter()
}

function doAfterSecondRotation() {
    displayPopup(popupSecond)
    wrapper.style.pointerEvents = 'auto'
    ShipImg.style.background = "url(\"img/ship_3.png\") no-repeat 0 0/contain"
    ShipImg.style.animation = "none"
}

popupFirstBtn.addEventListener('click', () => {
    overlay.classList.add('opacity-overlay')
    popupFirst.classList.add('hide')
    overflow.style.overflow = 'unset'
    ShipImg.style.background = "url(\"img/ship_2.png\") no-repeat 0 0/contain"
    ShipImg.style.animation = "none"
})

function displayPopup(popup) {
    overlay.classList.remove('opacity-overlay')
    popup.classList.remove('hide')
}

const bgv = document.querySelector(".zsu__main-video-bg");
if (window.innerWidth > 1000) {
    bgv.poster = bgv.dataset.poster;
    const sources = bgv.getElementsByTagName("source");

    for (let i = 0; i < sources.length; ++i) {
        sources[i].src = sources[i].dataset.src;
    }
}
bgv.load();
