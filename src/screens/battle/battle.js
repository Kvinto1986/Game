module.exports = (loadGame, tasksArr, answersObj, modal, battleAnimation, drawObj,
  animateObj, ClassChar, monsterCreate, humanCreate, endGame, firebase, swal) => {
  const audio = document.getElementById('audioPlay');
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

  $('#charName').focus();

  $('.loginForm').submit(() => {
    loadGame(battleAnimation, tasksArr, answersObj, modal, drawObj,
      animateObj, ClassChar, monsterCreate, humanCreate, endGame, firebase, swal);
  });
};
