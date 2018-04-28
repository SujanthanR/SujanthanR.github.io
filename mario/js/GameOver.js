var GameOver = {
    create: function(){
        
        musik.stop();
        
        this.add.tileSprite(0, 0, 964, 600, "background");
        
        var stil = {font: "50px Arial", fill: "#fff"};
        
        this.add.text(700, 450, 'Made by: Sujanthan.R', {font: '20px Times', fill: '#fff'});
        
        var text = this.add.text(game.world.centerX, game.world.centerY, "Game Over", stil);
        text.anchor.setTo(0.5);
         
        var omstart = game.add.button(game.world.centerX, 500, "restart");
        omstart.anchor.setTo(0.5);
        
        
        omstart.events.onInputUp.add(function(){
            this.state.start("GameStart", true, false);
        },this);
   
    }    

};