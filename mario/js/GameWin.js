var GameWin = {
    create: function(){
        this.add.tileSprite(0, 0, 964, 600, "background");
        
        var stil = {font: "50px Arial", fill: "#fff"};
        
        var text = this.add.text(game.world.centerX, game.world.centerY, "Coungratulainons you've Won", stil);
        text.anchor.setTo(0.5);
        
    }    

};