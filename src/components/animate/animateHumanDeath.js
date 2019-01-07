module.exports = (human) => {
  const humanChar = human;

  humanChar.head.xMove -= 6;
  humanChar.head.yMove -= 0.8;
  humanChar.head.angleMove -= 1;
  humanChar.leftHand.angleMove += 0.8;
  humanChar.rightHand.xMove += 0.8;
  humanChar.rightHand.yMove -= 0.8;
  humanChar.shield.xMove -= 2.4;
  humanChar.shield.yMove += 2;
  humanChar.body.yMove -= 0.4;
  humanChar.head.yMove -= 0.4;
};
