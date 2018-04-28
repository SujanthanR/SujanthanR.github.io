var GameStart = {
    
    //förladdar bilderna & ljudet
    preload: function(){
        this.game.load.image('background', 'assets/background.png');
        this.game.load.image('background:2', 'assets/background2.png');
        this.game.load.image('ground', 'assets/ground.png');
        this.game.load.image('grass:8x1', 'assets/grass_8x1.png');
        this.game.load.image('grass:6x1', 'assets/grass_6x1.png');
        this.game.load.image('grass:4x1', 'assets/grass_4x1.png');
        this.game.load.image('grass:2x1', 'assets/grass_2x1.png');
        this.game.load.image('grass:1x1', 'assets/grass_1x1.png');
        this.game.load.image('invisible-wall', 'assets/invisible_wall.png');
        this.game.load.image('icon:coin', 'assets/coin_icon.png');
        this.game.load.image('key', 'assets/key.png');
        this.game.load.image('play', 'assets/playbutt.png');
        this.game.load.image('rightkey', 'assets/rightkey.png');
        this.game.load.image('leftkey', 'assets/leftkey.png');
        this.game.load.image('restart', 'assets/restart.png');
        this.game.load.image('jumper', 'assets/jump.png');
        
        this.game.load.audio('bgmusic', 'audio/bgm.mp3');
        this.game.load.audio('jump', 'audio/jump.wav');
        this.game.load.audio('coin', 'audio/coin.wav');
        this.game.load.audio('key', 'audio/key.wav');
        this.game.load.audio('door', 'audio/door.wav');
        
        this.game.load.spritesheet('hero', 'assets/hero.png', 36, 42);
        this.game.load.spritesheet('coin', 'assets/coin_animated.png', 22, 22);
        this.game.load.spritesheet('spider', 'assets/spider.png', 42, 32);
        this.game.load.spritesheet('door', 'assets/door.png', 42, 66);
        this.game.load.spritesheet('icon:key', 'assets/key_icon.png', 34, 30);
        
            
    },
    
    
    create: function(){
        
        
        //När restart, har ej nyckeln då. 
        hasKey1 = false;
        
        this.add.tileSprite(0, 0, 960, 600, "background");
        
        //navigationshjälp. 
        this.add.text(420, 400, "How to play :", {fontSize: "20px", fill: "#fff"});
                
        
        this.add.image(380,430, 'jumper');
        this.add.text(420, 480, "SPACEBAR", {fontSize: "20px", fill: "#fff"});
        
        
        this.add.image(600, 440, 'rightkey');
        this.add.text(600, 480, "Right", {fontSize: "15px", fill: "#fff"});
        
        this.add.image(310, 440, 'leftkey');
        this.add.text(320, 480, "Left", {fontSize: "15px", fill: "#fff"});
        
        
        //Titeln
        var namn = this.add.text(game.world.centerX, 200, "Alasas Mario", {fontSize: "55px", fill: "fff"});
        namn.anchor.setTo(0.5);
        
        //playbutton
        var button =
        game.add.button(game.world.centerX,game.world.centerY, "play");
        button.anchor.setTo(0.5);
        
        button.events.onInputUp.add(function(){
            this.state.start('GameState', true, false);
        },this);
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
}