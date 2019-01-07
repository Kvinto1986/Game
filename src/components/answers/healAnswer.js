module.exports = (animationStart, animationHeal) => {
  function explode () {
    const audio1 = new Audio();
    audio1.src = '../../resources/sound/heal.mp3';
    audio1.load();
    audio1.play();
  }
  setTimeout(explode, 2300);
  animationStart(animationHeal);
};
