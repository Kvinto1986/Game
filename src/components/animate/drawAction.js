module.exports = (ctx, monster, human) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  const radian = Math.PI / 90;

  function drawRoundAttack (image, x, y, angle, width, height) {
    let widthCurr = width;
    let heightCurr = height;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle * radian);
    if (image === monster.weapon.image) {
      let countY = 0;
      let countX = 0;

      switch (monster.weapon.image.alt) {
        case '1_ork_weapon':
          countY = 350;
          countX = 477;
          break;

        case '2_ork_weapon':
          countY = 323;
          countX = 505;
          break;

        case '3_ork_weapon':
          countY = 340;
          countX = 498;
          break;

        default:
          break;
      }
      widthCurr -= countX;
      heightCurr += countY;
    }
    ctx.drawImage(image, widthCurr, heightCurr);
    ctx.restore();
  }

  drawRoundAttack(monster.leftHand.image, monster.leftHand.xMove + monster.leftHand.x,
    monster.leftHand.yMove + monster.leftHand.y, monster.leftHand.angleMove,
    -monster.leftHand.image.width / 2, -monster.leftHand.image.height / 6);
  drawRoundAttack(monster.weapon.image, monster.leftHand.xMove + monster.leftHand.x,
    monster.leftHand.yMove + monster.leftHand.y, monster.leftHand.angleMove,
    monster.leftHand.image.width, -monster.leftHand.image.height);
  drawRoundAttack(monster.leftLeg.image, monster.leftLeg.xMove + monster.leftLeg.x,
    monster.leftLeg.yMove + monster.leftLeg.y, monster.leftLeg.angleMove,
    -monster.leftHand.image.width / 2, -monster.leftHand.image.height / 6);
  drawRoundAttack(monster.rightLeg.image, monster.rightLeg.xMove + monster.rightLeg.x,
    monster.rightLeg.yMove + monster.rightLeg.y, monster.rightLeg.angleMove,
    -monster.leftHand.image.width / 2, -monster.leftHand.image.height / 6);
  drawRoundAttack(monster.body.image, monster.body.xMove + monster.body.x,
    monster.body.yMove + monster.body.y, monster.body.angleMove,
    -monster.body.image.width / 2, -monster.body.image.height / 2);
  drawRoundAttack(monster.head.image, monster.head.xMove + monster.head.x,
    monster.head.yMove + monster.head.y, monster.head.angleMove,
    -monster.head.image.width / 2, -monster.head.image.height / 2);
  drawRoundAttack(monster.rightHand.image, monster.rightHand.xMove + monster.rightHand.x,
    monster.rightHand.yMove + monster.rightHand.y, monster.rightHand.angleMove,
    -monster.leftHand.image.width / 2, -monster.leftHand.image.height / 6);

  drawRoundAttack(human.rightHand.image, human.rightHand.xMove + human.rightHand.x,
    human.rightHand.yMove + human.rightHand.y, human.rightHand.angleMove,
    -human.leftHand.image.width / 2, -human.leftHand.image.height / 6);
  drawRoundAttack(human.weapon.image, human.rightHand.xMove + human.rightHand.x,
    human.rightHand.yMove + human.rightHand.y, human.rightHand.angleMove,
    human.rightHand.image.width - 142, -human.rightHand.image.height + 95);
  drawRoundAttack(human.rightLeg.image, human.rightLeg.xMove + human.rightLeg.x,
    human.rightLeg.yMove + human.rightLeg.y, human.rightLeg.angleMove,
    -human.leftHand.image.width / 2, -human.leftHand.image.height / 6);
  drawRoundAttack(human.leftLeg.image, human.leftLeg.xMove + human.leftLeg.x,
    human.leftLeg.yMove + human.leftLeg.y, human.leftLeg.angleMove,
    -human.leftHand.image.width / 2, -human.leftHand.image.height / 6);
  drawRoundAttack(human.body.image, human.body.xMove + human.body.x,
    human.body.yMove + human.body.y, human.body.angleMove,
    -human.body.image.width / 2, -human.body.image.height / 2);
  drawRoundAttack(human.head.image, human.head.xMove + human.head.x,
    human.head.yMove + human.head.y, human.head.angleMove,
    -human.head.image.width / 2, -human.head.image.height / 2);
  drawRoundAttack(human.leftHand.image, human.leftHand.xMove +
      human.leftHand.x, human.leftHand.yMove + human.leftHand.y,
  human.leftHand.angleMove, -human.leftHand.image.width / 2, -human.leftHand.image.height / 6);
  drawRoundAttack(human.shield.image, human.shield.xMove + human.shield.x,
    human.shield.yMove + human.shield.y, human.shield.angleMove,
    human.leftHand.image.width - 135, -human.leftHand.image.height + 200);
};
