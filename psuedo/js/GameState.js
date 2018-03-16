var ny =[];

var GameState = {
  create: function(){
    this.add.sprite(0, 0, "background");
    
      
      var rad = prompt("Skriv något fint här");
      this.namn(rad);
    
      
      
  },
    
    namn:function(rad){
        
        for(var i=rad.length-1; i >=0; i--){
        
        if(rad[i] == " "){
            ny.push("_");
        }else{
            ny.push(rad[i]);
        }
        
    
    }
        var namn = this.add.text(game.world.centerX, 150, "Så här ser det ut omvänt: "+ny.join(""), {fontSize: "35px", fill: "#fff"});
        namn.anchor.setTo(0.5);
        
        var org = this.add.text(game.world.centerX, 100, "Det här skrev du: "+rad, {fontSize: "35px", fill: "#fff"});
        org.anchor.setTo(0.5);
        
        var omstart = game.add.button(100, 300, "restart");
        var avslut = game.add.button(300, 300, "slut");
        
        avslut.events.onInputUp.add(function(){
            this.state.start("GameOver", true, false);
        },this);
        
        omstart.events.onInputUp.add(function(){
            this.state.start("GameStart", true, false);
        },this);
        
    
    }
    
    
    
};

   

         
          
          
        
          
        
          

      
      
              
          
          