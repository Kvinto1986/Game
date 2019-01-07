module.exports = (human) => {
  const humanChar = human;

  humanChar.leftHand.angleMove += 0.1;
  humanChar.shield.angleMove += 0.1;
  humanChar.rightHand.angleMove += 0.1;
  humanChar.rightHand.xMove -= 0.2;
  humanChar.head.angleMove -= 0.05;
  humanChar.head.xMove -= 0.1;
};
