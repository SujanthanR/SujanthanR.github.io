var GameWin = {
    create: function(){
        this.add.tileSprite(0, 0, 964, 600, "background");
        
        var stil = {font: "25px Arial", fill: "#000"};
        
        var text = this.add.text(game.world.centerX, game.world.centerY, "You Won", stil);
        text.anchor.setTo(0.5);  
    
        var omstart = game.add.button(100, 300, "restart");
        omstart.anchor.setTo(0.5);
        
        
        omstart.events.onInputUp.add(function(){
            this.state.start("GameState", true, false);
        },this);
   
        }
    };  
