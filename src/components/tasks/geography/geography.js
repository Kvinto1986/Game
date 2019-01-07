module.exports = (trueAnswer, falseAnswer, animationStart,
  animationTrueAnswer, animationFalseAnswer, swal) => {
  fetch('../../components/tasks/geography/geography.json')
    .then(geoJson => geoJson.json())
    .then((geoJson) => {
      const randomQuestion = geoJson[Math.floor(Math.random() * geoJson.length)];

      const form = document.createElement('form');
      const inputSub = document.createElement('input');

      form.id = 'formTask';
      form.method = 'post';
      form.onsubmit = 'return false;';

      inputSub.id = 'inputSubTask';
      inputSub.type = 'submit';
      inputSub.value = 'Ответить';

      for (let i = 0; i < randomQuestion.answers.length; i += 1) {
        const label = document.createElement('label');
        label.innerText = randomQuestion.answers[i];
        const input = document.createElement('input');
        input.className = 'inputAnswerGeo';
        input.type = 'checkbox';
        input.value = randomQuestion.answers[i];
        form.appendChild(input);
        form.appendChild(label);
      }

      form.appendChild(inputSub);

      swal({
        closeOnClickOutside: false,
        closeOnEsc: false,
        title: randomQuestion.question,

        content: form,
        button: false
      });

      let currAnswer;

      $('#formTask').submit(() => {
        const trueGeoAnswer = randomQuestion.trueAnswer;
        if (currAnswer === trueGeoAnswer) {
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
            text: `${'Правильный ответ: '}${trueGeoAnswer}`,
            icon: 'error',
            button: 'Продолжить'
          })
            .then(() => falseAnswer(animationStart, animationFalseAnswer));
        }
      });

      const inputAnswerGeo = $('.inputAnswerGeo');
      inputAnswerGeo[0].focus();

      function choise () {
        if (this.checked === true) {
          currAnswer = this.value;
          for (let i = 0; i < inputAnswerGeo.length; i += 1) {
            inputAnswerGeo[i].disabled = true;
          }
          this.disabled = false;
        } else {
          for (let i = 0; i < inputAnswerGeo.length; i += 1) {
            inputAnswerGeo[i].disabled = false;
          }
        }
      }

      function choisekey (e) {
        switch (e.key) {
          case 'Enter':

            currAnswer = this.value;
            $('#inputSubTask').focus();
            break;

          case 'ArrowDown':
            $(this).nextAll('.inputAnswerGeo')[0].focus();
            break;

          case 'ArrowUp':
            $(this).prevAll('.inputAnswerGeo')[0].focus();
            break;

          default:
            break;
        }
      }

      $('.inputAnswerGeo').keydown(choisekey);

      $('.inputAnswerGeo').click(choise);
    });
};
