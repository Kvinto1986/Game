module.exports = class Char {
  constructor (rightHand, leftHand, rightLeg, leftLeg, body,
    head, weapon, derictory, attack, hp, name) {
    function newImg (part) {
      const img = new Image();
      img.src = `${derictory + part}.png`;
      img.alt = part;
      return img;
    }

    this.rightHand = {
      image: newImg(rightHand[0]),
      x: rightHand[1],
      y: rightHand[2],
      xMove: rightHand[3],
      yMove: rightHand[4],
      angleMove: rightHand[5]
    };

    this.rightLeg = {
      image: newImg(rightLeg[0]),
      x: rightLeg[1],
      y: rightLeg[2],
      xMove: rightLeg[3],
      yMove: rightLeg[4],
      angleMove: rightLeg[5]
    };

    this.leftHand = {
      image: newImg(leftHand[0]),
      x: leftHand[1],
      y: leftHand[2],
      xMove: leftHand[3],
      yMove: leftHand[4],
      angleMove: leftHand[5]
    };

    this.leftLeg = {
      image: newImg(leftLeg[0]),
      x: leftLeg[1],
      y: leftLeg[2],
      xMove: leftLeg[3],
      yMove: leftLeg[4],
      angleMove: leftLeg[5]
    };

    this.body = {
      image: newImg(body[0]),
      x: body[1],
      y: body[2],
      xMove: body[3],
      yMove: body[4],
      angleMove: body[5]
    };

    this.head = {
      image: newImg(head[0]),
      x: head[1],
      y: head[2],
      xMove: head[3],
      yMove: head[4],
      angleMove: head[5]
    };

    this.weapon = {
      image: newImg(weapon[0]),
      x: weapon[1],
      y: weapon[2]

    };

    this.attack = attack;

    this.hp = hp;

    this.name = name;
  }
};
