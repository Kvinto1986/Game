module.exports = (ClassChar) => {
  const rightHand = ['1_right arm_', 410, 590, 65, 35, 0];
  const leftHand = ['1_left arm_', 210, 590, 70, 35, 0];
  const rightLeg = ['1_right lag_', 365, 760, 65, 35, 0];
  const leftLeg = ['1_left lag_', 290, 760, 65, 35, 0];
  const body = ['1_body_', 255, 570, 110, 124, 0];
  const head = ['1_head_', 225, 355, 135, 150, 0];
  const weapon = ['1_spear_', 490, 540];
  const derictory = '../../resources/Knight/';
  const shield = new Image();
  shield.src = '../../resources/Knight/2_shield_.png';
  const attack = 20;
  const hp = 100;
  const name = $('input[name=charName]').val();

  const arr = [];

  arr.push(rightHand, leftHand, rightLeg, leftLeg, body, head, weapon, derictory, attack, hp, name);

  const char = new ClassChar(...arr);

  char.shield = [shield, 260, 640, 0, 0, 0];
  char.shield = {
    image: shield,
    x: 260,
    y: 640,
    xMove: 0,
    yMove: 0,
    angleMove: 0
  };
  char.kill = -1;

  $('#char-name').text(char.name);
  return char;
};
