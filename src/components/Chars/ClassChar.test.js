const assert = require('assert');
const CharClass = require('./ClassChar.js');
const humanArgs = require('./humanCreate.js');

require('jsdom-global')();
$ = require('jquery');

describe('Monster create', () => {
  it('Monster create test', () => {
    const args = [['image', 100, 200, 300, 500, 0], ['image', 5, 6, 8, 9, 10], ['image', 6, 3, 23, 344, 0],
      ['image', 2150, 4230, 93, 51, 101], ['image', 5, 3, 54, 3, 34], ['image', 234, 234, 4, 53, 23],
      ['image', 324, 30], ['Orcs/'], [10], [20], ['John']];

    const img = new Image();
    img.src = 'Orcs/image.png';
    img.alt = 'image';

    const realMonster = {
      rightHand:
                {
                  image: img,
                  x: 100,
                  y: 200,
                  xMove: 300,
                  yMove: 500,
                  angleMove: 0
                },
      rightLeg:
                {
                  image: img,
                  x: 6,
                  y: 3,
                  xMove: 23,
                  yMove: 344,
                  angleMove: 0
                },
      leftHand:
                {
                  image: img,
                  x: 5,
                  y: 6,
                  xMove: 8,
                  yMove: 9,
                  angleMove: 10
                },
      leftLeg:
                {
                  image: img,
                  x: 2150,
                  y: 4230,
                  xMove: 93,
                  yMove: 51,
                  angleMove: 101
                },
      body:
                {
                  image: img,
                  x: 5,
                  y: 3,
                  xMove: 54,
                  yMove: 3,
                  angleMove: 34
                },
      head:
                {
                  image: img,
                  x: 234,
                  y: 234,
                  xMove: 4,
                  yMove: 53,
                  angleMove: 23
                },
      weapon: {
        image: img,
        x: 324,
        y: 30
      },
      attack: [10],
      hp: [20],
      name: ['John']
    };

    const testMonster = new CharClass(...args);

    assert.deepEqual(testMonster, realMonster);
  });
});

describe('Human create', () => {
  it('Human create test', () => {
    const img = new Image();
    const realHuman = {
      rightHand:
                    {
                      image: img,
                      x: 410,
                      y: 590,
                      xMove: 65,
                      yMove: 35,
                      angleMove: 0
                    },
      rightLeg:
                    {
                      image: img,
                      x: 365,
                      y: 760,
                      xMove: 65,
                      yMove: 35,
                      angleMove: 0
                    },
      leftHand:
                    {
                      image: img,
                      x: 210,
                      y: 590,
                      xMove: 70,
                      yMove: 35,
                      angleMove: 0
                    },
      leftLeg:
                    {
                      image: img,
                      x: 290,
                      y: 760,
                      xMove: 65,
                      yMove: 35,
                      angleMove: 0
                    },
      body:
                    {
                      image: img,
                      x: 255,
                      y: 570,
                      xMove: 110,
                      yMove: 124,
                      angleMove: 0
                    },
      head:
                    {
                      image: img,
                      x: 225,
                      y: 355,
                      xMove: 135,
                      yMove: 150,
                      angleMove: 0
                    },
      weapon: { image: img, x: 490, y: 540 },
      attack: 20,
      hp: 100,
      name: undefined,
      shield:
                    {
                      image: img,
                      x: 260,
                      y: 640,
                      xMove: 0,
                      yMove: 0,
                      angleMove: 0
                    },
      kill: -1
    };

    const testHuman = humanArgs(CharClass);

    assert.deepEqual(testHuman, realHuman);
  });
});
