//Skapar spelet
var game = new Phaser.Game(960, 600, Phaser.AUTO);

//Lägger till ett spelläge
game.state.add("GameStart", GameStart);
game.state.add('GameState', GameState);

//Startar spelets första spelläge
game.state.start("GameStart");
