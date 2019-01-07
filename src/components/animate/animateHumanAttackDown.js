module.exports = (human) => {
  const humanChar = human;

  humanChar.rightHand.xMove += 3;
  humanChar.rightHand.yMove += 2;
  humanChar.rightHand.angleMove += 2.5;
  humanChar.leftHand.xMove += 1;
  humanChar.leftHand.angleMove += 1;
  humanChar.shield.xMove -= 3;
  humanChar.shield.yMove += 2.5;
  humanChar.rightLeg.angleMove += 1;
  humanChar.rightLeg.xMove += 0.5;
  humanChar.rightLeg.yMove += 1;
  humanChar.body.xMove += 0.5;
  humanChar.body.yMove += 0.5;
  humanChar.body.angleMove += 0.15;
  humanChar.head.xMove += 1.5;
  humanChar.head.yMove += 0.5;
  humanChar.head.angleMove += 0.15;
};
