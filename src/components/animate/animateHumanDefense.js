module.exports = (human) => {
  const humanChar = human;

  humanChar.leftHand.angleMove += 0.4;
  humanChar.rightHand.xMove += 0.4;
  humanChar.rightHand.yMove -= 0.4;
  humanChar.shield.xMove -= 1.2;
  humanChar.shield.yMove += 1;
  humanChar.body.yMove -= 0.2;
  humanChar.head.yMove -= 0.2;
};
