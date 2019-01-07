module.exports = () => {
  const arr = [];

  const monsterRightHand = ['1_ork_right_arm', '2_ork_right_arm', '3_ork_right_arm'];
  const monsterLeftHand = ['1_ork_left_arm', '2_ork_left_arm', '3_ork_left_arm'];
  const monsterRightLeg = ['1_ork_right_leg', '2_ork_right_leg', '3_ork_right_leg'];
  const monsterLeftLeg = ['1_ork_left_leg', '2_ork_left_leg', '3_ork_left_leg'];
  const monsterBody = ['1_ork_body', '2_ork_body', '3_ork_body'];
  const monsterHead = ['1_ork_head', '2_ork_head', '3_ork_head'];
  const monsterWeapon = ['1_ork_weapon', '2_ork_weapon', '3_ork_weapon'];

  arr.push(monsterRightHand, monsterLeftHand, monsterRightLeg,
    monsterLeftLeg, monsterBody, monsterHead, monsterWeapon);

  const arrCoord = [[1550, 490, 90, 55, 0], [1225, 500, 92, 55, 0],
    [1468, 740, 93, 50, 0], [1390, 740, 88, 50, 0], [1325, 420, 168, 185, 0],
    [1280, 260, 178, 160, 0], [0, 0]];

  const monsterArr = arr.map((elm, index) => {
    const part = [];
    part.push(elm[Math.floor(Math.random() * elm.length)]);
    if (index === arrCoord.length - 1) {
      switch (part[0]) {
        case '1_ork_weapon':
          arrCoord[index][0] = 1018;
          arrCoord[index][1] = 588;
          break;

        case '2_ork_weapon':
          arrCoord[index][0] = 989;
          arrCoord[index][1] = 562;
          break;

        case '3_ork_weapon':
          arrCoord[index][0] = 994;
          arrCoord[index][1] = 578;
          break;

        default:
          break;
      }
    }

    part.push(arrCoord[index][0], arrCoord[index][1], arrCoord[index][2],
      arrCoord[index][3], arrCoord[index][4], arrCoord[index][5]);
    return part;
  });

  const monsterNameArr1 = ['Ужасный', 'Дикий', 'Злобный', 'Яростный', 'Глупый'];
  const monsterNameArr2 = ['Крушитель', 'Разрушитель', 'Вонючка', 'Тупица', 'Слабак'];
  const monsterNameArr3 = ['Грут', 'Барт', 'Трог', 'Фред', 'Морт'];

  const randommonsterName1 = monsterNameArr1[Math.floor(Math.random() * monsterNameArr1.length)];
  const randommonsterName2 = monsterNameArr2[Math.floor(Math.random() * monsterNameArr2.length)];
  const randommonsterName3 = monsterNameArr3[Math.floor(Math.random() * monsterNameArr3.length)];

  const monsterName = `${randommonsterName1} ${randommonsterName2} ${randommonsterName3}`;

  const attack = 20;

  const hp = 100;

  const derictory = '../../resources/Orcs/';
  monsterArr.push(derictory, attack, hp, monsterName);

  $('#monster-name').text(monsterName);

  return monsterArr;
};
