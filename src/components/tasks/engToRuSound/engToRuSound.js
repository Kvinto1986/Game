module.exports = (trueAnswer, falseAnswer, animationStart,
  animationTrueAnswer, animationFalseAnswer, swal) => {
  fetch('../../components/tasks/engToRuSound/engToRuSound.json')
    .then(users => users.json())
    .then((users) => {
      const randomSound = users[Math.floor(Math.random() * users.length)];

      const container = document.createElement('div');
      const form = document.createElement('form');
      const audio = new Audio();
      const btn = document.createElement('button');
      const input = document.createElement('input');
      const inputSub = document.createElement('input');

      form.id = 'formTask';
      form.method = 'post';
      form.onsubmit = 'return false;';

      audio.src = `../../components/tasks/engToRuSound/sounds/${randomSound.sound}`;
      audio.load();
      audio.id = 'audio';

      btn.id = 'btnSound';
      btn.type = 'button';

      input.id = 'inputAnswerTask';
      input.type = 'text';
      input.placeholder = 'Введите ответ';
      input.required = true;

      inputSub.id = 'inputSubTask';
      inputSub.type = 'submit';
      inputSub.value = 'Ответить';

      container.appendChild(audio);
      container.appendChild(form);
      form.appendChild(btn);
      form.appendChild(input);
      form.appendChild(inputSub);

      swal({
        closeOnClickOutside: false,
        closeOnEsc: false,
        title: 'Listen and write the word:',
        content: container,
        button: false
      })
        .then();
      if (window.innerWidth > 1100) btn.focus();

      $('#btnSound').click(() => {
        audio.play();
      });

      $('#btnSound').keydown((e) => {
        if (e.key === 'ArrowDown') {
          $('#inputAnswerTask').focus();
        }
      });

      $('#inputAnswerTask').keydown((e) => {
        if (e.key === 'ArrowUp') {
          $('#btnSound').focus();
        }
      });

      $('#formTask').submit(() => {
        const result = $('#inputAnswerTask').val().toLowerCase();
        if (result === randomSound.word) {
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
            text: `${'Правильный ответ: '}${randomSound.word}`,
            icon: 'error',
            button: 'Продолжить'
          })
            .then(() => falseAnswer(animationStart, animationFalseAnswer));
        }
      });
    });
};
