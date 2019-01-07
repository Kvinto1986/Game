module.exports = (tasksArr, answersObj, modal, drawObj, animateObj,
  ClassChar, monsterCreate, humanCreate, endGame, firebase, swal) => {
  const human = humanCreate(ClassChar);
  let monsterArr = [];
  let monster = {};

  const newLevel = function () {
    monsterArr = monsterCreate();
    monster = new ClassChar(...monsterArr);
    human.kill += 1;
    $('#monster-hp').width(`${monster.hp}%`);

    const div = document.createElement('div');
    const h2 = document.createElement('h3');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');

    img.src = monster.head.image.src;
    img.width = 150;
    img.height = 150;

    div.appendChild(h2);
    div.appendChild(h1);
    div.appendChild(img);
    h2.innerHTML = 'Ваш противник: ';
    h1.innerHTML = monster.name;

    swal({
      className: 'swal',
      content: div,
      timer: 3000,
      button: false
    })
      .then();
    const audio = new Audio();
    audio.src = '../../resources/sound/o-pozabavimsja.mp3';
    audio.load();
    audio.play();
  };

  const ctx = document.getElementById('canvas').getContext('2d');

  const hitImage = new Image();
  hitImage.src = '../../resources/anim/Tile.png';

  const healImage = new Image();
  healImage.src = '../../resources/anim/water.png';

  let xSprite = 0;
  let ySprite = 0;

  let animationEngine;
  let animationStop;

  const humanHitArr = [hitImage, 256, 258, 310, 500, 8];

  const monsterHitArr = [hitImage, 256, 258, 1250, 310, 8];

  const healHitArr = [healImage, 384, 384, 180, 50, 5];

  const drowEffect = function (img, height, width, x, y, imgCount) {
    ctx.drawImage(img, xSprite, ySprite, height, width, x, y, height, width);
    xSprite += height;
    if (xSprite === height * imgCount) {
      xSprite = 0;
      ySprite += width;
    }
  };

  const animationStart = function (callback) {
    animationEngine = callback;
    animationStep();
  };

  const animationStep = function () {
    animationEngine();
    animationStop = requestAnimationFrame(animationStep);
  };

  const setAnimationEngine = function (callback) {
    animationEngine = callback;
  };

  const animationBreathDown = function () {
    drawObj.drawBreathDown(human, monster);
    drawObj.drawAction(ctx, monster, human);
    if (human.rightHand.yMove < 32) {
      setAnimationEngine(animationBreathUp);
    }
  };

  const animationBreathUp = function () {
    drawObj.drawBreathUp(human, monster);
    drawObj.drawAction(ctx, monster, human);
    if (human.rightHand.yMove > 38) {
      setAnimationEngine(animationBreathDown);
    }
  };

  function animationAttackMonsterUp () {
    animateObj.animateMonsterAttackUp(monster, human);
    drawObj.drawAction(ctx, monster, human);

    if (monster.leftHand.angleMove > 80) {
      setAnimationEngine(animationAttackMonsterDown);
    }
  }

  function animationAttackMonsterDown () {
    animateObj.animateMonsterAttackDown(monster);
    drawObj.drawAction(ctx, monster, human);
    if (monster.leftHand.angleMove < 0) {
      if (human.hp - 20 === 0) setAnimationEngine(animationHumanDeath);
      else setAnimationEngine(animationDefenseHuman);
      xSprite = 0;
      ySprite = 0;
    }
  }

  function animationDefenseHuman () {
    animateObj.animateHumanDefense(human);

    drawObj.drawAction(ctx, monster, human);

    drowEffect(...humanHitArr);

    if (human.leftHand.angleMove > 0) {
      human.hp -= 20;
      xSprite = 0;
      ySprite = 0;
      $('#choose-spell').attr('disabled', false);
      $(window).on('keypress', openModalKeypress);

      $('#char-hp').width(`${human.hp}%`);
      setAnimationEngine(animationBreathUp);
    }
  }

  const animationAttackHumanUp = function () {
    animateObj.animateHumanAttackUp(monster, human);

    drawObj.drawAction(ctx, monster, human);

    if (human.rightHand.angleMove < -80) {
      setAnimationEngine(animationAttackHumanDown);
      xSprite = 0;
      ySprite = 0;
    }
  };

  const animationAttackHumanDown = function () {
    animateObj.animateHumanAttackDown(human);

    drawObj.drawAction(ctx, monster, human);

    if (human.rightHand.angleMove > 0) {
      if (monster.hp - 20 === 0) setAnimationEngine(animationMonsterDeath);
      else setAnimationEngine(animationDefenseMonster);
      xSprite = 0;
      ySprite = 0;
    }
  };

  function animationDefenseMonster () {
    animateObj.animateMonsterDefense(monster);

    drawObj.drawAction(ctx, monster, human);

    drowEffect(...monsterHitArr);

    if (monster.rightHand.angleMove < 0) {
      monster.hp -= 20;
      xSprite = 0;
      ySprite = 0;

      $('#choose-spell').attr('disabled', false);
      $(window).on('keypress', openModalKeypress);
      $('#monster-hp').width(`${monster.hp}%`);
      setAnimationEngine(animationBreathUp);
    }
  }

  function animationHealUp () {
    animateObj.animateHealUp(human, monster);

    drawObj.drawAction(ctx, monster, human);

    $('#choose-spell').attr('disabled', true);

    if (human.leftHand.angleMove > 15) {
      if (human.hp < 100) {
        human.hp += 20;
        $('#char-hp').width(`${human.hp}%`);
      }
      setAnimationEngine(animationHealDown);
    }
  }

  function animationHealDown () {
    animateObj.animateHealDown(human, monster);

    drawObj.drawAction(ctx, monster, human);

    drowEffect(...healHitArr);

    if (human.leftHand.angleMove < 0) {
      setAnimationEngine(animationBreathUp);
      $('#choose-spell').attr('disabled', false);
      $(window).on('keypress', openModalKeypress);

      xSprite = 0;
      ySprite = 0;
    }
  }

  function animationMonsterDeath () {
    animateObj.animateMonsterDeath(monster);

    drawObj.drawAction(ctx, monster, human);

    drowEffect(...monsterHitArr);

    if (monster.head.xMove > 1600) {
      monster.leftLeg.angleMove = 0;
      $('#monster-hp').width(0);
      setAnimationEngine(animationBreathUp);
      newLevel();
      $('#choose-spell').attr('disabled', false);
      $(window).on('keypress', openModalKeypress);

      xSprite = 0;
      ySprite = 0;
    }
  }

  function animationHumanDeath () {
    animateObj.animateHumanDeath(human);

    drawObj.drawAction(ctx, monster, human);

    drowEffect(...humanHitArr);

    if (human.head.xMove < -80) {
      $('#char-hp').width(0);
      setAnimationEngine(animationStop);
      endGame(human, firebase, swal);
    }
  }

  newLevel();
  animationStart(animationBreathDown);

  function openModal () {
    cancelAnimationFrame(animationStop);
    modal(tasksArr, answersObj.trueAnswer, answersObj.falseAnswer, answersObj.healAnswer,
      animationStart, animationAttackMonsterUp, animationAttackHumanUp, animationHealUp, swal);
  }

  $('#choose-spell').click(openModal);

  function openModalKeypress (event) {
    if (event.key === ' ' || event.key === 'Space') {
      openModal();
      $(window).off('keypress');
    }
  }

  $(window).keypress(openModalKeypress);
};
