module.exports = (trueAnswer, falseAnswer, animationStart,
  animationTrueAnswer, animationFalseAnswer, swal) => {
  fetch('../../components/tasks/engToRuWords/engToRuWords.json')
    .then(wordsJson => wordsJson.json())
    .then((wordsJson) => {
      const randomWord = wordsJson[Math.floor(Math.random() * wordsJson.length)];

      const form = document.createElement('form');
      const input = document.createElement('input');
      const inputSub = document.createElement('input');

      form.id = 'formTask';
      form.method = 'post';
      form.onsubmit = 'return false;';

      input.id = 'inputAnswerTask';
      input.type = 'text';
      input.placeholder = 'Введите ответ';
      input.required = true;

      inputSub.id = 'inputSubTask';
      inputSub.type = 'submit';
      inputSub.value = 'Ответить';

      form.appendChild(input);
      form.appendChild(inputSub);

      swal({
        closeOnClickOutside: false,
        closeOnEsc: false,
        title: `Переведите слово с английского: ${randomWord.eng}`,
        text: 'Введите правильный ответ:',
        content: form,
        button: false
      })
        .then();
      if (window.innerWidth > 1100) input.focus();

      $('#formTask').submit(() => {
        const result = $('#inputAnswerTask').val().toLowerCase();
        if (randomWord.ru.includes(result)) {
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
            text: `${'Правильный ответ: '}${randomWord.ru[0]}`,
            icon: 'error',
            button: 'Продолжить'
          })
            .then(() => falseAnswer(animationStart, animationFalseAnswer));
        }
      });
    });
};
