module.exports = (animationStart, animationHeal) => {
  function explode () {
    const audioHeal = new Audio();
    audioHeal.src = '../../resources/sound/heal.mp3';
    audioHeal.load();
    audioHeal.play();
  }
  setTimeout(explode, 1800);
  animationStart(animationHeal);
};
