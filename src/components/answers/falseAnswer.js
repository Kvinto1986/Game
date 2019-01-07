module.exports = (animationStart, animationFalse) => {
  const audio = new Audio();
  audio.src = '../../resources/sound/ahaha.mp3';
  audio.load();
  audio.play();
  function explode () {
    const audio1 = new Audio();
    audio1.src = '../../resources/sound/zvuki-udara.mp3';
    audio1.load();
    audio1.play();
  }
  setTimeout(explode, 3000);

  animationStart(animationFalse);
};
