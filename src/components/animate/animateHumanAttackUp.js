module.exports = (monster, human) => {
  const humanChar = human;
  const monsterChar = monster;

  humanChar.rightHand.xMove -= 0.6;
  humanChar.rightHand.yMove -= 0.4;
  humanChar.rightHand.angleMove -= 0.5;
  humanChar.leftHand.xMove -= 0.2;
  humanChar.leftHand.angleMove -= 0.2;
  humanChar.shield.xMove += 0.6;
  humanChar.shield.yMove -= 0.5;
  humanChar.rightLeg.angleMove -= 0.2;
  humanChar.rightLeg.xMove -= 0.1;
  humanChar.rightLeg.yMove -= 0.2;
  humanChar.body.xMove -= 0.1;
  humanChar.body.yMove -= 0.1;
  humanChar.body.angleMove -= 0.03;
  humanChar.head.xMove -= 0.3;
  humanChar.head.yMove -= 0.1;
  humanChar.head.angleMove -= 0.03;

  monsterChar.leftHand.xMove += 0.5;
  monsterChar.rightHand.angleMove += 0.4;
  monsterChar.rightHand.xMove -= 0.4;
  monsterChar.rightHand.yMove += 0.2;
  monsterChar.body.yMove += 0.1;
  monsterChar.head.xMove += 0.1;
  monsterChar.head.yMove += 0.2;

  $('#choose-spell').attr('disabled', true);
};
