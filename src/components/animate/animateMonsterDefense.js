module.exports = (monster) => {
  const monsterChar = monster;

  monsterChar.leftHand.xMove -= 1;
  monsterChar.rightHand.angleMove -= 0.8;
  monsterChar.rightHand.xMove += 0.8;
  monsterChar.rightHand.yMove -= 0.4;
  monsterChar.body.yMove -= 0.2;
  monsterChar.head.xMove -= 0.2;
  monsterChar.head.yMove -= 0.4;
};
