module.exports = (monster) => {
  const monsterChar = monster;

  monsterChar.leftHand.xMove -= 3.5;
  monsterChar.leftHand.yMove += 2;
  monsterChar.leftHand.angleMove -= 2.5;
  monsterChar.leftLeg.xMove += 1.5;
  monsterChar.leftLeg.yMove += 0.5;
  monsterChar.leftLeg.angleMove -= 1;
  monsterChar.rightHand.xMove -= 1;
  monsterChar.rightHand.yMove -= 0.5;
  monsterChar.rightHand.angleMove -= 1;
  monsterChar.body.xMove -= 1;
  monsterChar.body.angleMove -= 0.15;
  monsterChar.head.xMove -= 2;
  monsterChar.head.yMove += 1;
  monsterChar.head.angleMove -= 0.15;
};
