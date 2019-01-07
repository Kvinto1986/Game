module.exports = (human, monster) => {
  const monsterChar = monster;
  const humanChar = human;

  humanChar.rightHand.yMove += 0.05;
  humanChar.leftHand.yMove += 0.05;
  humanChar.shield.yMove += 0.05;
  humanChar.body.yMove += 0.05;

  monsterChar.rightHand.yMove += 0.05;
  monsterChar.leftHand.yMove += 0.05;
  monsterChar.body.yMove += 0.05;
};
