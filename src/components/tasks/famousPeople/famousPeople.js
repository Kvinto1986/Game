module.exports = (trueAnswer, falseAnswer, animationStart,
  animationTrueAnswer, animationFalseAnswer, swal) => {
  fetch('../../components/tasks/famousPeople/famousPeople.json')
    .then(famousJson => famousJson.json())
    .then((famousJson) => {
      const randomPers = famousJson[Math.floor(Math.random() * famousJson.length)];

      const form = document.createElement('form');
      const input = document.createElement('input');
      const inputSub = document.createElement('input');
      const img = document.createElement('img');
      const ul = document.createElement('ul');

      form.id = 'formTask';
      form.method = 'post';
      form.onsubmit = 'return false;';

      img.src = `../../components/tasks/famousPeople/images/${randomPers.pic}`;

      input.id = 'inputAnswerTask';
      input.type = 'text';
      input.placeholder = 'Введите ответ';
      input.required = true;

      inputSub.id = 'inputSubTask';
      inputSub.type = 'submit';
      inputSub.value = 'Ответить';

      ul.id = 'ulTask';

      form.appendChild(img);
      form.appendChild(ul);
      form.appendChild(input);
      form.appendChild(inputSub);

      const name = randomPers.word.split('');

      for (let i = 0; i < name.length; i += 1) {
        const li = document.createElement('li');
        li.className = 'liTask';
        li.innerHTML = name[i];
        ul.appendChild(li);
        li.tabIndex = i;
      }

      let countWord = 0;
      const countMax = Math.ceil(name.length / 3);

      swal({
        closeOnClickOutside: false,
        closeOnEsc: false,
        title: 'Кто изображен на фотографии? ',
        text: `Вы можете открыть ${countMax} буквы`,
        content: form,
        button: false

      })
        .then();
      if (window.innerWidth > 1100) input.focus();

      $('.liTask').click(function () {
        if (countWord < countMax) {
          this.style.backgroundColor = 'white';
          countWord += 1;
        }
      });

      $('.liTask').keydown(function (e) {
        switch (e.key) {
          case 'Enter':
            if (countWord < countMax) {
              this.style.backgroundColor = 'white';
              countWord += 1;
            }
            break;

          case 'ArrowDown':
            $('#inputAnswerTask').focus();
            break;

          case 'ArrowRight':
            $(this).next('.liTask').focus();
            break;

          case 'ArrowLeft':
            $(this).prev('.liTask').focus();
            break;

          default:
            break;
        }
      });

      $('#inputAnswerTask').keydown((e) => {
        if (e.key === 'ArrowUp') {
          $('.liTask')[0].focus();
        }
      });

      $('#formTask').submit(() => {
        const result = $('#inputAnswerTask').val().toLowerCase();
        if (result === randomPers.word.toLowerCase()) {
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
            closeOnClickOutside: false,
            closeOnEsc: false,
            timer: 5000,
            title: 'Неправильно!',
            text: `${'Правильный ответ: '}${randomPers.word}`,
            icon: 'error',
            button: 'Продолжить'
          })
            .then(() => falseAnswer(animationStart, animationFalseAnswer));
        }
      });
    });
};
