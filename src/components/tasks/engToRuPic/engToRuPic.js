module.exports = (trueAnswer, falseAnswer, animationStart,
  animationTrueAnswer, animationFalseAnswer, swal) => {
  fetch('../../components/tasks/engToRuPic/engToRuPic.json')
    .then(wordsPicJson => wordsPicJson.json())
    .then((wordsPicJson) => {
      const randomPic = wordsPicJson[Math.floor(Math.random() * wordsPicJson.length)];

      const form = document.createElement('form');
      const input = document.createElement('input');
      const inputSub = document.createElement('input');
      const img = document.createElement('img');

      form.id = 'formTask';
      form.method = 'post';
      form.onsubmit = 'return false;';

      img.src = `../../components/tasks/engToRuPic/images/${randomPic.pic}`;

      input.id = 'inputAnswerTask';
      input.type = 'text';
      input.placeholder = 'Введите ответ';
      input.required = true;

      inputSub.id = 'inputSubTask';
      inputSub.type = 'submit';
      inputSub.value = 'Ответить';

      form.appendChild(img);
      form.appendChild(input);
      form.appendChild(inputSub);

      swal({
        closeOnClickOutside: false,
        closeOnEsc: false,
        title: 'What is in the picture? ',
        content: form,
        button: false

      })
        .then();
      if (window.innerWidth > 1100) input.focus();

      $('#formTask').submit(() => {
        const result = $('#inputAnswerTask').val().toLowerCase();
        if (result === randomPic.word) {
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
            text: `${'Правильный ответ: '}${randomPic.word}`,
            icon: 'error',
            button: 'Продолжить'
          })
            .then(() => falseAnswer(animationStart, animationFalseAnswer));
        }
      });
    });
};
