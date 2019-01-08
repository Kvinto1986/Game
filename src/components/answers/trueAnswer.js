module.exports = (animationStart, animationTrue) => {
  const soundArr = ['lich1.mp3', 'lich2.mp3', 'lich3.mp3'];
  const sound = soundArr[Math.floor(Math.random() * soundArr.length)];
  const audio = new Audio();
  audio.src = `../../resources/sound/${sound}`;
  audio.load();
  audio.play();
  function explode () {
    const audioBeat = new Audio();
    audioBeat.src = '../../resources/sound/zvuki-udara.mp3';
    audioBeat.load();
    audioBeat.play();
  }
  setTimeout(explode, 2500);

  animationStart(animationTrue);
};
