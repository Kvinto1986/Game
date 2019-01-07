module.exports = (trueAnswer, falseAnswer,
  animationStart, animationTrueAnswer, animationFalseAnswer, swal) => {
  const signsArr = ['+', '-', '*', '/'];

  function getRandomNum (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const numberOne = getRandomNum(0, 100);

  const numberTwo = getRandomNum(0, 100);

  const randomSign = signsArr[Math.floor(Math.random() * signsArr.length)];

  let result = window.eval(numberOne + randomSign + numberTwo);

  result = +result.toFixed(2);

  const mathTask = {

    numberOne,

    numberTwo,

    randomSign,

    result
  };

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
    title: `${mathTask.numberOne} ${mathTask.randomSign} ${mathTask.numberTwo} = ?`,
    text: 'Введите правильный ответ:',
    content: form,
    button: false

  })
    .then();
  if (window.innerWidth > 1100) input.focus();

  $('#formTask').submit(() => {
    const resultNumber = Number($('#inputAnswerTask').val());
    if (resultNumber === mathTask.result) {
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
        text: `Правильный ответ:${mathTask.result}`,
        icon: 'error',
        button: 'Продолжить'
      })
        .then(() => falseAnswer(animationStart, animationFalseAnswer));
    }
  });
};
