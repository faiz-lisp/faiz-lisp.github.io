$( document ).ready(function() {

   // Set canvas drawing surface
   var space = document.getElementById("surface");
   var surface = space.getContext("2d");
   surface.scale(1,1);

   // Set Particles
   var particles = [];
   var particle_count = 150;//150
   //var particle_count = 100;
   for(var i = 0; i < particle_count; i++) {
      particles.push(new particle());
   }
   
   var time = 0;
   // Set wrapper and canvas items size
   var canvasWidth=320;
   var canvasHeight=480;
   //var canvasHeight=320;
   $(".wrapper").css({width:canvasWidth,height:canvasHeight});
   $("#surface").css({width:canvasWidth,height:canvasHeight});

   // shim layer with setTimeout fallback from Paul Irish
   window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame    ||
      function( callback ){
         window.setTimeout(callback, 6000 / 60);
      };
   })(); 

   function particle() {     
      //this.speed = {x: -1+Math.random()*2, y: -5+Math.random()*5};//-1,-5
      this.speed = {x: -1+Math.random()*2, y: -4+Math.random()*4};//-1,-5
      
      canvasWidth = (document.getElementById("surface").width);
      canvasHeight= (document.getElementById("surface").height);
      this.location = {x: canvasWidth/2 +Math.random()*6, y: (canvasHeight/2)+50};//35
      //this.location = {x: canvasWidth/2 +Math.random()*6, y: (canvasHeight/2)+35};

      this.radius = .5+Math.random()*1;
      this.life = 10+Math.random()*10;
      //this.life = 6+Math.random()*10;
      this.death = this.life;

      this.r = Math.round(Math.random()*255);//.255,rand,0
      this.g = Math.round(Math.random()*64);//155
      this.b = Math.round(Math.random()*64);//255
   }

   function ParticleAnimation(){
      //canvas
      surface.globalCompositeOperation = "source-over";
      surface.fillStyle = "040404";//"black";
      surface.fillRect(0, 0, canvasWidth, canvasHeight);
      surface.globalCompositeOperation = "lighter";
      
      for(var i = 0; i < particles.length; i++)
      {		
         var p = particles[i];
         
         surface.beginPath();

         p.opacity = Math.round(p.death/p.life*100)/100
         var gradient = surface.createRadialGradient(
            p.location.x, p.location.y, 0,
            p.location.x, p.location.y, p.radius
         );
         gradient.addColorStop(0  , "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
         gradient.addColorStop(0.5, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
         gradient.addColorStop(1  , "rgba("+p.r+", "+p.g+", "+p.b+", 0)");
         surface.fillStyle = gradient;
         surface.arc(p.location.x, p.location.y, p.radius, Math.PI*4, false);//*2
         //surface.arc(p.location.x, p.location.y, p.radius, Math.PI*2, false);
         surface.fill();
         p.death-=.8;//--
         //p.death--
         p.radius++;
         p.location.x += (p.speed.x);
         p.location.y += (p.speed.y);
         
         //regenerate particles
         if(p.death < 0 || p.radius < 0){
            //a brand new particle replacing the dead one
            particles[i] = new particle();
         }
      }
      
      requestAnimFrame(ParticleAnimation);

   }

   ParticleAnimation();

});