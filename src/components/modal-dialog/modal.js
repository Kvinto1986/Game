module.exports = (tasksArr, trueAnswer, falseAnswer, healAnswer, animationStart,
  animationAttackMonsterUp, animationAttackHumanUp, animationHealUp, swal) => {
  const randomTask = tasksArr[Math.floor(Math.random() * tasksArr.length)];

  const div = document.createElement('div');
  div.className = 'modalStart';
  const imgAttack = document.createElement('img');
  const imgHeal = document.createElement('img');

  imgAttack.src = '../../resources/modal/logo11.png';
  imgHeal.src = '../../resources/modal/Wings.png';
  div.appendChild(imgHeal);
  div.appendChild(imgAttack);

  swal({
    className: 'swal',
    closeOnClickOutside: false,
    closeOnEsc: false,
    content: div,
    buttons: {

      heal: {
        text: 'Лечение',
        className: 'heal-btn'
      },
      attack: {
        text: 'Атака',
        className: 'attack-btn'
      }
    }
  })

    .then((value) => {
      switch (value) {
        case 'attack':
          randomTask(trueAnswer, falseAnswer, animationStart,
            animationAttackHumanUp, animationAttackMonsterUp, swal);
          break;

        case 'heal':
          randomTask(healAnswer, falseAnswer, animationStart,
            animationHealUp, animationAttackMonsterUp, swal);
          break;

        default:

          break;
      }
    });
};
