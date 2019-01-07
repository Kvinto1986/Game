module.exports = (trueAnswer, falseAnswer, animationStart,
  animationTrueAnswer, animationFalseAnswer, swal) => {
  fetch('../../components/tasks/flags/flags.json')
    .then(flagsJson => flagsJson.json())
    .then((flagsJson) => {
      const trueFlag = flagsJson[Math.floor(Math.random() * flagsJson.length)];

      function returnFlags () {
        const flagsArr = [];

        while (flagsArr.length < 2) {
          const falseFlag = flagsJson[Math.floor(Math.random() * flagsJson.length)];
          flagsArr.push(falseFlag.flag);
        }

        function selfRandom (min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const randNumber = selfRandom(0, 2);

        flagsArr.splice(randNumber, 0, trueFlag.flag);

        return flagsArr;
      }

      const flagsArr = returnFlags();

      const ul = document.createElement('ul');
      ul.id = 'ulTask';

      for (let i = 0; i < flagsArr.length; i += 1) {
        const img = document.createElement('img');
        img.className = 'imgFlagsTask';
        img.alt = flagsArr[i];
        img.src = `../../components/tasks/flags/images/${flagsArr[i]}`;
        img.tabIndex = i;
        ul.appendChild(img);
      }

      const country = trueFlag.country;

      swal({
        className: 'swap',
        closeOnClickOutside: false,
        closeOnEsc: false,
        title: `Найдите флаг  ${country}`,
        content: ul,
        button: false

      });

      function flagAnswer () {
        if (this.alt === trueFlag.flag) {
          swal({
            closeOnClickOutside: false,
            closeOnEsc: false,
            timer: 5000,
            title: 'Правильно!',
            icon: 'success',
            button: 'Продолжить'
          })
            .then(() => trueAnswer(animationStart, animationTrueAnswer));
        } else {
          swal({
            className: 'swap',
            closeOnClickOutside: false,
            closeOnEsc: false,
            timer: 5000,
            title: 'Неправильно!',
            text: 'Правильный ответ: ',
            content: {
              element: 'img',
              attributes: {
                width: 150,
                src: `../../components/tasks/flags/images/${trueFlag.flag}`
              }
            },
            icon: 'error',
            button: 'Продолжить'
          })
            .then(() => falseAnswer(animationStart, animationFalseAnswer));
        }
      }

      $('.imgFlagsTask')[0].focus();

      $('.imgFlagsTask').keydown(function (e) {
        switch (e.key) {
          case 'Enter':
            flagAnswer.call(this);
            break;

          case 'ArrowRight':
            $(this).next('.imgFlagsTask').focus();
            break;

          case 'ArrowLeft':
            $(this).prev('.imgFlagsTask').focus();
            break;

          default:
            break;
        }
      });

      $('.imgFlagsTask').click(flagAnswer);
    });
};
