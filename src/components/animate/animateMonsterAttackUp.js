module.exports = (monster, human) => {
  const monsterChar = monster;
  const humanChar = human;

  monsterChar.leftHand.yMove -= 0.4;
  monsterChar.leftHand.xMove += 0.7;
  monsterChar.leftHand.angleMove += 0.5;
  monsterChar.leftLeg.xMove -= 0.3;
  monsterChar.leftLeg.yMove -= 0.1;
  monsterChar.leftLeg.angleMove += 0.2;
  monsterChar.rightHand.xMove += 0.2;
  monsterChar.rightHand.yMove += 0.1;
  monsterChar.rightHand.angleMove += 0.2;
  monsterChar.body.xMove += 0.2;
  monsterChar.body.angleMove += 0.03;
  monsterChar.head.xMove += 0.4;
  monsterChar.head.yMove -= 0.2;
  monsterChar.head.angleMove += 0.03;

  humanChar.leftHand.angleMove -= 0.2;
  humanChar.rightHand.xMove -= 0.2;
  humanChar.rightHand.yMove += 0.2;
  humanChar.shield.xMove += 0.6;
  humanChar.shield.yMove -= 0.5;
  humanChar.body.yMove += 0.1;
  humanChar.head.yMove += 0.1;

  $('#choose-spell').attr('disabled', true);
};
