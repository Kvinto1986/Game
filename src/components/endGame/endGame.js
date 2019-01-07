module.exports = (human, firebase, swal) => {
  const audio = new Audio();
  audio.src = '../../components/endGame/endGameRes/illidan.mp3';
  audio.load();
  audio.play();

  function rankTable (rankArr) {
    const tableRank = document.createElement('table');
    tableRank.id = 'tableRank';
    const img = document.createElement('img');
    img.src = '../../components/endGame/endGameRes/over.jpg';
    const playerRow = document.createElement('tr');
    const playerName = document.createElement('th');
    const playerKills = document.createElement('th');
    tableRank.appendChild(img);
    tableRank.appendChild(playerRow);
    playerRow.appendChild(playerName);
    playerRow.appendChild(playerKills);
    playerName.innerText = 'Игрок';
    playerKills.innerText = 'Побеждено врагов';

    for (let i = 0; i < rankArr.length; i += 1) {
      const playerAddRow = document.createElement('tr');
      const playerAddName = document.createElement('td');
      const playerAddKills = document.createElement('td');
      tableRank.appendChild(playerAddRow);
      playerAddRow.appendChild(playerAddName);
      playerAddRow.appendChild(playerAddKills);
      playerAddName.innerText = rankArr[i].name;
      playerAddKills.innerText = rankArr[i].kills;
      if (human.name === rankArr[i].name) {
        playerAddName.style.color = 'red';
        playerAddKills.style.color = 'red';
      }
    }

    swal({
      className: 'swal',
      content: tableRank,
      closeOnClickOutside: false,
      closeOnEsc: false,
      buttons: {
        toMain: {
          text: 'На главную',
          className: 'attack-btn'
        },
        reload: {
          text: 'Играть еще раз',
          className: 'heal-btn'
        }

      }

    })
      .then((value) => {
        switch (value) {
          case 'toMain':
            window.open('../../../index.html', '_self');
            break;

          case 'reload':
            window.location.reload();
            break;

          default:
            break;
        }
      });
  }

  function getRankTable (rankTab) {
    const config = {
      apiKey: 'AIzaSyDeIBoTk8_gUbkupM2RbmoPT1--3-qOlKU',
      authDomain: 'warcraft4game.firebaseapp.com',
      databaseURL: 'https://warcraft4game.firebaseio.com',
      projectId: 'warcraft4game',
      storageBucket: 'warcraft4game.appspot.com'

    };

    const gamer = {
      name: human.name,
      kills: human.kill
    };

    const rankArr = [];

    firebase.initializeApp(config);

    const rootRef = firebase.database().ref();
    const storesRef = rootRef.child('players/');
    const newStoreRef = storesRef.push();
    newStoreRef.set(gamer);

    firebase.database().ref('players/').once('value').then((snapshot) => {
      snapshot.forEach((userSnapshot) => {
        const player = userSnapshot.val();
        rankArr.push(player);
      });

      rankArr.sort((a, b) => b.kills - a.kills);

      rankTab(rankArr);
    });
  }

  getRankTable(rankTable);
};
