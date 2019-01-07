$('.logoStart').click(() => {
  window.open('../battle/index.html', '_self');
});

$(window).keydown((event) => {
  if (event.key === 'Enter') {
    window.open('../battle/index.html', '_self');
  }
});

const audio = $('#audioPlay')[0];
audio.volume = 0.2;

$('.sound-control').click(() => {
  if (audio.paused === false) {
    audio.pause();
    $('.sound-control')[0].firstChild.src = '../../resources/sound/Volume_Off.png';
  } else {
    audio.play();
    $('.sound-control')[0].firstChild.src = '../../resources/sound/sound-off-icon.png';
  }
});
