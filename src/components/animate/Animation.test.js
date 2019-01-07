const assert = require('assert');
const MonsterAttackDown = require('./animateMonsterAttackDown.js');
const AnimateHealUp = require('./animateHealUp.js');

describe('Monster attack down', () => {
  it('Monster attack test', () => {
    const monster = {
      leftHand: {
        xMove: 0,
        yMove: 0,
        angleMove: 0
      },
      leftLeg: {
        xMove: 0,
        yMove: 0,
        angleMove: 0
      },
      rightHand: {
        xMove: 0,
        yMove: 0,
        angleMove: 0
      },
      body: {
        xMove: 0,
        angleMove: 0
      },
      head: {
        xMove: 0,
        yMove: 0,
        angleMove: 0
      }
    };

    MonsterAttackDown(monster);

    const monsterTest = {
      leftHand: {
        xMove: -3.5,
        yMove: 2,
        angleMove: -2.5
      },
      leftLeg: {
        xMove: 1.5,
        yMove: 0.5,
        angleMove: -1
      },
      rightHand: {
        xMove: -1,
        yMove: -0.5,
        angleMove: -1
      },
      body: {
        xMove: -1,
        angleMove: -0.15
      },
      head: {
        xMove: -2,
        yMove: 1,
        angleMove: -0.15
      }
    };

    assert.deepEqual(monster, monsterTest);
  });
});

describe('Human heal up', () => {
  it('Human heal up test', () => {
    const human = {
      leftHand: {

        angleMove: 0
      },
      shield: {

        angleMove: 0
      },
      rightHand: {
        xMove: 0,
        angleMove: 0
      },

      head: {
        xMove: 0,
        angleMove: 0
      }
    };

    AnimateHealUp(human);

    const humanTest = {
      leftHand: {

        angleMove: 0.1
      },
      shield: {

        angleMove: 0.1
      },
      rightHand: {
        xMove: -0.2,
        angleMove: 0.1
      },

      head: {
        xMove: -0.1,
        angleMove: -0.05
      }
    };

    assert.deepEqual(human, humanTest);
  });
});
