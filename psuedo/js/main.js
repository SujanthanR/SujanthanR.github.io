//Skapar spelet
var game = new Phaser.Game(800, 600, Phaser.AUTO);

//Lägger till ett spelläge
game.state.add("GameStart", GameStart);
game.state.add("GameState", GameState);
game.state.add("GameOver", GameOver);

//Startar spelets första spelläge
game.state.start("GameStart");

