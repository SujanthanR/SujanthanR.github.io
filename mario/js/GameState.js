var GameState ={
    create: function(){
        this.add.tileSprite(0, 0, 960, 600, 'background');
        
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 30;
        
        ground = this.add.sprite(0, 546, 'ground');
        
        platform1 = this.add.sprite(0, 420, 'grass:8x1');
        platform2 = this.add.sprite(420, 336, 'grass:2x1');
        platform3 = this.add.sprite(588, 504, 'grass:1x1');
        platform4 = this.add.sprite(672, 378, 'grass:8x1');
        platform5 = this.add.sprite(126, 252, 'grass:4x1');
        platform6 = this.add.sprite(462, 168, 'grass:6x1');
        platform7 = this.add.sprite(798, 84, 'grass:2x1');
        
        enemy1 = this.add.sprite(121, 399, 'spider');
        enemy2 = this.add.sprite(800, 362, 'spider');
        enemy3 = this.add.sprite(500, 147, 'spider');
        
        key = this.add.sprite(903, 105, 'key');
        checkpoint = this.add.sprite(169, 480, 'door')
        
        coin1 = this.add.sprite(231, 524, 'coin');
        coin2 = this.add.sprite(315, 524, 'coin');
        coin3 = this.add.sprite(819, 524, 'coin');
        coin4 = this.add.sprite(903, 524, 'coin');
        coin5 = this.add.sprite(273, 524, 'coin');
        coin6 = this.add.sprite(357, 524, 'coin');
        coin7 = this.add.sprite(861, 524, 'coin');
        coin8 = this.add.sprite(940, 524, 'coin');
        coin9 = this.add.sprite(399, 294, 'coin');
        coin10 = this.add.sprite(336, 357, 'coin');
        coin11 = this.add.sprite(777, 357, 'coin');
        coin12 = this.add.sprite(861, 357, 'coin');
        coin13 = this.add.sprite(940, 357, 'coin');
        game.physics.enable([coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9 ,coin10, coin11, coin12, coin13], Phaser.Physics.ARCADE);
        
        coin1.body.allowGravity = false;
        coin1.body.immovable = true;
        coin2.body.allowGravity = false;
        coin2.body.immovable = true;
        coin3.body.allowGravity = false;
        coin3.body.immovable = true;
        coin4.body.allowGravity = false;
        coin4.body.immovable = true;
        coin5.body.allowGravity = false;
        coin5.body.immovable = true;
        coin6.body.allowGravity = false;
        coin6.body.immovable = true;
        coin7.body.allowGravity = false;
        coin7.body.immovable = true;
        coin8.body.allowGravity = false;
        coin8.body.immovable = true;
        coin9.body.allowGravity = false;
        coin9.body.immovable = true;
        coin10.body.allowGravity = false;
        coin10.body.immovable = true;
        coin11.body.allowGravity = false;
        coin11.body.immovable = true;
        coin12.body.allowGravity = false;
        coin12.body.immovable = true;
        coin13.body.allowGravity = false;
        coin13.body.immovable = true;
        
        


        hero = this.add.sprite(21, 525, 'hero');
        hero.inputEnabled = true;
        
            
        
        this.game.physics.enable([hero, ground, platform1, platform2, platform3, platform4, platform5, platform6, platform7, enemy1, enemy2, enemy3], Phaser.Physics.ARCADE);
        hero.body.bounce.y = 0.2;
        hero.body.gravity.y = 600;
        hero.anchor.setTo(0.5);
        
        enemy1.body.bounce.y = 0.2;
        enemy1.body.gravity.y = 0;
        enemy1.anchor.setTo(0.5);
        
        enemy1.collideWorldBounds =true;
        
        enemy2.body.bounce.y = 0.2;
        enemy2.body.gravity.y = 0;
        enemy2.anchor.setTo(0.5);
        
        enemy2.collideWorldBounds =true;
        
        enemy3.body.bounce.y = 0.2;
        enemy3.body.gravity.y = 0;
        enemy3.anchor.setTo(0.5);
        
        enemy3.collideWorldBounds =true;
        
        
        ground.body.allowGravity = false;
        ground.body.immovable = true;
        platform1.body.allowGravity = false;
        platform1.body.immovable = true;
        platform2.body.allowGravity = false;
        platform2.body.immovable = true;
        platform3.body.allowGravity = false;
        platform3.body.immovable = true;
        platform4.body.allowGravity = false;
        platform4.body.immovable = true;
        platform5.body.allowGravity = false;
        platform5.body.immovable = true;
        platform6.body.allowGravity = false;
        platform6.body.immovable = true;
        platform7.body.allowGravity = false;
        platform7.body.immovable = true;
        
        
        pil = this.input.keyboard.createCursorKeys();
        JumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        
        hero.animations.add('stop', [0]);
        hero.animations.add('run', [1,2], 8, true);
        hero.animations.add('jump', [3]);
        hero.animations.add('fall', [4]);
        
        enemy1.animations.add('crawl', [0, 1, 2], 8, true); // 8fps, looped
        enemy1.animations.add('die', [0, 4, 0, 4, 0, 4, 3, 3, 3, 3, 3, 3], 12);
        enemy1.animations.play('crawl');
        
        enemy2.animations.add('crawl', [0, 1, 2], 8, true); // 8fps, looped
        enemy2.animations.add('die', [0, 4, 0, 4, 0, 4, 3, 3, 3, 3, 3, 3], 12);
        enemy2.animations.play('crawl');
        
        enemy3.animations.add('crawl', [0, 1, 2], 8, true); // 8fps, looped
        enemy3.animations.add('die', [0, 4, 0, 4, 0, 4, 3, 3, 3, 3, 3, 3], 12);
        enemy3.animations.play('crawl');
        
        //enemy1.body.collideWorldBounds = true;
        
        hero.body.collideWorldBounds = true;
        
    
        
       
    },


    update: function(){        
            
            
            if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
                hero.animations.play('run');
                hero.body.velocity.x = 300;
                hero.scale.x = 1;
            }else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
                hero.animations.play('run');
                hero.body.velocity.x = -200;
                hero.scale.x = -1;               
            }else{
                hero.body.velocity.x = 0;
                hero.animations.play('stop')
            }
            
            
           // if(enemy1.bod
        
        
        
        
        
        
            this.physics.arcade.collide(hero,[ground, platform1, platform2, platform3, platform4, platform5, platform6, platform7]);
        
            this.physics.arcade.collide(enemy1,[platform1]);
        
            this.physics.arcade.collide(enemy2,[platform4]);
        
            this.physics.arcade.collide(enemy3,[platform6]);
            
            this.game.physics.arcade.overlap(hero,[coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, coin11, coin12, coin13],this.collectcoin, null, this);
        
        
        
            if(JumpButton.isDown && hero.body.touching.down){
                hero.animations.play('jump');
                hero.body.velocity.y = -400;
            }
        
            this.coinPickupCount = 0;
        
        //this.game.physics.arcade.overlap(hero, checkpoint, this.ny, null, this);
        
        //if(this.game.physics.arcade.collide(hero, checkpoint)){
            //this.game.state.start("GameStatewin", true, false);
        
        if(this.physics.arcade.collide(hero, [enemy1, enemy2, enemy3])){
        this.state.start('GameOver', true, false);
        }
        
        
    
    },
    
    collectcoin: function(hero, coin1){
         coin1.kill();
        this.coinPickupCount++;
        
    }
};
    
    
    
    

    
    