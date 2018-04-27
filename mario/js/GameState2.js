var GameState2 ={
    create: function(){
        
        //har ej nyckeln
        hasKey1 = false;
        
        this.add.tileSprite(0, 0, 960, 600, 'background:2');
        
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 1200;
        
        ground = this.add.sprite(0, 546, 'ground');
        
        //plattformarna på spelet
        platform1 = this.add.sprite(0, 420, 'grass:8x1');
        platform2 = this.add.sprite(420, 336, 'grass:2x1');
        platform3 = this.add.sprite(588, 504, 'grass:1x1');
        platform4 = this.add.sprite(672, 378, 'grass:8x1');
        platform5 = this.add.sprite(126, 252, 'grass:4x1');
        platform6 = this.add.sprite(462, 168, 'grass:6x1');
        platform7 = this.add.sprite(798, 84, 'grass:2x1');
        
        
        //enemies osynliga väggar
        enemywall1 = this.add.sprite(0, 380, 'invisible-wall');
        enemywall1.visible = false;
        enemywall2 = this.add.sprite(330, 380, 'invisible-wall');      
        //osynliga väggar till enemies 
        enemywall2.visible = false;
        enemywall3 = this.add.sprite(655, 338, 'invisible-wall');
        enemywall3.visible = false;
        enemywall4 = this.add.sprite(955, 338, 'invisible-wall');
        enemywall4.visible = false;
        enemywall5 = this.add.sprite(445, 130, 'invisible-wall');
        enemywall5.visible = false;
        enemywall6 = this.add.sprite(712, 130, 'invisible-wall');
        enemywall6.visible = false;

        //spindlarna,enemies.
        enemy1 = this.add.sprite(121, 399, 'spider');
        enemy2 = this.add.sprite(720, 362, 'spider');
        enemy3 = this.add.sprite(500, 147, 'spider');
        
        //nycklen & dörren till den 
        key1 = this.add.sprite(903, 105, 'key');
        checkpoint = this.add.sprite(169, 546, 'door')
        checkpoint.anchor.setTo(0.5, 1);
        
        //räknare för mynten
        iconcoin = this.add.sprite(20, 10, 'icon:coin')
        
        this.text = game.add.text(65, 15,"x 0", { font: "25px Arial", fill: "#fff"});

    
        
        //guldmynten 
        coin1 = this.add.sprite(231, 524, 'coin');
        coin2 = this.add.sprite(315, 524, 'coin');
        coin3 = this.add.sprite(820, 524, 'coin');
        coin4 = this.add.sprite(903, 524, 'coin');
        coin5 = this.add.sprite(273, 524, 'coin');
        coin6 = this.add.sprite(357, 524, 'coin');
        coin7 = this.add.sprite(841, 524, 'coin');
        coin8 = this.add.sprite(920, 524, 'coin');
        coin9 = this.add.sprite(399, 294, 'coin');
        coin10 = this.add.sprite(336, 357, 'coin');
        coin11 = this.add.sprite(777, 357, 'coin');
        coin12 = this.add.sprite(840, 357, 'coin');
        coin13 = this.add.sprite(900, 357, 'coin');
        
        //fysik för myntarna
        game.physics.enable([coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9 ,coin10, coin11, coin12, coin13], Phaser.Physics.ARCADE);
        
        //Fysik och så att de inte flyttar på sig
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
        
        //player, hero 
        hero = this.add.sprite(21, 525, 'hero');
        hero.inputEnabled = true;
        
            
        //fysik för alla objekt
        this.game.physics.enable([hero, ground, platform1, platform2, platform3, platform4, platform5, platform6, platform7, enemy1, enemy2, enemy3, enemywall1, enemywall2, enemywall3, enemywall4, enemywall5, enemywall6, key1, checkpoint], Phaser.Physics.ARCADE);
        
        //player studs när han landar, gravitationen och var playern är förankrad
        hero.body.bounce.y = 0.2;
        hero.body.gravity.y = 600;
        hero.anchor.setTo(0.5);
        
        //enemies studs. gravitationen, var enemeis är förankrad och så att enemies inte hamnar utanför spelet
        enemy1.body.bounce.y = 0.2;
        enemy1.body.bounce.x = 1;
        enemy1.body.gravity.y = 0;
        enemy1.anchor.setTo(0.5);
        
        enemy1.collideWorldBounds =true;
        
        enemy2.body.bounce.y = 0.2;
        enemy2.body.bounce.x = 1;
        enemy2.body.gravity.y = 0;
        enemy2.anchor.setTo(0.5);
        
        enemy2.collideWorldBounds =true;
        
        enemy3.body.bounce.y = 0.2;
        enemy3.body.bounce.x = 1;
        enemy3.body.gravity.y = 0;
        enemy3.anchor.setTo(0.5);
        
        enemy3.collideWorldBounds =true;
        
       //osynliga väggarnas gravitation och så att de inte flyttar på sig. 
        enemywall1.body.allowGravity = false;
        enemywall1.body.immovable = true;
        enemywall2.body.allowGravity = false;
        enemywall2.body.immovable = true;
        enemywall3.body.allowGravity = false;
        enemywall3.body.immovable = true;
        enemywall4.body.allowGravity = false;
        enemywall4.body.immovable = true;
        enemywall5.body.allowGravity = false;
        enemywall5.body.immovable = true;
        enemywall6.body.allowGravity = false;
        enemywall6.body.immovable = true;
        
        //markens gravitation och så att den inte flyttar på sig
        ground.body.allowGravity = false;
        ground.body.immovable = true;
        
        //plattformarnas gravitation och så att de inte flyttar på sig.
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
        
        //nyckelns gravitation, dörrens gravitation och dörren ej flyttbar.
        key1.body.allowGravity = false;
        checkpoint.body.allowGravity = false;
        checkpoint.body.immovable =  true;
        
        //får nyckeln att röra sig i luften.
        key1.y -= 10;
        this.game.add.tween(key1)
            .to({y: key1.y + 6}, 800, Phaser.Easing.Sinusoidal.InOut)
            .yoyo(true)
            .loop()
            .start();
        
       
        //Knappen för playern för jump.
        JumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        //animationer för playern
        hero.animations.add('stop', [0]);
        hero.animations.add('run', [1,2], 8, true);
        hero.animations.add('jump', [3]);
        
        //animationen för enemies
        enemy1.animations.add('crawl', [0, 1, 2], 8, true); // 8fps, looped
        enemy1.animations.play('crawl');
        
        enemy2.animations.add('crawl', [0, 1, 2], 8, true); // 8fps, looped
        enemy2.animations.play('crawl');
        
        enemy3.animations.add('crawl', [0, 1, 2], 8, true); // 8fps, looped
        enemy3.animations.play('crawl');
        
        
        
        //Coins rotation animation
        coin1.animations.add('rotate', [0, 1, 2, 1], 10, true); // 6fps, looped
        coin1.animations.play('rotate');
        coin2.animations.add('rotate', [0, 1, 2, 1], 10, true); // 6fps, looped
        coin2.animations.play('rotate');
        coin3.animations.add('rotate', [0, 1, 2, 1], 10, true); // 6fps, looped
        coin3.animations.play('rotate');
        coin4.animations.add('rotate', [0, 1, 2, 1], 10, true); // 6fps, looped
        coin4.animations.play('rotate');
        coin5.animations.add('rotate', [0, 1, 2, 1], 10, true); // 6fps, looped
        coin5.animations.play('rotate');
        coin6.animations.add('rotate', [0, 1, 2, 1], 10, true); // 6fps, looped
        coin6.animations.play('rotate');
        coin7.animations.add('rotate', [0, 1, 2, 1], 10, true); // 6fps, looped
        coin7.animations.play('rotate');
        coin8.animations.add('rotate', [0, 1, 2, 1], 10, true); // 6fps, looped
        coin8.animations.play('rotate');
        coin9.animations.add('rotate', [0, 1, 2, 1], 10, true); // 6fps, looped
        coin9.animations.play('rotate');
        coin10.animations.add('rotate', [0, 1, 2, 1], 10, true); // 6fps, looped
        coin10.animations.play('rotate');
        coin11.animations.add('rotate', [0, 1, 2, 1], 10, true); // 6fps, looped
        coin11.animations.play('rotate');
        coin12.animations.add('rotate', [0, 1, 2, 1], 10, true); // 6fps, looped
        coin12.animations.play('rotate');
        coin13.animations.add('rotate', [0, 1, 2, 1], 10, true); // 6fps, looped
        coin13.animations.play('rotate');
        
        //Så att gubben inte försvinner från spelet
        hero.body.collideWorldBounds = true;
        
        //bakgrund och spelmusik
        musik = this.add.audio('bgmusic');
        musik.play()
        jump = this.add.audio('jump');
        coin = this.add.audio('coin');
        
        //enemies hastighet
        enemy1.body.velocity.x = 100;
        enemy2.body.velocity.x = 100;
        enemy3.body.velocity.x = 100;

    
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
            hero.animations.play('stop')
            hero.body.velocity.x = 0;
        }
            
            
        this.game.physics.arcade.overlap(hero, [key1], this.collectkey, null, this);
        
        this.physics.arcade.collide(hero,[ground, platform1, platform2, platform3, platform4, platform5, platform6, platform7]);
        
        this.physics.arcade.collide(enemy1,[platform1, enemywall1, enemywall2]);
        
        this.physics.arcade.collide(enemy2,[platform4, enemywall3, enemywall4]);
        
        this.physics.arcade.collide(enemy3,[platform6, enemywall5, enemywall6]);
        
            
        this.game.physics.arcade.overlap(hero,[coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, coin11, coin12, coin13],this.collectcoin, null, this);
        

        
        if(JumpButton.isDown && hero.body.touching.down){
            hero.body.velocity.y = -700;
            jump.play();
        }
        if(JumpButton.isDown){
            hero.animations.play('jump');
           
        }
        
        
        if(this.game.physics.arcade.overlap(hero, checkpoint) && hasKey1){
            this.game.state.start("GameWin", true, false);
        }
        
        if(this.physics.arcade.collide(hero, [enemy1, enemy2, enemy3])){
            this.state.start('GameOver', true, false);
        }
        
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            this.game.state.start("GameWin", true, false);
        }  
        
    
    },
    
    init: function(){
        this.coinPickupCount = 0;
    },
    
    collectcoin: function(hero, coin1){
        coin1.kill();
        this.coinPickupCount++;
        this.text.setText("x " + this.coinPickupCount);
        coin.play();
    
        
    },
    
    collectkey: function(hero, key){
        key.kill();
        hasKey1 = true;
        coin.play();
    }

};
    
    
    
    

    
    