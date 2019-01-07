module.exports = (animationStart, animationTrue) => {
  const soundArr = ['lich1.mp3', 'lich2.mp3', 'lich3.mp3'];
  const sound = soundArr[Math.floor(Math.random() * soundArr.length)];
  const audio = new Audio();
  audio.src = `../../resources/sound/${sound}`;
  audio.load();
  audio.play();
  function explode () {
    const audio1 = new Audio();
    audio1.src = '../../resources/sound/zvuki-udara.mp3';
    audio1.load();
    audio1.play();
  }
  setTimeout(explode, 2500);

  animationStart(animationTrue);
};
