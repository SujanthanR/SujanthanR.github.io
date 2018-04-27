//Skapar spelet
var game = new Phaser.Game(960, 600, Phaser.AUTO);

//Lägger till ett spelläge
game.state.add('GameStart', GameStart);
game.state.add('GameState', GameState);
game.state.add('GameState2', GameState2);
game.state.add('GameOver', GameOver);
game.state.add('GameWin', GameWin);

//Startar spelets första spelläge
game.state.start("GameStart");
