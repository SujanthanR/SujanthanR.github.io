var GameState ={
    create: function(){
        this.add.tileSprite(0, 0, 960, 600, 'background');
        
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
        
        enemy1.animations.add('crawl', [0, 1, 2], 8, true); // 8fps, looped
        enemy1.animations.add('die', [0, 4, 0, 4, 0, 4, 3, 3, 3, 3, 3, 3], 12);
        enemy1.animations.play('crawl');
        
        
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
        coin12 = this.add.sprite(777, 357, 'coin');
        coin13 = this.add.sprite(861, 357, 'coin');
        coin14 = this.add.sprite(940, 357, 'coin');


        hero = this.add.sprite(21, 525, 'hero');
        //hero.inputEnabled = true;
        
        hero.animations.add('stop', [0]);
        hero.animations.add('run', [1,2], 8, true);
        hero.animations.add('jump', [3]);
        hero.animations.add('fall', [4]);
        
        
        //this.physics.enable([hero, ground, platform1, platform2, platform3, platform4, platform5, platform6, platform7], Phaser.Physics.Arcade);
        
        this.physics.enable([hero],Phaser.Physics.Arcade);
        
        
        
        
        
        pil = this.input.keyboard.createCursorKeys();
        JumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
       
    },
        update: function(){
        //bollrörelse i sidled
        
            
            if(pil.right.isDown){
            hero.animations.play('run');
            hero.x += 4;
            }else if(pil.left.isDown){
            hero.animations.play('run');
            hero.x -= 4;
            }
            if(pil.up.isDown){
            hero.animations.play('jump');
            hero.y -= 6;    
            }else if(pil.down.isDown){
            hero.animations.play('fall');
            hero.y += 6;
            }
            
            enemy1.SPEED = 100;
    
    }
    
};

    
    