module.exports = (battleAnimation, tasksArr, answersObj, modal, drawObj, animateObj,
  ClassChar, monsterCreate, humanCreate, endGame, firebase, swal) => {
  const backgroundsArr = ['background1.png', 'background2.png', 'background3.png', 'background4.png'];

  const randomBackground = backgroundsArr[Math.floor(Math.random() * backgroundsArr.length)];

  let allCount = 0;
  let count = 0;
  const list = [
    '../../resources/backgrounds/background1.png',
    '../../resources/backgrounds/background2.png',
    '../../resources/backgrounds/background3.png',
    '../../resources/backgrounds/background4.png',
    '../../resources/modal/logo11.png',
    '../../resources/modal/Wings.png',

    '../../resources/Orcs/1_ork_body.png',
    '../../resources/Orcs/2_ork_body.png',
    '../../resources/Orcs/3_ork_body.png',
    '../../resources/Orcs/1_ork_head.png',
    '../../resources/Orcs/2_ork_head.png',
    '../../resources/Orcs/3_ork_head.png',
    '../../resources/Orcs/1_ork_left_arm.png',
    '../../resources/Orcs/2_ork_left_arm.png',
    '../../resources/Orcs/3_ork_left_arm.png',
    '../../resources/Orcs/1_ork_right_arm.png',
    '../../resources/Orcs/2_ork_right_arm.png',
    '../../resources/Orcs/3_ork_right_arm.png',
    '../../resources/Orcs/1_ork_right_leg.png',
    '../../resources/Orcs/2_ork_right_leg.png',
    '../../resources/Orcs/3_ork_right_leg.png',
    '../../resources/Orcs/1_ork_left_leg.png',
    '../../resources/Orcs/2_ork_left_leg.png',
    '../../resources/Orcs/3_ork_left_leg.png',
    '../../resources/Orcs/1_ork_weapon.png',
    '../../resources/Orcs/2_ork_weapon.png',
    '../../resources/Orcs/3_ork_weapon.png',

    '../../resources/Knight/1_body_.png',
    '../../resources/Knight/1_head_.png',
    '../../resources/Knight/1_left arm_.png',
    '../../resources/Knight/1_left lag_.png',
    '../../resources/Knight/1_right arm_.png',
    '../../resources/Knight/1_right lag_.png',
    '../../resources/Knight/1_spear_.png',
    '../../resources/Knight/2_shield_.png',

    '../../components/tasks/engToRuPic/images/banana.jpg',
    '../../components/tasks/engToRuPic/images/bee.jpg',
    '../../components/tasks/engToRuPic/images/carrot.jpg',
    '../../components/tasks/engToRuPic/images/cow.jpg',
    '../../components/tasks/engToRuPic/images/cucumber.jpg',
    '../../components/tasks/engToRuPic/images/elephant.jpg',
    '../../components/tasks/engToRuPic/images/lemon.jpg',
    '../../components/tasks/engToRuPic/images/lion.jpg',
    '../../components/tasks/engToRuPic/images/orange.jpeg',
    '../../components/tasks/engToRuPic/images/bear.jpg',
    '../../components/tasks/engToRuPic/images/bus.jpg',
    '../../components/tasks/engToRuPic/images/cake.jpg',
    '../../components/tasks/engToRuPic/images/chicken.jpeg',
    '../../components/tasks/engToRuPic/images/clock.jpg',
    '../../components/tasks/engToRuPic/images/crocodile.jpg',
    '../../components/tasks/engToRuPic/images/doll.jpg',
    '../../components/tasks/engToRuPic/images/egg.jpg',
    '../../components/tasks/engToRuPic/images/fish.jpg',
    '../../components/tasks/engToRuPic/images/fox.jpg',
    '../../components/tasks/engToRuPic/images/frog.jpg',
    '../../components/tasks/engToRuPic/images/giraffe.png',
    '../../components/tasks/engToRuPic/images/hare.jpg',
    '../../components/tasks/engToRuPic/images/horse.jpg',
    '../../components/tasks/engToRuPic/images/milk.jpg',
    '../../components/tasks/engToRuPic/images/monkey.jpg',
    '../../components/tasks/engToRuPic/images/mouse.jpg',
    '../../components/tasks/engToRuPic/images/parrot.jpg',
    '../../components/tasks/engToRuPic/images/pencil.jpg',
    '../../components/tasks/engToRuPic/images/pig.jpg',
    '../../components/tasks/engToRuPic/images/plate.jpeg',
    '../../components/tasks/engToRuPic/images/rabbit.jpeg',
    '../../components/tasks/engToRuPic/images/sheep.jpg',
    '../../components/tasks/engToRuPic/images/ship.jpg',
    '../../components/tasks/engToRuPic/images/snake.jpg',
    '../../components/tasks/engToRuPic/images/tiger.jpg',
    '../../components/tasks/engToRuPic/images/wolf.png',

    '../../components/tasks/famousPeople/images/Darwin.jpg',
    '../../components/tasks/famousPeople/images/Einstein.jpg',
    '../../components/tasks/famousPeople/images/Gates.jpg',
    '../../components/tasks/famousPeople/images/gitler.jpg',
    '../../components/tasks/famousPeople/images/Jobs.jpg',
    '../../components/tasks/famousPeople/images/Napoleon.jpg',
    '../../components/tasks/famousPeople/images/Newton.jpg',
    '../../components/tasks/famousPeople/images/Stalin.jpg',
    '../../components/tasks/famousPeople/images/Armstrong.jpg',
    '../../components/tasks/famousPeople/images/batman.jpg',
    '../../components/tasks/famousPeople/images/capitan.jpg',
    '../../components/tasks/famousPeople/images/cezar.jpg',
    '../../components/tasks/famousPeople/images/cherch.jpg',
    '../../components/tasks/famousPeople/images/chingishun.jpg',
    '../../components/tasks/famousPeople/images/columb.jpg',
    '../../components/tasks/famousPeople/images/deadpool.jpg',
    '../../components/tasks/famousPeople/images/disney.jpg',
    '../../components/tasks/famousPeople/images/flash.jpg',
    '../../components/tasks/famousPeople/images/gagarin.jpg',
    '../../components/tasks/famousPeople/images/gitler.jpg',
    '../../components/tasks/famousPeople/images/gogol.jpg',
    '../../components/tasks/famousPeople/images/hulk.jpg',
    '../../components/tasks/famousPeople/images/ironman.jpg',
    '../../components/tasks/famousPeople/images/joker.jpg',
    '../../components/tasks/famousPeople/images/lenin.jpg',
    '../../components/tasks/famousPeople/images/lermontov.jpg',
    '../../components/tasks/famousPeople/images/lomonosov.jpg',
    '../../components/tasks/famousPeople/images/mask.jpg',
    '../../components/tasks/famousPeople/images/pushkin.jpg',
    '../../components/tasks/famousPeople/images/Rasputin.jpg',
    '../../components/tasks/famousPeople/images/shekspir.jpg',
    '../../components/tasks/famousPeople/images/spiderman.jpg',
    '../../components/tasks/famousPeople/images/Superman.jpg',
    '../../components/tasks/famousPeople/images/Thor.jpg',
    '../../components/tasks/famousPeople/images/Washingthon.jpg',
    '../../components/tasks/famousPeople/images/Wolverine.jpg',
    '../../components/tasks/famousPeople/images/zukerberg.jpg'
  ];

  const startBattle = function () {
    const battlePage = $('.battle-page');
    count += 1;
    if (allCount === count) {
      $('.login-page').css('display', 'none');
      battlePage.css('display', 'flex');
      battlePage.css('background-image', `url("../../resources/backgrounds/${randomBackground}")`);
      battlePage.css('background-size', 'cover');
      battlePage.css('background-repeat', 'no-repeat');
      battleAnimation(tasksArr, answersObj, modal, drawObj, animateObj,
        ClassChar, monsterCreate, humanCreate, endGame, firebase, swal);
    }
  };

  const loading = function () {
    for (let i = 0; i < list.length; i += 1) {
      allCount += 1;
      const img = document.createElement('img');
      img.onload = startBattle;
      img.src = list[i];
    }
  };

  loading();

  const load = document.getElementById('loading');
  const int = setInterval(() => {
    load.innerHTML = `Загрузка: ${Math.round((count / allCount) * 100)}%`;
    if (allCount === count) {
      clearInterval(int);
    }
  }, 1000 / 60);
};
