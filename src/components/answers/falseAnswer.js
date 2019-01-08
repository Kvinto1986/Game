module.exports = (animationStart, animationFalse) => {
  const audioEndgame = new Audio();
  audioEndgame.src = '../../resources/sound/ahaha.mp3';
  audioEndgame.load();
  audioEndgame.play();
  function explode () {
    const audioBeat = new Audio();
    audioBeat.src = '../../resources/sound/zvuki-udara.mp3';
    audioBeat.load();
    audioBeat.play();
  }
  setTimeout(explode, 3000);

  animationStart(animationFalse);
};
