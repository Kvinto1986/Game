
import firebase from 'firebase/app';

import swal from 'sweetalert';

import $ from 'jquery';

import startBattle from './screens/battle/battle';

import modal from './components/modal-dialog/modal';

import math from './components/tasks/math/math';

import engToRuWords from './components/tasks/engToRuWords/engToRuWords';

import engToRuPic from './components/tasks/engToRuPic/engToRuPic';

import engToRuSound from './components/tasks/engToRuSound/engToRuSound';

import famousPeople from './components/tasks/famousPeople/famousPeople';

import flags from './components/tasks/flags/flags';

import geography from './components/tasks/geography/geography';

import battleAnimation from './components/animate/battleAnimation';

import drawBreathUp from './components/animate/drawBreathUp';

import drawBreathDown from './components/animate/drawBreathDown';

import drawAction from './components/animate/drawAction';

import animateMonsterAttackUp from './components/animate/animateMonsterAttackUp';

import animateMonsterAttackDown from './components/animate/animateMonsterAttackDown';

import animateHumanAttackUp from './components/animate/animateHumanAttackUp';

import animateHumanAttackDown from './components/animate/animateHumanAttackDown';

import animateHumanDefense from './components/animate/animateHumanDefense';

import animateMonsterDefense from './components/animate/animateMonsterDefense';

import animateHealUp from './components/animate/animateHealUp';

import animateHealDown from './components/animate/animateHealDown';

import animateMonsterDeath from './components/animate/animateMonsterDeath';

import animateHumanDeath from './components/animate/animateHumanDeath';

import ClassChar from './components/Chars/ClassChar';

import monsterCreate from './components/Chars/monsterCreate';

import humanCreate from './components/Chars/humanCreate';

import trueAnswer from './components/answers/trueAnswer';

import falseAnswer from './components/answers/falseAnswer';

import healAnswer from './components/answers/healAnswer';

import endGame from './components/endGame/endGame';

import loadGame from './components/loading/loading';

import 'firebase/database';

window.jQuery = $;
window.$ = $;

const tasksArr = [];

const answersObj = {
  trueAnswer,
  falseAnswer,
  healAnswer
};

const drawObj = {
  drawBreathUp,
  drawBreathDown,
  drawAction
};

const animateObj = {
  animateMonsterAttackUp,
  animateMonsterAttackDown,
  animateHumanAttackUp,
  animateHumanAttackDown,
  animateHumanDefense,
  animateMonsterDefense,
  animateHealUp,
  animateHealDown,
  animateMonsterDeath,
  animateHumanDeath
};

tasksArr.push(math, engToRuWords, engToRuPic, engToRuSound, famousPeople, flags, geography);

startBattle(loadGame, tasksArr, answersObj, modal, battleAnimation, drawObj, animateObj,
  ClassChar, monsterCreate, humanCreate, endGame, firebase, swal);
