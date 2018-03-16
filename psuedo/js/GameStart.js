var GameStart = {
    
    preload: function(){
        this.load.image("background", "assets/crash.jpg");
        this.load.image("play", "assets/playbutt.png"); 
        this.load.spritesheet("slut", "assets/endknapp.png", 150, 42)
        this.load.spritesheet("restart", "assets/restartknapp.png", 150,42)
    },
    
    create: function(){
        this.add.sprite(0, 0, "background");
        
        var namn = this.add.text(game.world.centerX, 100, "Bak & Fram", {fontSize: "25px", fill: "#fff"});
        namn.anchor.setTo(0.5);
        
        var namn = this.add.text(game.world.centerX, 200, "Klicka på knappen för att skriva och spegelvända", {fontSize: "20px", fill: "#fff"});
        namn.anchor.setTo(0.5);
        
        var button = game.add.button(game.world.centerX,game.world.centerY, "play");
        button.anchor.setTo(0.5);
        
        button.events.onInputUp.add(function(){
            this.state.start("GameState", true, false);
        },this);
    }
};