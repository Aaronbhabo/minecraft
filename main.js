var canvas = new fabric.Canvas('myCanvas');

block_width = 30;
block_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_object = "";

function player_update()
{
fabric.Image.fromURL("player.png",function(img){
    player_object=img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(150);

    player_object.set({
        top:player_x,
        left:player_y
    });
    canvas.add(player_object);
});
}

function newimage(get_image)
{
fabric.Image.fromURL(get_image,function(img){
    block_object=img;
    block_object.scaleToWidth(150);
    block_object.scaleToHeight(150);

    block_object.set({
        top:player_x,
        left:player_y
    });
    canvas.add(block_object);
});
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
       keypressed = e.keyCode;
       console.log(keypressed);
       if(e.shiftKey==true && keypressed=='80'){
        block_width=block_width+10;
        block_height=block_height+10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
        
       }
       if(e.shiftKey==true && keypressed=='77'){
        block_width=block_width-10;
        block_height=block_height-10;
        document.getElementById("current_width").innerHTML=block_width;
        document.getElementById("current_height").innerHTML=block_height;
        
       }
       if(keypressed == '87'){
        newimage('wall.jpg');
        console.log("w");
       }

    if(keypressed == '71'){
     newimage('ground.png');
     console.log("g");
    }


if(keypressed == '76'){
 newimage('light_green.png');
 console.log("l");
}

if(keypressed == '84'){
    newimage('trunk.jpg');
    console.log("t");
   }

   if(keypressed == '82'){
    newimage('roof.jpg');
    console.log("r");
   }

   if(keypressed == '89'){
    newimage('yellow_wall.png');
    console.log("y");
   }
   if(keypressed == '68'){
    newimage('dark_green.png');
    console.log("d");
   }   

   if(keypressed == '85'){
    newimage('unique.png');
    console.log("u");
   }

   if(keypressed == '67'){
    newimage('cloud.jpg');
    console.log("c");
   }

   if(keypressed == '38'){
    up();
    console.log("up");
   }

   if(keypressed == '40'){
    down();
    console.log("down");
   }

   if(keypressed == '37'){
    left();
    console.log("left");
   }

   if(keypressed == '39'){
    right();
    console.log("right");
   }
}

function up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        canvas.remove(player_object);
        player_update();

    }
}

function down(){
    if(player_y<=500){
        player_y=player_y+block_height;
        canvas.remove(player_object);
        player_update();

    }
}  

function left(){
    if(player_x>=0){
        player_x=player_x-block_height;
        canvas.remove(player_object);
        player_update();

    }
}

function right(){
    if(player_x<=900){
        player_x=player_x+block_height;
        canvas.remove(player_object);
        player_update();

    }
}