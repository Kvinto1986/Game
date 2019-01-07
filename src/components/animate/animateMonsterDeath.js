module.exports = (monster) => {
  const monsterChar = monster;

  monsterChar.body.xMove += 3;
  monsterChar.body.angleMove += 0.1;
  monsterChar.head.xMove += 6;
  monsterChar.head.yMove -= 0.8;
  monsterChar.head.angleMove += 1;
  monsterChar.leftHand.xMove += 4;
  monsterChar.leftHand.yMove -= 0.8;
  monsterChar.leftHand.angleMove += 0.4;
  monsterChar.rightHand.xMove += 3.5;
  monsterChar.rightHand.yMove += 0.4;
  monsterChar.rightHand.angleMove -= 0.2;
  monsterChar.rightLeg.xMove += 2.3;
  monsterChar.rightLeg.yMove -= 0.1;
  monsterChar.rightLeg.angleMove += 0.1;
  monsterChar.leftLeg.xMove += 2.4;
  monsterChar.leftLeg.yMove -= 0.25;
  monsterChar.leftLeg.angleMove += 0.15;
};
